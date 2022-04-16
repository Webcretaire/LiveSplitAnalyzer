import Vue         from 'vue';
import {SplitFile} from '~/util/splits';

export interface Store {
  hasGameTime: boolean,
  useRealTime: boolean,
  splitFile: SplitFile,
  splitFileIsModified: boolean
}

const state = Vue.observable({
  hasGameTime: false,
  useRealTime: false,
  splitFile: {},
  splitFileIsModified: false
} as Store);

export default {
  get state() {
    return state;
  }
};
