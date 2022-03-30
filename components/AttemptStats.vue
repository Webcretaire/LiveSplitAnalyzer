<template>
  <collapsible-card class="text-center" title="Attempts stats">
    <hr/>
    <loading-switch v-model="showResets" class="mb-2">
      Include reset runs in X axis
    </loading-switch>
    <p>
      Filter runs that are between these times (in seconds):
    </p>
    <b-row>
      <b-col cols="6">
        <b-input type="number" v-model.number="lowerBoundFilter" :min="0" debounce="500" step="0.01"/>
      </b-col>
      <b-col cols="6">
        <b-input type="number" v-model.number="higherBoundFilter" :min="0" debounce="500" step="0.01"/>
      </b-col>
    </b-row>
    <p class="mt-3">{{ finishedAttempts.length }} finished runs in the range [{{ timeFormat(lowerBoundFilter) }} ; {{ timeFormat(higherBoundFilter) }}]</p>
    <Plotly :data="plot_data" :layout="layout()" :display-mode-bar="true"/>
  </collapsible-card>
</template>

<script lang="ts">
import {Component, Prop, Vue}            from 'nuxt-property-decorator';
import {Attempt, selectTime}             from '~/util/splits';
import {LINE_COLOR}                      from '~/util/plot';
// Plotly doesn't seem to have TS types available anywhere so we need to ignore the errors
// @ts-ignore
import {Plotly}                          from 'vue-plotly';
import {formatTime, secondsToFormattedString, stringTimeToSeconds} from '~/util/durations';

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
    const ids: number[]        = this.showResets
      ? this.finishedAttempts.map(attempt => attempt['@_id'])
      : Array.from({length: this.finishedAttempts.length}, (v, k) => k);
    const number_val: number[] = this.finishedAttempts.map(attempt => stringTimeToSeconds(selectTime(attempt) || ''));
    // Extract
    const text_val: string[]   = this.finishedAttempts.map(attempt => formatTime(selectTime(attempt) || ''));

    return [
      {
        x: ids,
        y: number_val,
        text: text_val,
        type: 'scatter',
        hoverinfo: 'text',
        mode: 'lines+markers',
        line: {
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
        if (!time) return 0;

        return stringTimeToSeconds(time);
      });
    this.higherBoundFilter = Math.max(...attemptsTimes);
  }
}
</script>

<style scoped lang="scss">

</style>
