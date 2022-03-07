import {GlobalEventEmitter} from '~/util/globalEvents';

export const whithLoad = (f: Function) => {
  GlobalEventEmitter.$emit('startLoading');

  // Even with this.$nextTick the loading modal doesn't have time to load most of the time, so wait a little bit
  setTimeout(() => {
    f();
    GlobalEventEmitter.$emit('stopLoading');
  }, 500);
};

export const whithLoadAsync = (f: Function) => {
  GlobalEventEmitter.$emit('startLoading');

  // Even with this.$nextTick the loading modal doesn't have time to load most of the time, so wait a little bit
  setTimeout(() => {
    f(() => GlobalEventEmitter.$emit('stopLoading'));
  }, 500);
};
