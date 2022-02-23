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
