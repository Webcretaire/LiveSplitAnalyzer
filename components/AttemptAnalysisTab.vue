<template>
  <div>
    <collapsible-card title="Options" :lazy="false">
      <attempt-selector v-model="currentAttemptNumber" :attempts="attempts" :use-to-display="true"/>
      <b-col cols="10" offset="1">
        <hr/>
      </b-col>
      <loading-switch v-model="displayLabels" class="mb-2">
        Display labels for doughnut charts
      </loading-switch>
      <loading-switch v-model="savedSettings.attemptAnalysisMergeSubsplits" class="mb-2">
        Merge subsplits
      </loading-switch>
    </collapsible-card>

    <attempt-overview :segments="segments"
                      :attempt="currentAttempt"
                      :detailed-segments="detailedSegments"
                      :is-pb="isPb"
                      :display-labels="displayLabels"
                      :merge-subsplits="savedSettings.attemptAnalysisMergeSubsplits"/>


    <collapsible-card id="ResetStatsCard" class="text-center" title="Reset stats" lazy v-model="resetStatsOpen">
      <reset-stats v-if="resetStatsOpen" :segments="segments" :attempts="attempts"/>
    </collapsible-card>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Watch, Prop} from 'nuxt-property-decorator';
import store                         from '~/util/store';
import {Attempt, Segment, SplitFile} from '~/util/splits';
import {DetailedSegment}             from '~/util/splitProcessing';

@Component
export default class AttemptAnalysisTab extends Vue {
  @Prop()
  detailedSegments!: DetailedSegment[];

  @Prop()
  attempts!: Attempt[];

  @Prop()
  segments!: Segment[];

  @Prop()
  parsedSplits!: SplitFile;

  resetStatsOpen: boolean = false;

  currentAttemptNumber: number = 1;

  displayLabels: boolean = false;

  globalState = store.state;

  savedSettings = store.state.savedSettings;

  get PB() {
    return this.globalState.PB;
  }

  @Watch('PB', {immediate: true})
  onPbUpdate(newVal: Attempt | null) {
    if (newVal)
      this.currentAttemptNumber = newVal?.['@_id'];
  }

  get isPb(): boolean {
    return this.currentAttemptNumber === this.PB?.['@_id'];
  }

  get currentAttempt() {
    return this.attempts.find((a) => a['@_id'] == this.currentAttemptNumber) || this.PB;
  }

  mounted() {
    this.displayLabels = this.segments.length <= 30;
  }
}
</script>
