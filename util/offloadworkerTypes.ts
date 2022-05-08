export enum OffloadWorkerOperation {
  PING,
  DELETE_ATTEMPT_BEFORE_NUMBER,
  SEG_TIME_ARRAY_TO_SECONDS,
  GOLD_COORDINATES_FROM_SECONDS_ARRAY,
  XML_PARSE_TEXT,
  MERGE_SPLIT_INTO_NEXT_ONE,
  UPDATE_STORE_DATA,
  GET_PB,
  GENERATE_SPLIT_DETAIL
}

export interface OffloadWorkerMessage {
  magic: string,
  message: OffloadWorkerRequest
}

export interface OffloadWorkerRequest {
  instruction: OffloadWorkerOperation,
  args: any[]
}
