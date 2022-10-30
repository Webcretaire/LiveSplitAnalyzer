<template>
  <collapsible-card id="AttemptsStatsCard" class="text-center" title="Attempts stats" starts-open>
    <loading-switch v-model="showResets" class="mb-2">
      Include reset runs in X axis
    </loading-switch>
    <b-row class="mb-2">
      <b-col cols="4" class="mt-2">Make scatter plot with</b-col>
      <b-col cols="8">
        <multiselect v-model="scatterType" :options="['lines', 'markers', 'text']" multiple/>
      </b-col>
    </b-row>
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
    <Plotly ref="plotlyAttemptStats" :data="plot_data" :layout="layout" :display-mode-bar="true"
            @relayout="onPlotRelayout" @restyle="onPlotRestyle"/>
  </collapsible-card>
</template>

<script lang="ts">
import {
  formatTime,
  secondsToFormattedString,
  stringTimeToSeconds
}                                    from '~/util/durations';
import {
  LINE_COLOR,
  GOLD_COLOR,
  XYRange,
  yTicksFromSecondsValues
}                                    from '~/util/plot';
import {Component, Prop, Vue, Watch} from 'nuxt-property-decorator';
import {Attempt, selectTime}         from '~/util/splits';
// Plotly doesn't seem to have TS types available anywhere so we need to ignore the errors
// @ts-ignore
import {Plotly}                      from 'vue-plotly';
import Multiselect                   from 'vue-multiselect';

@Component({components: {'Plotly': Plotly, Multiselect}})
export default class AttemptStats extends Vue {
  @Prop()
  attempts!: Attempt[];

  showResets: boolean = true;

  lowerBoundFilter: number = 0;

  higherBoundFilter: number = 999999999;

  plotlyCurrentView: XYRange | null = null;

  scatterType: string[] = ['lines', 'markers'];

  layout: any = {};

  $refs!: {
    plotlyAttemptStats: Plotly
  };

  /**
   * For some reason this needs to be a function (a computed property will be cached and never change), and it needs to
   * be an arrow function otherwise we get `_vm.layout is not a function`
   */
  @Watch('numberVals')
  @Watch('plotlyCurrentView')
  updateLayout() {
    const ticks = yTicksFromSecondsValues(this.plotlyCurrentView?.y || this.numberVals);

    const l: any = {
      title: 'Attempt history',
      xaxis: {
        title: `Finished runs`
      },
      yaxis: {
        rangemode: 'nonnegative',
        tickmode: 'array',
        ticktext: ticks.tickTexts,
        tickvals: ticks.tickVals
      }
    };

    if (this.plotlyCurrentView) {
      l.xaxis.range = this.plotlyCurrentView.x;
      l.yaxis.range = this.plotlyCurrentView.y;
    }

    this.layout = l;
  };

  get finishedAttempts() {
    return this.attempts.filter(attempt => {
      const time = selectTime(attempt);
      if (!time) return false;

      const seconds = stringTimeToSeconds(time);
      return seconds >= this.lowerBoundFilter && seconds <= this.higherBoundFilter;
    });
  }

  get numberVals() {
    return this.finishedAttempts.map(
      attempt => stringTimeToSeconds(selectTime(attempt) || '')
    );
  }

  get PBs() {
    if (!this.numberVals.length) return [];

    let currentPB = this.numberVals[0] + 1;

    return this.numberVals.map(
      time => {
        if (time < currentPB)
          currentPB = time;

        return currentPB;
      }
    );
  }

  get plot_data() {
    const ids: number[] = this.showResets
      ? this.finishedAttempts.map(attempt => attempt['@_id'])
      : Array.from({length: this.finishedAttempts.length}, (v, k) => k);

    const textVals: string[] = this.finishedAttempts.map(
      attempt => `#${attempt['@_id']}: ${formatTime(selectTime(attempt) || '')}`
    );

    const pbTextVals: string[] = this.finishedAttempts.map(
      (attempt, i) => `#${attempt['@_id']}: ${secondsToFormattedString(this.PBs[i])}`
    );

    const commonOptions = {
      x: ids,
      type: 'scatter',
      hoverinfo: 'text',
      mode: this.scatterType.join('+')
    };

    return [
      {
        ...commonOptions,
        y: this.PBs,
        text: pbTextVals,
        name: 'PB',
        line: {
          shape: 'spline',
          color: GOLD_COLOR,
          width: 1
        }
      },
      {
        ...commonOptions,
        y: this.numberVals,
        text: textVals,
        name: 'Attempt time',
        line: {
          shape: 'spline',
          color: LINE_COLOR,
          width: 1
        }
      }
    ];
  }

  timeFormat = secondsToFormattedString;

  onPlotRelayout(event: Record<string, number>) {
    if (event['xaxis.autorange'] && event['yaxis.autorange']) {
      this.plotlyCurrentView = null;
      return;
    }

    if (event['yaxis.range[0]'] && event['yaxis.range[1]'] && event['xaxis.range[0]'] && event['xaxis.range[1]']) {
      this.plotlyCurrentView = {
        x: [event['xaxis.range[0]'], event['xaxis.range[1]']],
        y: [event['yaxis.range[0]'], event['yaxis.range[1]']]
      };
    }
  }

  /**
   * When users toggle a line (this graph has 2) resize is not triggered but restyle is
   */
  onPlotRestyle() {
    const layout = this.$refs.plotlyAttemptStats.layout;

    this.plotlyCurrentView = {
      x: [layout.xaxis.range[0], layout.xaxis.range[1]],
      y: [layout.yaxis.range[0], layout.yaxis.range[1]]
    };
  }

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
