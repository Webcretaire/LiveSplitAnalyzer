import {
  OffloadWorkerMessage,
  OffloadWorkerOperation,
  OffloadWorkerRequest
}                 from '~/util/offloadworkerTypes';
import Worker     from '~/worker/offload.worker.ts';
import {Deferred} from '~/util/util';

const worker = new Worker();

const operationsInProgress: Record<string, Deferred> = {};

worker.addEventListener('message', (e: MessageEvent<OffloadWorkerMessage>) => {
  const op = operationsInProgress[e.data.magic];

  if (!op) {
    console.error(`Got message from worker with no matching operation: ${e.data.magic}`);
    return;
  }

  delete operationsInProgress[e.data.magic];
  op.resolve(e.data.message);
});

export const offload = (operation: OffloadWorkerOperation, ...args: any[]): Promise<any> => {
  let magic;

  do {
    magic = btoa((Math.random() * 1e10).toString());
  } while (operationsInProgress[magic]);

  operationsInProgress[magic] = new Deferred();
  worker.postMessage({message: {instruction: operation, args: args} as OffloadWorkerRequest, magic: magic});

  return operationsInProgress[magic].promise;
};

