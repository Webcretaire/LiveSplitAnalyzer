import {GlobalEventEmitter} from '~/util/globalEvents';

export const withLoad = (f: () => any) => {
  GlobalEventEmitter.$emit('startLoading', f);
};

