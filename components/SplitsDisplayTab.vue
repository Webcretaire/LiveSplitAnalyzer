<template>
  <div>
    <collapsible-card title="Options" :lazy="false">
      <attempt-selector v-model="currentAttemptNumber" :attempts="attempts"/>
      <b-col cols="10" offset="1">
        <hr/>
      </b-col>
      <loading-switch v-model="savedSettings.graphYAxisToZero" class="mt-2 mb-2">
        Graphs' Y axis starts at zero
      </loading-switch>
      <loading-switch v-model="savedSettings.graphCurrentAttemptHline" class="mb-2">
        Display current attempt's times as a horizontal line
      </loading-switch>
      <loading-switch v-model="savedSettings.graphMedianAttemptHline" class="mb-2">
        Display median attempt's times as a horizontal line
      </loading-switch>
      <loading-switch v-model="savedSettings.cumulateSplits">
        Show general pace instead of individual split times
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
                       :splitIndex="split.Index"
                       :graphYAxisToZero="savedSettings.graphYAxisToZero"
                       :graphCurrentAttemptHline="savedSettings.graphCurrentAttemptHline"
                       :graphMedianAttemptHline="savedSettings.graphMedianAttemptHline"
                       :cumulateSplits="cumulateSplits"
                       :currentAttemptNumber="currentAttemptNumber"
                       :segments-holder="segmentsHolder"
                       :parsed-splits="parsedSplits"
                       class="mb-3"/>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue, Watch}  from 'nuxt-property-decorator';
import store                          from '~/util/store';
import {Attempt, Segments, SplitFile} from '~/util/splits';
import {DetailedSegment}              from '~/util/splitProcessing';
import {asArray}                      from '~/util/util';
import SubsplitsDisplay               from './SubsplitsDisplay.vue';

@Component
export default class SplitsDisplayTab extends Vue {
  graphCurrentAttemptHline: boolean = false;

  graphMedianAttemptHline: boolean = false;

  graphYAxisToZero: boolean = false;

  cumulateSplits: boolean = false;

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
}
</script>
