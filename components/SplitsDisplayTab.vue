<template>
  <div>
    <collapsible-card title="Options" :lazy="false">
      <attempt-selector v-model="currentAttemptNumber" :attempts="attempts"/>
      <b-col cols="10" offset="1">
        <hr/>
      </b-col>
      <loading-switch v-model="graphYAxisToZero" class="mt-2 mb-2">
        Graphs' Y axis starts at zero
      </loading-switch>
      <loading-switch v-model="graphCurrentAttemptHline" class="mb-2">
        Display current attempt's times as a horizontal line
      </loading-switch>
      <loading-switch v-model="graphMedianAttemptHline" class="mb-2">
        Display median attempt's times as a horizontal line
      </loading-switch>
      <b-col cols="10" offset="1">
        <hr/>
      </b-col>
      <div class="text-center mt-3">
        <b-button @click="unfoldAllSplits" variant="success">Expand all split info</b-button>
        <b-button @click="foldAllSplits" variant="success">Collapse all split info</b-button>
      </div>
    </collapsible-card>

    <subsplits-display :split="split"
                       v-for="split in detailedSegments"
                       :key="`split-${split.Index}-${split.Name}`"
                       ref="splitAccess"
                       :splitIndex="split.Index"
                       :graphYAxisToZero="graphYAxisToZero"
                       :graphCurrentAttemptHline="graphCurrentAttemptHline"
                       :graphMedianAttemptHline="graphMedianAttemptHline"
                       :currentAttemptNumber="currentAttemptNumber"
                       :segments-holder="segmentsHolder"
                       class="mb-3"/>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue, Watch} from 'nuxt-property-decorator';
import store                         from '~/util/store';
import {Attempt, Segments}           from '~/util/splits';
import {DetailedSegment}             from '~/util/splitProcessing';
import {asArray}                     from '~/util/util';
import SubsplitsDisplay              from './SubsplitsDisplay.vue';

@Component
export default class SplitsDisplayTab extends Vue {
  graphCurrentAttemptHline: boolean = false;

  graphMedianAttemptHline: boolean = false;

  graphYAxisToZero: boolean = false;

  currentAttemptNumber: number = 1;

  @Prop()
  attempts!: Attempt[];

  @Prop()
  detailedSegments!: DetailedSegment[];

  @Prop()
  segmentsHolder!: Segments;

  get PB() {
    return store.state.PB;
  }

  $refs!: {
    splitAccess: SubsplitsDisplay | SubsplitsDisplay[]
  }

  foldAllSplits() {
    const splitAccess = asArray(this.$refs.splitAccess);
    splitAccess.forEach((split : SubsplitsDisplay) => split.foldSplit());
  }

  unfoldAllSplits() {
    const splitAccess = asArray(this.$refs.splitAccess);
    splitAccess.forEach((split : SubsplitsDisplay) => split.unfoldSplit());
  }

  @Watch('PB', {immediate: true})
  onPbUpdate(newVal: Attempt | null) {
    if (newVal)
      this.currentAttemptNumber = newVal?.['@_id'];
  }

  @Watch('graphYAxisToZero')
  yAxisStore() {
    localStorage.setItem('graphYAxisToZero', JSON.stringify(this.graphYAxisToZero));
  }

  @Watch('graphCurrentAttemptHline')
  attemptLineStore() {
    localStorage.setItem('graphCurrentAttemptHline', JSON.stringify(this.graphCurrentAttemptHline));
  }

  @Watch('graphMedianAttemptHline')
  medianLineStore() {
    localStorage.setItem('graphMedianAttemptHline', JSON.stringify(this.graphMedianAttemptHline));
  }

  mounted() {
    const yAxisSetting       = localStorage.getItem('graphYAxisToZero');
    const attemptLineSetting = localStorage.getItem('graphCurrentAttemptHline');
    const medianLineSetting  = localStorage.getItem('graphMedianAttemptHline');

    if (yAxisSetting)
      this.graphYAxisToZero = JSON.parse(yAxisSetting);

    if (attemptLineSetting)
      this.graphCurrentAttemptHline = JSON.parse(attemptLineSetting);

    if (medianLineSetting)
      this.graphMedianAttemptHline = JSON.parse(medianLineSetting);
  }
}
</script>
