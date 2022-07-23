import {
  computePbFromAttemptHistory,
  cumulateAttemptTimesForAllSplits,
  deleteAttemptBeforeNumber,
  generateSplitDetail,
  goldCoordinatesFromSecondsArray,
  mergeSplitIntoNextOne,
  moveTime,
  parseSplitFile,
  segTimeArrayToSeconds
}                                                     from '~/util/splitProcessing';
import {OffloadWorkerMessage, OffloadWorkerOperation} from '~/util/offloadworkerTypes';
import store                                          from '~/util/store';

const ctx: Worker = self as any; // See https://stackoverflow.com/a/50420456

const answer = (e: MessageEvent<OffloadWorkerMessage>, data: any) => {
  ctx.postMessage({magic: e.data.magic, message: data} as OffloadWorkerMessage);
};

const messageCallback = (e: MessageEvent<OffloadWorkerMessage>) => {
  let out: any = null;

  const a = e.data.message.args;

  switch (e.data.message.instruction) {
    case OffloadWorkerOperation.PING:
      out = a[0];
      break;
    case OffloadWorkerOperation.DELETE_ATTEMPT_BEFORE_NUMBER:
      out = deleteAttemptBeforeNumber(a[0], a[1], a[2]);
      break;
    case OffloadWorkerOperation.SEG_TIME_ARRAY_TO_SECONDS:
      out = segTimeArrayToSeconds(a[0]);
      break;
    case OffloadWorkerOperation.GOLD_COORDINATES_FROM_SECONDS_ARRAY:
      out = goldCoordinatesFromSecondsArray(a[0]);
      break;
    case OffloadWorkerOperation.XML_PARSE_TEXT:
      out = parseSplitFile(a[0]);
      break;
    case OffloadWorkerOperation.MERGE_SPLIT_INTO_NEXT_ONE:
      out = mergeSplitIntoNextOne(a[0], a[1]);
      break;
    case OffloadWorkerOperation.UPDATE_STORE_DATA:
      Object.assign(store.state, a[0]);
      break;
    case OffloadWorkerOperation.GET_PB:
      out = computePbFromAttemptHistory(a[0]);
      break;
    case OffloadWorkerOperation.GENERATE_SPLIT_DETAIL:
      out = generateSplitDetail(a[0]);
      break;
    case OffloadWorkerOperation.MOVE_TIME_TO_OTHER_SPLIT:
      out = moveTime(a[0], a[1], a[2]);
      break;
    case OffloadWorkerOperation.CUMULATE_ATTEMPT_TIMES_FOR_ALL_SPLITS:
      out = cumulateAttemptTimesForAllSplits(a[0]);
      break;
  }

  answer(e, out);
};

ctx.addEventListener('message', messageCallback);
