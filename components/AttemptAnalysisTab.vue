<template>
  <div>
    <collapsible-card title="Options" :lazy="false">
      <attempt-selector v-model="currentAttemptNumber" :attempts="attempts"/>
      <b-col cols="10" offset="1">
        <hr/>
      </b-col>
      <loading-switch v-model="displayLabels" class="mb-2">
        Display labels for doughnut charts
      </loading-switch>
      <loading-switch v-model="mergeSubsplits" class="mb-2">
        Merge subsplits
      </loading-switch>
    </collapsible-card>
    <toolbox :current-attempt-number="currentAttemptNumber" class="mb-4"/>

    <attempt-overview :run="globalState.splitFile.Run"
                      :attempt="currentAttempt"
                      :detailed-segments="detailedSegments"
                      :is-pb="isPb"
                      :display-labels="displayLabels"
                      :merge-subsplits="mergeSubsplits"/>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Watch, Prop} from 'nuxt-property-decorator';
import store                         from '~/util/store';
import {Attempt, Segment}            from '~/util/splits';
import {DetailedSegment}             from '~/util/splitProcessing';

@Component
export default class AttemptAnalysisTab extends Vue {
  @Prop()
  detailedSegments!: DetailedSegment[];

  @Prop()
  attempts!: Attempt[];

  @Prop()
  segments!: Segment[];

  currentAttemptNumber: number = 1;

  displayLabels: boolean = false;

  mergeSubsplits: boolean = false;

  globalState = store.state;

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

  @Watch('mergeSubsplits')
  mergeSubsplitsStore() {
    localStorage.setItem('mergeSubsplits', JSON.stringify(this.mergeSubsplits));
  }

  mounted() {
    this.displayLabels = this.segments.length <= 30;

    const mergeSetting = localStorage.getItem('mergeSubsplits');
    if (mergeSetting)
      this.mergeSubsplits = JSON.parse(mergeSetting);
  }
}
</script>

