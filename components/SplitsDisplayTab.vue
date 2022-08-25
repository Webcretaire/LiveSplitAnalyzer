<template>
  <div>
    <collapsible-card title="Options" :lazy="false">
      <attempt-selector v-model="currentAttemptNumber" :attempts="attempts"/>
      <b-col cols="10" offset="1">
        <hr/>
      </b-col>
      <loading-switch v-model="savedSettings.graphCurrentAttemptHline" class="mb-2">
        Display current attempt's times as a horizontal line
      </loading-switch>
      <loading-switch v-model="savedSettings.graphMedianAttemptHline" class="mb-2">
        Display median attempt's times as a horizontal line
      </loading-switch>
      <loading-switch v-model="savedSettings.cumulateSplits">
        Show pace so far instead of individual split times
        <span v-b-tooltip.hover
              title="For big splitfiles (lots of splits or attempts), this might slow down the page for a while, be patient."
              class="help-question text-warning">
        <font-awesome-icon icon="warning" class="warning-icon"/>
      </span>
      </loading-switch>
    </collapsible-card>

    <div class="mb-2 text-left">
      <a @click="unfoldAllSplits" class="text-white" href="javascript:void(0)">Expand all split info</a>
      <a @click="foldAllSplits" class="text-white ml-3" href="javascript:void(0)">Collapse all split info</a>
    </div>

    <subsplits-display :split="split"
                       v-for="split in detailedSegments"
                       :key="`split-${split.Index}-${split.Name}`"
                       ref="splitAccess"
                       :graph-current-attempt-hline="savedSettings.graphCurrentAttemptHline"
                       :graph-median-attempt-hline="savedSettings.graphMedianAttemptHline"
                       :cumulate-splits="savedSettings.cumulateSplits"
                       :cumulated-split-times="cumulatedSplitTimes"
                       :current-attempt-number="currentAttemptNumber"
                       :segments-holder="segmentsHolder"
                       :parsed-splits="parsedSplits"
                       class="mb-3"/>
  </div>
</template>

<script lang="ts">
import {
  Attempt,
  SegmentHistoryTime,
  Segments,
  SplitFile
}                                    from '~/util/splits';
import {Component, Prop, Vue, Watch} from 'nuxt-property-decorator';
import store                         from '~/util/store';
import {DetailedSegment}             from '~/util/splitProcessing';
import {asArray}                     from '~/util/util';
import SubsplitsDisplay              from './SubsplitsDisplay.vue';
import {offload}                     from '~/util/offloadWorker';
import {OffloadWorkerOperation}      from '~/util/offloadworkerTypes';
import {withLoad}                    from '~/util/loading';

@Component
export default class SplitsDisplayTab extends Vue {
  currentAttemptNumber: number = 1;

  globalState = store.state;

  savedSettings = store.state.savedSettings;

  @Prop()
  attempts!: Attempt[];

  @Prop()
  detailedSegments!: DetailedSegment[];

  @Prop()
  segmentsHolder!: Segments;

  @Prop()
  parsedSplits!: SplitFile;

  cumulatedSplitTimes: SegmentHistoryTime[][] = [];

  get PB() {
    return this.globalState.PB;
  }

  $refs!: {
    splitAccess: SubsplitsDisplay | SubsplitsDisplay[]
  };

  foldAllSplits() {
    const splitAccess = asArray(this.$refs.splitAccess);
    splitAccess.forEach((split: SubsplitsDisplay) => split.foldSplit());
  }

  unfoldAllSplits() {
    const splitAccess = asArray(this.$refs.splitAccess);
    splitAccess.forEach((split: SubsplitsDisplay) => split.unfoldSplit());
  }

  @Watch('PB', {immediate: true})
  onPbUpdate(newVal: Attempt | null) {
    if (newVal)
      this.currentAttemptNumber = newVal?.['@_id'];
  }

  @Watch('savedSettings.cumulateSplits', {immediate: true})
  @Watch('segmentsHolder.Segment', {deep: true})
  @Watch('globalState.filters', {deep: true})
  @Watch('globalState.filteredAttempts', {deep: true})
  updateCumulatedSplitTimes() {
    if (!this.savedSettings.cumulateSplits) return;

    const consideredSegments = this.globalState.filters.length
      ? this.segmentsHolder.Segment.map(segment => {
        const out = {...segment};
        if (out.SegmentHistory)
          out.SegmentHistory = { Time: out.SegmentHistory.Time.filter(t => this.globalState.filteredAttempts.includes(t['@_id'])) };
        return out;
      })
      : this.segmentsHolder.Segment;

    withLoad(() => offload(OffloadWorkerOperation.CUMULATE_ATTEMPT_TIMES_FOR_ALL_SPLITS, consideredSegments)
      .then(r => this.cumulatedSplitTimes = r));
  }
}
</script>

<style scoped lang="scss">
.warning-icon {
  font-size: 1rem;
  padding-bottom: 0.2rem;
}
</style>
