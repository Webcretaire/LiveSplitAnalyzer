<template>
  <div>
    <Plotly :data="plotDataResets" :display-mode-bar="true"/>
    <Plotly :data="plotDataAttempts" :display-mode-bar="true"/>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue, Watch} from 'nuxt-property-decorator';
// Plotly doesn't seem to have TS types available anywhere so we need to ignore the errors
// @ts-ignore
import {Plotly}                      from 'vue-plotly';
import {Attempt, Segment}            from '@/util/splits';
import {offload}                     from '~/util/offloadWorker';
import {OffloadWorkerOperation}      from '~/util/offloadworkerTypes';
import {withLoad}                    from '~/util/loading';
import { LINE_COLOR } from '~/util/plot';

@Component({components: {Plotly}})
export default class ResetStats extends Vue {
  @Prop()
  attempts!: Attempt[];

  @Prop()
  segments!: Segment[];

  lastSplitByAttempt: string[] = [];

  numberOfCompletedSplitsByAttempt: number[] = [];

  @Watch('attempts', {immediate: true})
  @Watch('segments')
  updateLastsplitByAttempt() {
    withLoad(() =>
      offload(OffloadWorkerOperation.LAST_SPLIT_NAME_REACHED_BY_ATTEMPT, this.segments, this.attempts)
        .then(r => {
          this.lastSplitByAttempt = r;
          this.numberOfCompletedSplitsByAttempt = r.map((name: string) => this.splitLabels.indexOf(name));
        })
    );
  }

  get splitLabels() {
    return [...this.segments.map(segment => segment.Name), 'Finished'];
  }

  get plotDataResets() {
    return [
      {
        y: [...this.segments.map(({Name}) => Name), 'Finished'].map(segment => this.lastSplitByAttempt.filter(name => name === segment).length),
        x: this.splitLabels,
        title: 'Resets',
        hoverinfo: 'label+percent',
        type: 'bar'
      }
    ];
  }

  get plotDataAttempts() {
    return [
      {
        y: this.numberOfCompletedSplitsByAttempt,
        x: this.attempts.map(attempt => attempt['@_id']),
        title: 'Resets',
        type: 'scatter',
        hoverinfo: 'y',
        mode: 'lines',
        line: {
          // shape: 'spline',
          color: LINE_COLOR,
          width: 1
        }
      }
    ];
  }
};
</script>

