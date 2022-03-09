import {Segment} from '~/util/splits';

export interface SingleSplitState {
  currentSplit: Segment | null;
}

export const singleSplitState: SingleSplitState = {
  currentSplit: null
};
