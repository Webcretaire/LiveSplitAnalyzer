import {GlobalEventEmitter} from '~/util/globalEvents';

export const whithLoad = (f: Function) => {
  GlobalEventEmitter.$emit('startLoading', () => {
    f();
    GlobalEventEmitter.$emit('stopLoading');
  });
};

export const withLoadAsync = (f: Function) => {
  GlobalEventEmitter.$emit('startLoading', () => {
    f(() => GlobalEventEmitter.$emit('stopLoading'));
  });
};
