<template>
  <b-card class="main-card" no-body>
    <b-tabs class="main-tabs" card pills align="center" lazy>
      <b-tab title="Summary" active>
        <div v-if="attemptsExist">
          <run-overview :run="parsedSplits.Run" class="mb-4" :game-cover="gameCover"/>

          <attempt-stats :attempts="runAttempts"/>
        </div>
        <div v-else>
          <p>No attempts available</p>
        </div>
      </b-tab>

      <b-tab title="Attempt analysis">
        <attempt-analysis-tab v-if="attemptsExist"
                              :detailed-segments="detailedSegments"
                              :segments="parsedSplits.Run.Segments.Segment"
                              :attempts="parsedSplits.Run.AttemptHistory.Attempt"
                              :parsed-splits="parsedSplits"/>
        <div v-else>
          <p>No attempts available</p>
        </div>
      </b-tab>
      <b-tab title="Comparisons">
        <comparison-tab :segments="parsedSplits.Run.Segments.Segment"/>
      </b-tab>
      <b-tab title="Splits analysis">
        <splits-display-tab v-if="attemptsExist"
                            :detailed-segments="detailedSegments"
                            :attempts="parsedSplits.Run.AttemptHistory.Attempt"
                            :segments-holder="parsedSplits.Run.Segments"
                            :parsed-splits="parsedSplits"/>
        <div v-else>
          <p>No attempts available</p>
        </div>
      </b-tab>
      <b-tab title="Attempts detail">
        <attempt-detail-tab v-if="attemptsExist" :parsed-splits="parsedSplits" :game-cover="gameCover"/>
        <div v-else>
          <p>No attempts available</p>
        </div>
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
import store                  from '~/util/store';

@Component
export default class TabsContainer extends Vue {
  filterRuns: boolean = false;

  @Prop()
  detailedSegments!: DetailedSegment[];

  @Prop()
  parsedSplits!: SplitFile;

  @Prop()
  gameCover!: string;

  get runAttempts(): Attempt[] {
    const attempts = this.parsedSplits.Run.AttemptHistory.Attempt;

    return this.filterRuns ? attempts.filter(a => selectTime(a)) : attempts;
  }

  get attemptsExist() {
    if (store.state.filters.length)
      return this.parsedSplits.Run.AttemptHistory && store.state.filteredAttempts.length;

    return !!this.parsedSplits.Run.AttemptHistory;
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
