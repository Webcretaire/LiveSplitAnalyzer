<template>
  <b-card class="text-left" title="Personal Best">
    <hr/>
    <h3 class="text-center">PB Overview</h3>
    <Plotly v-if="renderGraph" :data="plotDataPB()" :layout="layout()" :display-mode-bar="true"/>
    <hr/>
    <h3 class="text-center">Possible timesave ({{ secondsToFormattedString(PBTimesave) }} total)</h3>
    <Plotly v-if="renderGraph" :data="plotDataTimesave()" :layout="layout()" :display-mode-bar="true"/>
  </b-card>
</template>

<script lang="ts">
import {Vue, Component, Prop, Watch}                               from 'nuxt-property-decorator';
import {Run}                                                       from '~/util/splits';
import {formatTime, stringTimeToSeconds, secondsToFormattedString} from '~/util/durations';
// Plotly doesn't seem to have TS types available anywhere so we need to ignore the errors
// @ts-ignore
import {Plotly}                                                    from 'vue-plotly';

@Component({components: {'Plotly': Plotly}})
export default class SplitFileOverview extends Vue {
  @Prop()
  run!: Run;

  @Prop()
  graphYAxisToZero!: boolean;

  renderGraph: boolean = true;

  /**
   * For some reason this needs to be a function (a computed property will be cached and never change), and it needs to
   * be an arrow function otherwise we get `_vm.layout is not a function`
   */
  layout = () => ({
    margin: {'t': 0, 'b': 0, 'l': 0, 'r': 0}
  });

  @Watch('graphYAxisToZero')
  onGraphYAxisToZeroChange() {
    this.renderGraph = false;
    this.$nextTick(() => {
      this.renderGraph = true;
    });
  }

  get PBSplitTimes() {
    let timeSoFar = 0;
    return this.run.Segments.Segment.map((segment) => {
      const t   = stringTimeToSeconds(segment.SplitTimes.SplitTime.GameTime);
      const out = t - timeSoFar;
      timeSoFar += out;

      return out;
    });
  }

  get PBTime() {
    return this.PBSplitTimes.reduce((acc, n) => acc + n, 0);
  }

  get PBSplitTimesaves() {
    let timeSoFar     = 0;
    let timeSaveSoFar = 0;

    return this.run.Segments.Segment.map((segment) => {
      const t = stringTimeToSeconds(segment.SplitTimes.SplitTime.GameTime);
      let out = t - timeSoFar;
      timeSoFar += out;

      out -= stringTimeToSeconds(segment.BestSegmentTime.GameTime);
      timeSaveSoFar += out;

      return out;
    });
  }

  get PBTimesave() {
    return this.PBSplitTimesaves.reduce((acc, n) => acc + n, 0);
  }

  makePlotData(title: string, data: number[], labels: string[]) {
    return [
      {
        values: data,
        labels: labels,
        domain: {column: 0},
        title: title,
        hoverinfo: 'label+percent',
        hole: .6,
        type: 'pie',
        sort: false,
        automargin: true
      }
    ];
  }

  plotDataPB() {
    return this.makePlotData(
      'Split times',
      this.PBSplitTimes,
      this.run.Segments.Segment.map((segment) => `${segment.Name} (${formatTime(segment.SplitTimes.SplitTime.GameTime)})`)
    );
  }

  plotDataTimesave() {
    return this.makePlotData(
      'PB compared to golds',
      this.PBSplitTimesaves.map(v => +(v.toFixed(2))),
      this.run.Segments.Segment.map((segment, i) => `${segment.Name} (${secondsToFormattedString(this.PBSplitTimesaves[i])})`)
    );
  }

  secondsToFormattedString = secondsToFormattedString;
};
</script>

<style scoped lang="scss">
* {
  color: black;
}
</style>
