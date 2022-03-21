<template>
  <collapsible-card class="text-center" :title="title" starts-open>
    <hr/>
    <h3 class="text-center mb-3">
      {{ isPb ? 'PB' : 'Attempt' }} Overview ({{ secondsToFormattedString(AttemptTime) }} total)
    </h3>
    <Plotly v-if="renderGraph" :data="plotDataAttempt()" :layout="layout" :display-mode-bar="true"/>
    <hr/>
    <h3 class="text-center mb-3">Possible timesave ({{ secondsToFormattedString(AttemptTimesave) }} total)</h3>
    <Plotly v-if="renderGraph" :data="plotDataTimesave()" :layout="layout" :display-mode-bar="true"/>
  </collapsible-card>
</template>

<script lang="ts">
import {
  formatTime,
  secondsToFormattedString,
  stringTimeToSeconds
}                                 from '~/util/durations';
import {Component, Prop, Vue}     from 'nuxt-property-decorator';
import {Attempt, Run, selectTime} from '~/util/splits';
// Plotly doesn't seem to have TS types available anywhere so we need to ignore the errors
// @ts-ignore
import {Plotly}                   from 'vue-plotly';
import {asArray}                  from '~/util/util';

@Component({components: {Plotly}})
export default class AttemptOverview extends Vue {
  @Prop()
  run!: Run;

  @Prop()
  attempt!: Attempt;

  @Prop()
  graphYAxisToZero!: boolean;

  @Prop()
  isPb!: boolean;

  @Prop()
  displayLabels!: boolean;

  renderGraph: boolean = true;

  visible: boolean = false;

  layout = {margin: {'t': 0, 'b': 0, 'l': 0, 'r': 0}};

  get title() {
    return this.isPb ? 'Personal Best' : `Attempt n°${this.attempt['@_id']}`;
  }

  get AttemptSegments() {
    return this.run.Segments.Segment.map(
      segment => asArray(segment.SegmentHistory.Time).find(segmentTime => segmentTime['@_id'] == this.attempt['@_id'])
    );
  }

  get AttemptSplitTimes() {
    return this.AttemptSegments.map(s => {
      const t = selectTime(s);

      return t ? stringTimeToSeconds(t) : null;

    });
  }

  get AttemptTime() {
    return this.AttemptSplitTimes.reduce((acc: number, n: number | null) => acc + (n || 0), 0);
  }

  get AttemptSplitTimesaves() {
    let timeSaveSoFar = 0;

    return this.run.Segments.Segment.map((segment, index) => {
      const s          = this.AttemptSegments[index];
      const seg_t      = selectTime(s);
      const best_seg_t = selectTime(segment.BestSegmentTime);
      if (!seg_t || !best_seg_t) return null;

      let out = stringTimeToSeconds(seg_t);
      out -= stringTimeToSeconds(best_seg_t);
      timeSaveSoFar += out;

      return out;
    });
  }

  get AttemptTimesave() {
    return this.AttemptSplitTimesaves.reduce((acc: number, n: number | null) => acc + (n || 0), 0);
  }

  makePlotData(title: string, data: Array<number | null>, labels: string[]) {
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
        automargin: true,
        textinfo: this.displayLabels ? 'percent' : 'none'
      }
    ];
  }

  plotDataAttempt() {
    return this.makePlotData(
      'Split times',
      this.AttemptSplitTimes,
      this.run.Segments.Segment.map(segment => {
        const time = selectTime(asArray(segment.SegmentHistory.Time).find(t => t['@_id'] == this.attempt['@_id']));
        return time ? `${segment.Name} (${formatTime(time)})` : segment.Name;
      })
    );
  }

  plotDataTimesave() {
    const labels = this.run.Segments.Segment.map((segment, i) => {
      // We need to introduce this variable otherwise TS is too dumb to realise that what we're doing is safe
      const ast = this.AttemptSplitTimesaves[i];
      return `${segment.Name} (${ast ? secondsToFormattedString(ast) : ''})`;
    });

    return this.makePlotData(
      'Attempt compared to golds',
      this.AttemptSplitTimesaves.map(v => v ? +(v.toFixed(2)) : null),
      labels
    );
  }

  secondsToFormattedString = secondsToFormattedString;
}
</script>
