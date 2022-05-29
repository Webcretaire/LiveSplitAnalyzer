import {
  Attempt,
  AttemptHistory,
  OptionalRealAndGameTime,
  RealAndGameTime,
  Run,
  Segment,
  SegmentHistoryTime,
  selectTime,
  SplitFile
}                                                      from '~/util/splits';
import {asArray, XYCoordinates}                        from '~/util/util';
import {secondsToLivesplitFormat, stringTimeToSeconds} from '~/util/durations';
import {xmlParser}                                     from '~/util/xml';
import {extractPng}                                    from './pngExtractor';
import store                                           from './store';

export interface DetailedSegment extends Segment {
  Subsplits: DetailedSegment[],
  Index: number, // Index in the original raw SplitFile
  IsSubsplit: boolean
}

const moveTransferTime = (chosenTime: OptionalRealAndGameTime, transferTime: number) => {
  const newRealTime   = stringTimeToSeconds(chosenTime.RealTime || '0:0:0.0') + transferTime;
  chosenTime.RealTime = secondsToLivesplitFormat(newRealTime);

  if (store.state.hasGameTime) {
    const newGameTime   = stringTimeToSeconds(chosenTime?.GameTime || '0:0:0.0') + transferTime;
    chosenTime.GameTime = secondsToLivesplitFormat(newGameTime);
  }
};

export const moveTime = (currentSplit: Segment, otherSplit: Segment, transferTime: number): Segment[] => {
  const currentSplitTimes       = currentSplit.SegmentHistory?.Time;
  const otherSplitTimes         = otherSplit.SegmentHistory?.Time;
  const currentSplitComparisons = currentSplit.SplitTimes.SplitTime;
  const otherSplitComparisons   = otherSplit.SplitTimes.SplitTime;

  moveTransferTime(currentSplit.BestSegmentTime, -transferTime);
  moveTransferTime(otherSplit.BestSegmentTime, transferTime);

  currentSplitTimes?.forEach((attemptCurrentSplit) => moveTransferTime(attemptCurrentSplit, -transferTime));

  otherSplitTimes?.forEach((attemptOtherSplit) => moveTransferTime(attemptOtherSplit, transferTime));

  currentSplitComparisons.forEach((comparison) => moveTransferTime(comparison, -transferTime));

  otherSplitComparisons?.forEach((comparison) => moveTransferTime(comparison, transferTime));

  return [currentSplit, otherSplit];
};

export const segTimeArrayToSeconds = (times: SegmentHistoryTime[]) => times.map((t) => {
  const time = selectTime(t);
  return time ? stringTimeToSeconds(time) : null;
});

export const goldCoordinatesFromSecondsArray = (times: Array<number | null>): XYCoordinates => {
  let goldX = 0;
  let goldY = 999999;
  for (let i = 0; i < times.length; ++i) {
    const t = times[i];
    if (t && t < goldY) {
      goldX = i;
      goldY = t;
    }
  }
  return {x: goldX, y: goldY};
};

export const deleteAttemptBeforeNumber = (run: Run, pb: number, attemptNumber: number) => {
  // Delete attempts from attempt Array
  run.AttemptHistory.Attempt = run.AttemptHistory.Attempt.filter(
    (attempt: Attempt) => attempt['@_id'] == pb || attempt['@_id'] > attemptNumber
  );

  // Delete individual splits attempts
  run.Segments.Segment = run.Segments.Segment.map(segment => ({
    ...segment,
    SegmentHistory: {
      Time: (segment.SegmentHistory?.Time || []).filter(
        (time: SegmentHistoryTime) => time['@_id'] == pb || time['@_id'] > attemptNumber
      )
    }
  }));

  return run;
};

