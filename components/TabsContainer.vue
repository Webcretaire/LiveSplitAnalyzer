<template>
  <b-card class="main-card" no-body>
    <b-tabs class="main-tabs" card pills align="center">
      <b-tab title="Summary" active>
        <run-overview :run="parsedSplits.Run" class="mb-4"/>

        <collapsible-card id="OptionsCard" title="General settings">
          <loading-switch v-if="globalState.hasGameTime" v-model="globalState.useRealTime" class="mb-2">
            Use real time instead of game time
          </loading-switch>
          <h6 class="mt-4">Size of info panels</h6>
          <b-row>
            <b-col cols="12" xl="8" offset-xl="2">
              <vue-slider @change="e => $emit('updateWidth', e)" :value="pageWidth" :min="0" :max="3" lazy adsorb/>
            </b-col>
          </b-row>
        </collapsible-card>

        <attempt-stats :attempts="runAttempts" :graphYAxisToZero="graphYAxisToZero"/>
      </b-tab>

      <b-tab title="Attempt analysis">
        <attempt-analysis-tab :detailed-segments="detailedSegments"
                              :segments="parsedSplits.Run.Segments.Segment"
                              :attempts="parsedSplits.Run.AttemptHistory.Attempt"
                              :parsed-splits="parsedSplits"/>
      </b-tab>
      <b-tab title="Comparisons">
        <comparison-tab :segments="parsedSplits.Run.Segments.Segment"/>
      </b-tab>
      <b-tab title="Splits analysis">
        <splits-display-tab :detailed-segments="detailedSegments"
                            :attempts="parsedSplits.Run.AttemptHistory.Attempt"
                            :segments-holder="parsedSplits.Run.Segments"/>
      </b-tab>
    </b-tabs>
  </b-card>
</template>

<script lang="ts">
import {
  Attempt,
  selectTime,
  SplitFile
}                             from '~/util/splits';
import {Component, Prop, Vue} from 'nuxt-property-decorator';
import VueSlider              from 'vue-slider-component';
import store                  from '~/util/store';
import {DetailedSegment}      from '~/util/splitProcessing';

@Component({components: {VueSlider}})
export default class TabsContainer extends Vue {
  graphYAxisToZero: boolean = false;

  globalState = store.state;

  filterRuns: boolean = false;

  @Prop()
  detailedSegments!: DetailedSegment[];

  @Prop()
  parsedSplits!: SplitFile;

  @Prop()
  pageWidth!: number;

  get runAttempts(): Attempt[] {
    const attempts = this.parsedSplits.Run.AttemptHistory.Attempt;

    return this.filterRuns ? attempts.filter(a => selectTime(a)) : attempts;
  }
}
</script>

<style lang="scss" scoped>
.main-card {
  background-color: transparent;
}
</style>
