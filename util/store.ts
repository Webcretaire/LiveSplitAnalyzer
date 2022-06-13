import {Attempt, AutoSplitterSettings} from '~/util/splits';
import Vue                             from 'vue';

export interface Store {
  hasGameTime: boolean,
  useRealTime: boolean,
  splitFileIsModified: boolean,
  PB: Attempt | null,
  autoSplitterSettings: AutoSplitterSettings | null
}

const state = Vue.observable({
  hasGameTime: false,
  useRealTime: false,
  splitFileIsModified: false,
  PB: null,
  autoSplitterSettings: null
} as Store);

export default {
  get state() {
    return state;
  }
};
