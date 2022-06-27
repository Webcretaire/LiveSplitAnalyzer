<template>
  <collapsible-card id="AttemptsStatsCard" class="text-center" title="Attempts stats" starts-open>
    <loading-switch v-model="showResets" class="mb-2">
      Include reset runs in X axis
    </loading-switch>
    <p>
      Filter runs that are between these times:
    </p>
    <div class="d-flex justify-content-center mt-1">
      <div class="time-select-label">
        Lower bound
      </div>
      <div class="time-select-input">
        <time-selector v-model="lowerBoundFilter"/>
      </div>
    </div>
    <div class="d-flex justify-content-center mt-1">
      <div class="time-select-label">
        Higher bound
      </div>
      <div class="time-select-input">
        <time-selector v-model="higherBoundFilter"/>
      </div>
    </div>
    <p class="mt-3">
      {{ finishedAttempts.length }} finished runs in the range
      [ {{ timeFormat(lowerBoundFilter) }} ; {{ timeFormat(higherBoundFilter) }} ]
    </p>
    <Plotly :data="plot_data" :layout="layout()" :display-mode-bar="true"/>
  </collapsible-card>
</template>

<script lang="ts">
import {
  formatTime,
  secondsToFormattedString,
  stringTimeToSeconds
}                             from '~/util/durations';
import {Component, Prop, Vue} from 'nuxt-property-decorator';
import {Attempt, selectTime}  from '~/util/splits';
import {LINE_COLOR}           from '~/util/plot';
// Plotly doesn't seem to have TS types available anywhere so we need to ignore the errors
// @ts-ignore
import {Plotly}               from 'vue-plotly';

@Component({components: {'Plotly': Plotly}})
export default class AttemptStats extends Vue {
  @Prop()
  attempts!: Attempt[];

  @Prop({default: false})
  graphYAxisToZero!: boolean;

  showResets: boolean = true;

  lowerBoundFilter: number = 0;

  higherBoundFilter: number = 999999999;

  /**
   * For some reason this needs to be a function (a computed property will be cached and never change), and it needs to
   * be an arrow function otherwise we get `_vm.layout is not a function`
   */
  layout = () => {
    return {
      title: 'Attempt history',
      xaxis: {
        title: `Finished runs`
      },
      yaxis: {
        title: 'Time (seconds)',
        rangemode: this.graphYAxisToZero ? 'tozero' : 'nonnegative'
      }
    };
  };

  get finishedAttempts() {
    return this.attempts.filter(attempt => {
      const time = selectTime(attempt);
      if (!time) return false;

      const seconds = stringTimeToSeconds(time);
      return seconds >= this.lowerBoundFilter && seconds <= this.higherBoundFilter;
    });
  }

  get plot_data() {
    const ids: number[] = this.showResets
      ? this.finishedAttempts.map(attempt => attempt['@_id'])
      : Array.from({length: this.finishedAttempts.length}, (v, k) => k);

    const number_val: number[] = this.finishedAttempts.map(
      attempt => stringTimeToSeconds(selectTime(attempt) || '')
    );

    const text_val: string[] = this.finishedAttempts.map(
      attempt => `#${attempt['@_id']}: ${formatTime(selectTime(attempt) || '')}`
    );

    return [
      {
        x: ids,
        y: number_val,
        text: text_val,
        type: 'scatter',
        hoverinfo: 'text',
        mode: 'lines+markers',
        line: {
          shape: 'spline',
          color: LINE_COLOR,
          width: 1
        }
      }
    ];
  }

  timeFormat = secondsToFormattedString;

  mounted() {
    const attemptsTimes = this.attempts.map(
      (attempt: Attempt) => {
        const time = selectTime(attempt);
        if (!time) return -1;

        return stringTimeToSeconds(time);
      }).filter(t => t >= 0);

    this.higherBoundFilter = Math.max(...attemptsTimes) + 1;
    this.lowerBoundFilter  = 0;
  }
}
</script>

<style scoped lang="scss">
.time-select-label {
  text-align: right;
  line-height: 2.25rem;
  min-width: 10rem;
  padding-right: 0.5rem;
}

.time-select-input {
  width: 40rem;
}
</style>
