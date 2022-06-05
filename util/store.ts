import Vue                                        from 'vue';
import {Attempt, AutoSplitterSettings, SplitFile} from '~/util/splits';

export interface Store {
  hasGameTime: boolean,
  useRealTime: boolean,
  splitFile: SplitFile | null,
  splitFileIsModified: boolean,
  PB: Attempt | null,
  autoSplitterSettings: AutoSplitterSettings | null
}

const state = Vue.observable({
  hasGameTime: false,
  useRealTime: false,
  splitFile: null,
  splitFileIsModified: false,
  PB: null,
  autoSplitterSettings: null
} as Store);

export default {
  get state() {
    return state;
  }
};
