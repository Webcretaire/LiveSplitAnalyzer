import {
  Attempt,
  AttemptHistory,
  Run,
  Segment,
  SegmentHistoryTime,
  selectTime
}                                                      from '~/util/splits';
import {asArray, XYCoordinates}                        from '~/util/util';
import {secondsToLivesplitFormat, stringTimeToSeconds} from '~/util/durations';

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
  run.AttemptHistory.Attempt = asArray(run.AttemptHistory.Attempt).filter(
    (attempt: Attempt) => attempt['@_id'] == pb || attempt['@_id'] > attemptNumber
  );

  // Delete individual splits attempts
  run.Segments.Segment = run.Segments.Segment.map(segment => ({
    ...segment,
    SegmentHistory: {
      Time: asArray(segment.SegmentHistory.Time).filter(
        (time: SegmentHistoryTime) => time['@_id'] == pb || time['@_id'] > attemptNumber
      )
    }
  }));

  return run;
};

export const mergeSplitIntoNextOne = (segments: Segment[], chosenSplitIndex: number) => {
  const chosenSplit                            = segments[chosenSplitIndex];
  const nextSplit                              = segments[chosenSplitIndex + 1];
  const chosenSplitTimes: SegmentHistoryTime[] = asArray(chosenSplit.SegmentHistory.Time);
  const nextSplitTimes: SegmentHistoryTime[]   = asArray(nextSplit.SegmentHistory.Time);

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

  nextSplit.SegmentHistory.Time = newTimes;

  segments.splice(chosenSplitIndex, 1);

  return segments;
};

export const computePbFromAttemptHistory = (history: AttemptHistory) => asArray(history.Attempt)
  .reduce((curLowest: Attempt | null, cur: Attempt) => {
    const curTime = selectTime(cur);
    if (!curTime) return curLowest;
    const compare = selectTime(curLowest) || '999:59:59.99';
    return !curLowest || stringTimeToSeconds(curTime) < stringTimeToSeconds(compare) ? cur : curLowest;
  }, null);
