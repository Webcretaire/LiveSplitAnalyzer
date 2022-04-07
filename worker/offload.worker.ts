import {
  deleteAttemptBeforeNumber,
  goldCoordinatesFromSecondsArray, mergeSplitIntoNextOne,
  segTimeArrayToSeconds
} from '~/util/splitProcessing';
import {OffloadWorkerMessage, OffloadWorkerOperation} from '~/util/offloadworkerTypes';
import {xmlParser}                                    from '~/util/xml';

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
      out = xmlParser.parse(a[0]);
      break;
    case OffloadWorkerOperation.MERGE_SPLIT_INTO_NEXT_ONE:
      out = mergeSplitIntoNextOne(a[0], a[1]);
  }

  answer(e, out);
};

ctx.addEventListener('message', messageCallback);