export const mergeSplitIntoNextOne = (segments: Segment[], chosenSplitIndex: number) => {
  const chosenSplit                            = segments[chosenSplitIndex];
  const nextSplit                              = segments[chosenSplitIndex + 1];
  const chosenSplitTimes: SegmentHistoryTime[] = (chosenSplit.SegmentHistory?.Time || []);
  const nextSplitTimes: SegmentHistoryTime[]   = (nextSplit.SegmentHistory?.Time || []);

  const newTimes = nextSplitTimes.map(nextSplitTime => {
    const out: SegmentHistoryTime = {'@_id': nextSplitTime['@_id']};
    const chosenSplitTime         = chosenSplitTimes.find(split => split['@_id'] === nextSplitTime['@_id']);

    const realTime2 = nextSplitTime.RealTime ? stringTimeToSeconds(nextSplitTime.RealTime) : 0;
    if (realTime2) {
      const realTime1 = chosenSplitTime?.RealTime ? stringTimeToSeconds(chosenSplitTime.RealTime) : 0;
      out.RealTime    = secondsToLivesplitFormat(realTime1 + realTime2);
    }

    const gameTime2 = nextSplitTime.GameTime ? stringTimeToSeconds(nextSplitTime.GameTime) : 0;
    if (gameTime2) {
      const gameTime1 = chosenSplitTime?.GameTime ? stringTimeToSeconds(chosenSplitTime.GameTime) : 0;
      out.GameTime    = secondsToLivesplitFormat(gameTime1 + gameTime2);
    }

    return out;
  });

  const runsWithTimes = newTimes.filter(t => selectTime(t));

  const goldCoord = goldCoordinatesFromSecondsArray(
    runsWithTimes.map(t => stringTimeToSeconds(selectTime(t) as string))
  );

  const goldSplit = runsWithTimes[goldCoord.x];

  // We know RealTime exists from "filter" above
  nextSplit.BestSegmentTime = {RealTime: goldSplit.RealTime as string};
  if (goldSplit.GameTime)
    nextSplit.BestSegmentTime.GameTime = goldSplit.GameTime;

  if (!nextSplit.SegmentHistory) nextSplit.SegmentHistory = {Time: []};
  nextSplit.SegmentHistory.Time = newTimes;

  segments.splice(chosenSplitIndex, 1);

  return segments;
};

export const computePbFromAttemptHistory = (history: AttemptHistory) => history.Attempt
  .reduce((curLowest: Attempt | null, cur: Attempt) => {
    const curTime = selectTime(cur);
    if (!curTime) return curLowest;
    const compare = selectTime(curLowest) || '999:59:59.99';
    return !curLowest || stringTimeToSeconds(curTime) < stringTimeToSeconds(compare) ? cur : curLowest;
  }, null);

export const parseSplitFile = (fileContent: string): SplitFile => {
  const out = xmlParser.parse(fileContent) as SplitFile;

  // Make sure all properties that can be an array or an object are an array
  if (out.Run.Metadata.Variables)
    out.Run.Metadata.Variables.Variable = asArray(out.Run.Metadata.Variables.Variable);
  out.Run.AttemptHistory.Attempt = asArray(out.Run.AttemptHistory.Attempt);
  out.Run.Segments.Segment       = asArray(out.Run.Segments.Segment);
  out.Run.Segments.Segment.forEach((val, i, arr) => {
    if (val.SegmentHistory)
      arr[i].SegmentHistory!.Time = asArray(val.SegmentHistory.Time);
    arr[i].SplitTimes.SplitTime = asArray(val.SplitTimes.SplitTime);
    // Name could be a number, force it to be a string
    arr[i].Name                 = String(val.Name);
  });

  return out;
};

