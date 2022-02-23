export interface RealAndGameTime {
  'RealTime': string;
  'GameTime': string;
}

export interface OptionnalRealAndGameTime {
  'RealTime'?: string;
  'GameTime'?: string;
}

export interface Attempt extends OptionnalRealAndGameTime {
  '@_id': number;
  '@_started': number;
  '@_isStartedSynced': string;
  '@_ended': string;
  '@_isEndedSynced': string;
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
  'Variables': RunMetadataVariables;
}

export interface IdAttributeOnly {
  '@_id': string;
}

export interface SegmentHistoryTime extends OptionnalRealAndGameTime {
  '@_id': number;
}

export interface SegmentHistory {
  'Time': SegmentHistoryTime[];
}

export interface SplitTime extends RealAndGameTime {
  '@_name': string;
}

export interface SplitTimes {
  'SplitTime': SplitTime;
}

export interface Segment {
  'Name': string;
  'Icon': string;
  'SplitTimes': SplitTimes;
  'BestSegmentTime': RealAndGameTime;
  'SegmentHistory': SegmentHistory;
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

export const stringTimeToSeconds = (time: string): number => {
  const t = time.match(/([0-9]+):([0-9]+):([0-9.]+)/);

  if (!t) return 0; // Should not happen but we need to please TS

  const hours   = +t[1];
  const minutes = +t[2];
  const seconds = +t[3];

  return seconds + 60 * minutes + 3600 * hours;
};

export const formatTime = (time: string): string => {
  const t = time.match(/([0-9]+):([0-9]+):([0-9.]+)/);

  if (!t) return ''; // Should not happen but we need to please TS

  // t[0] contains the whole string
  const hours   = +t[1];
  const minutes = +t[2];
  const seconds = +t[3];
  let out       = '';
  if (hours)
    out += `${hours}h`;
  if (minutes)
    out += `${minutes}m`;
  out += `${seconds < 10 ? '0' : ''}${seconds}s`;

  return out;
};
