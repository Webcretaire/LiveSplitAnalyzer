import Vue   from 'vue';
import {Run} from '~/util/splits';

interface Store {
  hasGameTime: boolean,
  useRealTime: boolean,
  run: Run | null
}

const state = Vue.observable({
  hasGameTime: false,
  useRealTime: false,
  run: null
} as Store);

export default {
  get state() {
    return state;
  }
};