export const generateSplitDetail = (rawSplits: Segment[]) => {
  const out: DetailedSegment[]               = [];
  let virtualSplitIndex                      = 0;
  let accumulateSubsplits: DetailedSegment[] = [];
  rawSplits.forEach((rawSplit: Segment, index: number) => {
    const rawIcon = extractPng(rawSplit.Icon);
    const icon    = rawIcon
      ? `data:image/jpeg;base64,${btoa(new Uint8Array(rawIcon).reduce((data, byte) => data + String.fromCharCode(byte), ''))}`
      : '';

    // If current split is a subsplit, add it to the pile and go to next one
    if (rawSplit.Name.startsWith('-')) {
      accumulateSubsplits.push({
        ...rawSplit,
        Subsplits: [],
        Name: rawSplit.Name.substring(1).trim(),
        Index: index,
        Icon: icon,
        IsSubsplit: true
      });
      return;
    }

    const nameMatches                 = rawSplit.Name.match(/\{(.*)\}(.*)/);
    const splitToAdd: DetailedSegment = {
      ...rawSplit,
      Subsplits: [],
      Index: index,
      Icon: icon,
      IsSubsplit: false
    };

    if (accumulateSubsplits.length || nameMatches) { // We're ending a subsplit group
      // nameMatches[0] has the whole string, [1] has the split name, [2] has the subsplit name
      accumulateSubsplits.push({
        ...rawSplit,
        Subsplits: [],
        Name: nameMatches?.[2].trim() || rawSplit.Name,
        Index: index,
        Icon: icon,
        IsSubsplit: true
      });
      splitToAdd.Name = nameMatches?.[1] || rawSplit.Name;
    }

    splitToAdd.Subsplits = [...accumulateSubsplits];

    // If we have stored subsplits, agregate their times in the "big split"
    if (accumulateSubsplits.length) {
      // This split is "virtual", it doesn't really exist in the splitfile, so give it a negative Index
      splitToAdd.Index = --virtualSplitIndex;

      const lastSubsplit = accumulateSubsplits[accumulateSubsplits.length - 1];

      // Accumulate time history
      const timeHistoryToSum = lastSubsplit.SegmentHistory?.Time;
      if (!timeHistoryToSum) {
        delete splitToAdd.SegmentHistory;
      } else {
        // Iterate other attempts of current split
        splitToAdd.SegmentHistory = {
          Time: timeHistoryToSum.map(time => {
            // Iterate over the subsplits of current group, and find corresponding attempt
            const times = accumulateSubsplits.reduce((acc: RealAndGameTime, accSplit: DetailedSegment) => {
              const curAttemptTime = accSplit.SegmentHistory?.Time.find(t => t['@_id'] === time['@_id']);

              const outAcc = {...acc};

              if (curAttemptTime?.GameTime) {
                if (!outAcc.GameTime) outAcc.GameTime = '0:0:0.0';
                outAcc.GameTime = secondsToLivesplitFormat(
                  stringTimeToSeconds(outAcc.GameTime) +
                  stringTimeToSeconds(curAttemptTime.GameTime)
                );
              }

              if (curAttemptTime?.RealTime) {
                outAcc.RealTime = secondsToLivesplitFormat(
                  stringTimeToSeconds(outAcc.RealTime) +
                  stringTimeToSeconds(curAttemptTime.RealTime)
                );
              }

              return outAcc;
            }, {RealTime: '0:0:0.0'});

            return {...times, '@_id': time['@_id']};
          })
        };
      }

      // Re-compute gold
      if (splitToAdd.SegmentHistory) { // If think this should always be true, but who knows
        const goldCoord = goldCoordinatesFromSecondsArray(
          splitToAdd.SegmentHistory.Time.map(t => stringTimeToSeconds(selectTime(t) as string))
        );

        const goldSplit            = splitToAdd.SegmentHistory.Time[goldCoord.x];
        // We know RealTime exists from "filter" above
        splitToAdd.BestSegmentTime = {RealTime: goldSplit.RealTime as string};
        if (goldSplit.GameTime)
          splitToAdd.BestSegmentTime.GameTime = goldSplit.GameTime;
      }

      // Reset the subsplit pile
      accumulateSubsplits = [];
    }

    out.push(splitToAdd);
  });

  return out;
};
