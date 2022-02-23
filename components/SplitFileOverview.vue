<template>
  <b-card class="text-left" title="Personal Best">
    <Plotly v-if="renderGraph" :data="plot_data()" :layout="layout()" :display-mode-bar="true"/>
  </b-card>
</template>

<script lang="ts">
import {Vue, Component, Prop, Watch}          from 'nuxt-property-decorator';
import {formatTime, Run, stringTimeToSeconds} from '~/util/splits';
// Plotly doesn't seem to have TS types available anywhere so we need to ignore the errors
// @ts-ignore
import {Plotly}                               from 'vue-plotly';

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

  plot_data() {
    let timeSoFar = 0;
    const values  = this.run.Segments.Segment.map((segment) => {
      const t   = stringTimeToSeconds(segment.SplitTimes.SplitTime.GameTime);
      const out = t - timeSoFar;
      timeSoFar += out;

      return out;
    }).map(v => 100 * (v / timeSoFar));
    console.table(values);
    const labels  = this.run.Segments.Segment.map((segment) => `${segment.Name} (${formatTime(segment.SplitTimes.SplitTime.GameTime)})`);
    return [
      {
        values: values,
        labels: labels,
        domain: {column: 0},
        hoverinfo: 'label+percent',
        hole: .6,
        type: 'pie',
        sort:false,
        automargin: true
      }
    ];
  }
};
</script>

<style scoped lang="scss">
* {
  color: black;
}
</style>
