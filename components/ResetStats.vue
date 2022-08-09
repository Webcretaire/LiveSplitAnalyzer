<template>
  <div>
    <Plotly :data="plotDataResets" :display-mode-bar="true" :layout="layoutResets"/>
    <Plotly :data="plotDataAttempts" :display-mode-bar="true" :layout="layoutAttempts"/>
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
import {GOLD_COLOR, LINE_COLOR}      from '~/util/plot';
import {SegmentNameIndex}            from '~/util/splitProcessing';

@Component({components: {Plotly}})
export default class ResetStats extends Vue {
  @Prop()
  attempts!: Attempt[];

  @Prop()
  segments!: Segment[];

  lastSplitByAttempt: SegmentNameIndex[] = [];

  layoutResets = {
    xaxis: {
      tickangle: -45,
      automargin: true
    }, yaxis: {
      title: 'Reset number'
    }
  };

  layoutAttempts = {
    xaxis: {
      title: 'Attempt number'
    }, yaxis: {
      title: 'Finished splits'
    }
  };

  @Watch('attempts', {immediate: true})
  @Watch('segments')
  updateLastsplitByAttempt() {
    withLoad(() =>
      offload(OffloadWorkerOperation.LAST_SPLIT_NAME_REACHED_BY_ATTEMPT, this.segments, this.attempts)
        .then(r => this.lastSplitByAttempt = r)
    );
  }

  get splitLabels() {
    return [...this.segments.map(({Name}, i) => `${i + 1}: ${Name}`), 'Finished'];
  }

  get plotDataResets() {
    return [
      {
        y: [...this.segments.map(({Name}) => Name), 'Finished'].map((name, i) => this.lastSplitByAttempt.filter(({index}) => index === i).length),
        x: this.splitLabels,
        title: 'Resets',
        hoverinfo: 'label+percent',
        type: 'bar',
        marker: {
          color: [...Array.from({length: this.splitLabels.length - 1}, () => LINE_COLOR), GOLD_COLOR]
        }
      }
    ];
  }

  get plotDataAttempts() {
    return [
      {
        y: this.lastSplitByAttempt.map(({index}) => index),
        x: this.attempts.map(attempt => attempt['@_id']),
        text: this.lastSplitByAttempt.map(
          ({name, index}) => index === this.splitLabels.length - 1 ? 'Finished' : `Reset in ${name} (${index + 1})`
        ),
        hoverinfo: 'text',
        type: 'bar',
        marker: {
          color: this.lastSplitByAttempt.map(
            ({index}) => index === this.splitLabels.length - 1 ? GOLD_COLOR : LINE_COLOR
          )
        }
      }
    ];
  }
}
</script>

