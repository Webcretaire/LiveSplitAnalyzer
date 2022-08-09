<template>
  <div>
    <attempt-detail-card v-for="(attempt, index) in attemptsLatestToOldest"
                         :attempt="attempt"
                         :game-cover="gameCover"
                         :last-split="lastSplitByAttempt[index]"
                         :pb="PBsLatestToOldest[index]"
                         :segments="parsedSplits.Run.Segments.Segment"/>
    <b-button variant="light"
              class="mb-3"
              @click="loadMore"
              v-if="attemptsToRender !== parsedSplits.Run.AttemptHistory.Attempt.length - 1">
      Load more
    </b-button>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue, Watch} from 'nuxt-property-decorator';
import {selectTime, SplitFile}       from '~/util/splits';
import {withLoad}                    from '~/util/loading';
import {offload}                     from '~/util/offloadWorker';
import {OffloadWorkerOperation}      from '~/util/offloadworkerTypes';
import {SegmentNameIndex}            from '~/util/splitProcessing';
import {stringTimeToSeconds}         from '~/util/durations';

@Component
export default class AttemptDetailTab extends Vue {
  @Prop()
  parsedSplits!: SplitFile;

  @Prop()
  gameCover!: string;

  lastSplitByAttempt: SegmentNameIndex[] = [];

  attemptsToRender: number = 30;

  scrollTimeout: boolean = false;

  get attemptsLatestToOldest() {
    const attempts = [...this.parsedSplits.Run.AttemptHistory.Attempt];
    return attempts.reverse().slice(0, this.attemptsToRender);
  }

  @Watch('attemptsLatestToOldest', {immediate: true})
  updateLastsplitByAttempt() {
    withLoad(() =>
      offload(
        OffloadWorkerOperation.LAST_SPLIT_NAME_REACHED_BY_ATTEMPT,
        this.parsedSplits.Run.Segments.Segment,
        this.attemptsLatestToOldest
      ).then(r => this.lastSplitByAttempt = r)
    );
  }

  get PBUpperBound() {
    const firstFinishedRun = this.parsedSplits.Run.AttemptHistory.Attempt.find((attempt) => selectTime(attempt));

    if (!firstFinishedRun) return 30 * 24 * 3600;

    return stringTimeToSeconds(selectTime(firstFinishedRun) || '0:0:0.0') + 1;
  }

  get attemptTimesSecond() {
    return this.parsedSplits.Run.AttemptHistory.Attempt.map(
      attempt => {
        const time = selectTime(attempt);
        return time ? stringTimeToSeconds(time) : this.PBUpperBound;
      }
    );
  }

  get PBsLatestToOldest() {
    let currentPB = this.PBUpperBound;

    return this.attemptTimesSecond.map(
      time => {
        if (time < currentPB)
          currentPB = time;

        return currentPB;
      }
    ).reverse();
  }

  handleScroll() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - window.innerHeight / 10) {
      if (this.scrollTimeout) return;

      this.scrollTimeout = true;
      setTimeout(() => this.scrollTimeout = false, 1000);

      this.loadMore();
    }
  }

  loadMore() {
    this.attemptsToRender = Math.min(
      this.parsedSplits.Run.AttemptHistory.Attempt.length - 1,
      this.attemptsToRender + 30
    );
  }

  created() {
    window.addEventListener('scroll', this.handleScroll);
  }

  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>
