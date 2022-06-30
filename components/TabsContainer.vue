<template>
  <b-card class="main-card" no-body>
    <b-tabs class="main-tabs" card pills align="center">
      <b-tab title="Summary" active>
        <run-overview :run="parsedSplits.Run" class="mb-4"/>

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
                            :segments-holder="parsedSplits.Run.Segments"
                            :parsed-splits="parsedSplits"/>
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
import {DetailedSegment}      from '~/util/splitProcessing';

@Component
export default class TabsContainer extends Vue {
  graphYAxisToZero: boolean = false;

  filterRuns: boolean = false;

  @Prop()
  detailedSegments!: DetailedSegment[];

  @Prop()
  parsedSplits!: SplitFile;

  get runAttempts(): Attempt[] {
    const attempts = this.parsedSplits.Run.AttemptHistory.Attempt;

    return this.filterRuns ? attempts.filter(a => selectTime(a)) : attempts;
  }
}
</script>

<style lang="scss" scoped>
.main-card {
  background-color: transparent;

  .main-tabs {
    background-color: hsla(var(--page-hue), 75%, 45%, 0.2);
  }
}
</style>
