import {Attempt, AutoSplitterSettings} from '~/util/splits';
import {Filter}                        from '~/util/filter';
import Vue                             from 'vue';

export interface SavedSettings {
  pageWidth?: number,
  attemptAnalysisMergeSubsplits?: boolean,
  graphCurrentAttemptHline?: boolean,
  graphMedianAttemptHline?: boolean,
  pageHue?: number,
  cumulateSplits?: boolean,
  [key: string]: any // Won't be used in practice, but we need it to assign default values in a very dynamic way (index.vue)
}

export interface Store {
  savedSettings: SavedSettings,
  hasGameTime: boolean,
  useRealTime: boolean,
  splitFileIsModified: boolean,
  PB: Attempt | null,
  autoSplitterSettings: AutoSplitterSettings | null,
  filters: Filter[],
  filteredAttempts: number[]
}

const state = Vue.observable({
  savedSettings: {},
  hasGameTime: false,
  useRealTime: false,
  splitFileIsModified: false,
  PB: null,
  autoSplitterSettings: null,
  filters: [],
  filteredAttempts: []
} as Store);

export default {
  get state() {
    return state;
  }
};
