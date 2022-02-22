export interface RealAndGameTime {
  'RealTime': string,
  'GameTime': string
}

export interface AttemptHistory {
  'Attempt': Array<RealAndGameTime | string>;
}

export interface RunMetadataVariables {
  'Variable': string[];
}

export interface RunMetadata {
  'Run': string,
  'Platform': string,
  'Region': string,
  'Variables': RunMetadataVariables
}

export interface SegmentHistory {
  'Time': Array<RealAndGameTime | string>;
}

export interface SplitTimes {
  'SplitTime': RealAndGameTime
}

export interface Segment {
  'Name': string,
  'Icon': string,
  'SplitTimes': SplitTimes,
  'BestSegmentTime': RealAndGameTime,
  'SegmentHistory': SegmentHistory
}

export interface Segments {
  Segment: Segment[];
}

export interface Run {
  'GameIcon': string,
  'GameName': string,
  'CategoryName': string,
  'LayoutPath': string,
  'Metadata': RunMetadata,
  'Offset': string,
  'AttemptCount': number,
  'AttemptHistory': AttemptHistory,
  'Segments': Segments
}

export interface SplitFile {
  'Run': Run;
}
