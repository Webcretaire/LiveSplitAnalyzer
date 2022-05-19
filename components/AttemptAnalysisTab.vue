<template>
  <div>
    <collapsible-card title="Options" :lazy="false">
      <attempt-selector v-model="currentAttemptNumber"/>
      <b-col cols="10" offset="1">
        <hr/>
      </b-col>
      <loading-switch v-model="displayLabels" class="mb-2">
        Display labels for doughnut charts
      </loading-switch>
      <loading-switch v-model="displayLabels" class="mb-2">
        Merge subsplits
      </loading-switch>
    </collapsible-card>
    <toolbox :current-attempt-number="currentAttemptNumber" class="mb-4"/>

    <attempt-overview :run="globalState.splitFile.Run"
                      :attempt="currentAttempt"
                      :is-pb="isPb"
                      :display-labels="displayLabels"
                      :merge-subsplits="mergeSubsplits"/>
                      
  </div>
</template>

<script lang="ts">
import {Component, Vue, Watch} from 'nuxt-property-decorator';
import store                   from '~/util/store';
import {Attempt}               from '~/util/splits';

@Component
export default class AttemptAnalysisTab extends Vue {
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
    return this.globalState.splitFile!.Run.AttemptHistory.Attempt.find((a) => a['@_id'] == this.currentAttemptNumber) || this.PB;
  }

  mounted() {
    this.displayLabels = (this.globalState.splitFile!.Run.Segments.Segment.length || 0) <= 30;
  }
}
</script>

