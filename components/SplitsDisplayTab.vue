<template>
  <div>
    <collapsible-card title="Options" :lazy="false">
      <attempt-selector v-model="currentAttemptNumber"/>
      <b-col cols="10" offset="1">
        <hr/>
      </b-col>
      <loading-switch v-model="graphYAxisToZero" class="mt-2 mb-2">
        Graphs' Y axis starts at zero
      </loading-switch>
      <loading-switch v-model="graphCurrentAttemptHline" class="mb-2">
        Display current attempt's times as a horizontal line
      </loading-switch>
      <loading-switch v-model="graphCurrentAttemptMline" class="mb-2">
        Display median attempt's times as a horizontal line
      </loading-switch>
    </collapsible-card>

    <subsplits-display :split="split"
                       v-for="split in splits"
                       :key="`split-${split.Index}-${split.Name}`"
                       :splitIndex="split.Index"
                       :graphYAxisToZero="graphYAxisToZero"
                       :graphCurrentAttemptHline="graphCurrentAttemptHline"
                       :graphMedianAttemptHline="graphMedianAttemptHline"
                       :currentAttemptNumber="currentAttemptNumber"
                       :segments="segments"
                       class="mb-3"/>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue, Watch} from 'nuxt-property-decorator';
import store                         from '~/util/store';
import {Attempt, Segment}            from '~/util/splits';
import {DetailedSegment}             from '~/util/splitProcessing';

@Component
export default class SplitsDisplayTab extends Vue {
  graphCurrentAttemptHline: boolean = false;

  graphMedianAttemptHline: boolean = false;

  graphYAxisToZero: boolean = false;

  currentAttemptNumber: number = 1;

  @Prop()
  splits!: DetailedSegment[];

  @Prop()
  segments!: Segment[];

  get PB() {
    return store.state.PB;
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

  mounted() {
    const yAxisSetting       = localStorage.getItem('graphYAxisToZero');
    const attemptLineSetting = localStorage.getItem('graphCurrentAttemptHline');

    if (yAxisSetting)
      this.graphYAxisToZero = JSON.parse(yAxisSetting);

    if (attemptLineSetting)
      this.graphCurrentAttemptHline = JSON.parse(attemptLineSetting);
  }
}
</script>