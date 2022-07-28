import {Attempt, AutoSplitterSettings} from '~/util/splits';
import Vue                             from 'vue';
import { filter } from 'cypress/types/bluebird';

export interface SavedSettings {
  pageWidth?: number,
  attemptAnalysisMergeSubsplits?: boolean,
  graphCurrentAttemptHline?: boolean,
  graphMedianAttemptHline?: boolean,
  pageHue?: number,
  cumulateSplits?: boolean,
  [key: string]: any // Won't be used in practice, but we need it to assign default values in a very dynamic way (index.vue)
}

export interface Filter {
  type?: string,
  timeMin?: number,
  timeMax?: number
}

export interface Store {
  savedSettings: SavedSettings,
  hasGameTime: boolean,
  useRealTime: boolean,
  splitFileIsModified: boolean,
  PB: Attempt | null,
  autoSplitterSettings: AutoSplitterSettings | null,
  filters: Filter[]
}

const state = Vue.observable({
  savedSettings: {},
  hasGameTime: false,
  useRealTime: false,
  splitFileIsModified: false,
  PB: null,
  autoSplitterSettings: null,
  filters: []
} as Store);

export default {
  get state() {
    return state;
  }
};
