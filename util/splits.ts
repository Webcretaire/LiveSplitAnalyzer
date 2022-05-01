import store                     from '~/util/store';
import {stringTimeToSeconds}     from '~/util/durations';
import {confirmQuit, quitIsSafe} from '~/util/util';

export interface RealAndGameTime {
  'RealTime': string;
  'GameTime'?: string;
}

export interface OptionalRealAndGameTime {
  'RealTime'?: string;
  'GameTime'?: string;
}

export interface Attempt extends OptionalRealAndGameTime {
  '@_id': number;
  '@_started': number;
  '@_isStartedSynced': string;
  '@_ended': string;
  '@_isEndedSynced': string;
  'PauseTime'?: string;
}

export interface AttemptHistory {
  'Attempt': Attempt[];
}

export interface RunMetadataVariable {
  '#text': string;
  '@_name': string;
}

export interface RunMetadataVariables {
  'Variable': RunMetadataVariable[];
}

export interface RunMetadataPlatform {
  '#text': string;
  '@_usesEmulator': string;
}

export interface RunMetadata {
  'Run': IdAttributeOnly;
  'Platform': RunMetadataPlatform;
  'Region': string;
  'Variables'?: RunMetadataVariables;
}

export interface IdAttributeOnly {
  '@_id': string;
}

export interface SegmentHistoryTime extends OptionalRealAndGameTime {
  '@_id': number;
}

export interface SegmentHistory {
  'Time': SegmentHistoryTime[];
}

export interface SplitTime extends RealAndGameTime {
  '@_name': string;
}

export interface SplitTimes {
  'SplitTime': SplitTime[];
}

export interface Segment {
  'Name': string;
  'Icon': string;
  'SplitTimes': SplitTimes;
  'BestSegmentTime': RealAndGameTime;
  'SegmentHistory'?: SegmentHistory;
}

export interface Segments {
  Segment: Segment[];
}

export interface AutoSplitterSettingsSplits {
  'Split': string[];
}

export interface AutoSplitterSettings {
  'Ordered': string;
  'AutosplitEndRuns': string;
  'AutosplitStartRuns': string;
  'Splits': AutoSplitterSettingsSplits;
}

export interface Run {
  'GameIcon': string;
  'GameName': string;
  'CategoryName': string;
  'LayoutPath': string;
  'Metadata': RunMetadata;
  'Offset': string;
  'AttemptCount': number;
  'AttemptHistory': AttemptHistory;
  'Segments': Segments;
  'AutoSplitterSettings': AutoSplitterSettings;
  '@_version': string;
}

export interface XmlMetadata {
  '@_version': number;
  '@_encoding': string;
}

export interface SplitFile {
  '?xml': XmlMetadata;
  'Run': Run;
}

export type TimeLike = RealAndGameTime | OptionalRealAndGameTime | SegmentHistoryTime;

export type OptionalTimeLike = TimeLike | null | undefined;

export const selectTime = (t: OptionalTimeLike): string | null => {
  if (t?.GameTime && !store.state.useRealTime)
    return t.GameTime;

  return t?.RealTime || null;
};

export const cumulatedSumOfBests = (segments: Segments, useGameTime: boolean | null = null): Array<number> => {
  let timeSoFar = 0;

  return segments.Segment.map((segment) => {
    let best_seg_t;
    if (useGameTime === true) best_seg_t = segment.BestSegmentTime.GameTime;
    else if (useGameTime === false) best_seg_t = segment.BestSegmentTime.RealTime;
    else best_seg_t = selectTime(segment.BestSegmentTime);

    if (best_seg_t)
      timeSoFar += stringTimeToSeconds(best_seg_t);

    return timeSoFar;
  });
};

export const availableComparisons = (segments: Segments) => {
  return segments.Segment.reduce((acc: string[], segment: Segment) => {
    const splitTime = segment.SplitTimes.SplitTime;

    splitTime.forEach((s: SplitTime) => {
      if (!acc.includes(s['@_name']))
        acc.push(s['@_name']);
    });

    return acc;
  }, []);
};

export const splitFileIsModified = (modified: boolean) => {
  store.state.splitFileIsModified = modified;
  if (modified) confirmQuit();
  else quitIsSafe();
};
