<template>
  <div>
    <b-card :id="`SingleSplitCard_${splitIndex}`" class="SingleSplitCard text-left">
      <div class="limit-height">
        <div class="split-icon-container mr-4 ml-2" v-if="split.Icon">
          <b-card-img :src="split.Icon" class="split-icon" block/>
        </div>
        <div class="mt-auto mb-auto">
          <h3>
            {{ split.Name }} <small v-if="split.IsSubsplit">(subsplit)</small>
          </h3>
          <p v-if="split.BestSegmentTime" class="m-0">
            <span class="mr-2">
              <strong>Best {{ cumulateSplits ? 'pace' : 'time' }}: </strong> {{ bestTimeDisplay }}
            </span>
            <b-dropdown text="Edit split" variant="outline-dark" lazy>
              <b-dropdown-item-button @click="fixGoldsModal" variant="dark">Fix fake golds</b-dropdown-item-button>
              <b-dropdown-item-button @click="moveTimeModal" variant="dark">Move time between splits
              </b-dropdown-item-button>
              <b-dropdown-item-button v-if="nextSplit" @click="mergeNextSplit" variant="dark">Merge into next split
              </b-dropdown-item-button>
            </b-dropdown>
          </p>
          <b-button class="toggle-collapse" v-b-toggle="collapseName" variant="outline-dark" pill>
            <font-awesome-icon icon="chevron-left" :rotation="collapseVisible ? 270 : null"/>
          </b-button>
        </div>
      </div>
    </b-card>

    <b-collapse :id="collapseName" class="mt-1" v-model="collapseVisible">
      <b-card class="text-left">
        <Plotly :data="plot_data" :layout="layout" :display-mode-bar="true" @relayout="onPlotRelayout"/>
      </b-card>
    </b-collapse>
  </div>
</template>

<script lang="ts">
import {
  Segments,
  Segment,
  splitFileIsModified
}                                from '~/util/splits';
import {Component, mixins, Prop} from 'nuxt-property-decorator';
import {GlobalEventEmitter}      from '~/util/globalEvents';
import {withLoad}                from '~/util/loading';
import store                     from '~/util/store';
import {offload}                 from '~/util/offloadWorker';
import {OffloadWorkerOperation}  from '~/util/offloadworkerTypes';
import BaseLinePlotComponent     from '~/components/BaseLinePlotComponent.vue';
// Plotly doesn't seem to have TS types available anywhere so we need to ignore the errors
// @ts-ignore
import {Plotly}                  from 'vue-plotly';

@Component({components: {'Plotly': Plotly}})
export default class SplitDisplay extends mixins(BaseLinePlotComponent) {
  @Prop()
  segmentsHolder!: Segments;

  fixGoldsModal() {
    GlobalEventEmitter.$emit('openModal', 'ManualGoldUpdateModal', {split: this.split});
  }

  moveTimeModal() {
    GlobalEventEmitter.$emit('openModal', 'MoveTimeModal', {
      splits: this.segmentsHolder.Segment,
      currentSplitIndex: this.splitIndex
    });
  }

  foldSplit() {
    this.collapseVisible = false;
  }

  unfoldSplit() {
    this.collapseVisible = true;
  }

  get nextSplit(): Segment | undefined {
    return this.segmentsHolder.Segment[this.splitIndex + 1];
  }

  doMergeNextSplit(endLoad: Function) {
    if (!this.nextSplit) {
      this.$bvToast.toast('Next split doesn\'t exist', {
        title: 'Splits merged',
        autoHideDelay: 5000,
        appendToast: false,
        variant: 'danger'
      });
      endLoad();

      return;
    }

    // Copy this before splice otherwise the next split name won't refer to the correct split
    const curSplitName  = this.split.Name;
    const nextSplitName = this.nextSplit.Name;

    offload(OffloadWorkerOperation.MERGE_SPLIT_INTO_NEXT_ONE, this.segmentsHolder.Segment, this.splitIndex)
      .then(segments => {
        splitFileIsModified(true);

        const autosplitterSettings = store.state.autoSplitterSettings;
        if (autosplitterSettings?.Splits?.Split)
          autosplitterSettings.Splits.Split.splice(this.splitIndex, 1);
        this.segmentsHolder.Segment = segments;

        this.$bvToast.toast(`Merged ${curSplitName} with ${nextSplitName}`, {
          title: 'Splits merged',
          autoHideDelay: 5000,
          appendToast: false,
          variant: 'success'
        });
      }).finally(() => endLoad());
  }

  mergeNextSplit() {
    if (!this.nextSplit) return;

    GlobalEventEmitter.$emit('openConfirm', `Merge "${this.split.Name}" into "${this.nextSplit.Name}"?`, () => {
      withLoad(() => new Promise<void>(resolve => this.doMergeNextSplit(resolve)));
    });
  }
}
</script>

<style scoped lang="scss">
* {
  color: black;
}

img {
  filter: drop-shadow(0 0 0.5rem rgba(0, 0, 0, 1));
}

.limit-height {
  display: flex;
}

.split-icon-container {
  min-width: 6.5rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  .split-icon {
    object-fit: contain;
    max-width: 100%;
    max-height: 5rem;
    width: auto;
    height: auto;
  }
}

.toggle-collapse {
  position: absolute;
  top: 1rem;
  right: 1rem
}

small {
  color: #6b6b6b;
  font-size: 1rem;
}
</style>
