<template>
  <div>
    <collapsible-card id="AttemptOverviewTimeCard" class="text-center" :title="titleAttempt">
      <Plotly v-if="renderGraph" :data="plotDataAttempt()" :layout="layout" :display-mode-bar="true"/>
    </collapsible-card>

    <collapsible-card id="AttemptOverviewTimesaveCard" class="text-center" :title="titleTimesave">
      <loading-switch v-model="sortByTimesave" class="mt-2 mb-4">
        Sort by possible timesave
      </loading-switch>
      <Plotly v-if="renderGraph" :data="plotDataTimesave()" :layout="layout" :display-mode-bar="true"/>
    </collapsible-card>
  </div>
</template>

<script lang="ts">
import {
  formatTime,
  secondsToFormattedString,
  stringTimeToSeconds
}                                     from '~/util/durations';
import {Component, Prop, Vue}         from 'nuxt-property-decorator';
import {Attempt, Segment, selectTime} from '~/util/splits';
// Plotly doesn't seem to have TS types available anywhere so we need to ignore the errors
// @ts-ignore
import {Plotly}                       from 'vue-plotly';
import {DetailedSegment}              from '~/util/splitProcessing';

@Component({components: {Plotly}})
export default class AttemptOverview extends Vue {
  @Prop()
  segments!: Segment[];

  @Prop()
  attempt!: Attempt;

  @Prop()
  detailedSegments!: DetailedSegment[];

  @Prop()
  graphYAxisToZero!: boolean;

  @Prop()
  isPb!: boolean;

  @Prop()
  displayLabels!: boolean;

  @Prop()
  mergeSubsplits!: boolean;

  renderGraph: boolean = true;

  visible: boolean = false;

  sortByTimesave: boolean = false;

  layout = {margin: {'t': 0, 'b': 0, 'l': 0, 'r': 0}};

  get titleAttempt() {
    return `${this.isPb ? 'Personal Best' : `Attempt n°${this.attempt['@_id']}`} overview (${secondsToFormattedString(this.attemptTime)} total)`;
  }

  get titleTimesave() {
    return `Possible timesave (${secondsToFormattedString(this.attemptTimesave)} total)`;
  }

  get segmentData() {
    return this.mergeSubsplits ? this.detailedSegments : this.segments;
  }

  get AttemptSegments() {
    return this.segmentData.map(
      segment => (segment.SegmentHistory?.Time || []).find(segmentTime => segmentTime['@_id'] == this.attempt['@_id'])
    );
  }

  get AttemptSplitTimes() {
    return this.AttemptSegments.map(s => {
      const t = selectTime(s);

      return t ? stringTimeToSeconds(t) : null;

    });
  }

  get attemptTime() {
    return this.AttemptSplitTimes.reduce((acc: number, n: number | null) => acc + (n || 0), 0);
  }

  get attemptSplitTimesaves() {
    let timeSaveSoFar = 0;

    return this.segmentData.map((segment, index) => {
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

  get attemptTimesave() {
    return this.attemptSplitTimesaves.reduce((acc: number, n: number | null) => acc + (n || 0), 0);
  }

  segmentNameFormat(name: string) {
    if (name.startsWith('-'))
      return name.substring(1);

    const nameMatches = name.match(/\{(.*)\}(.*)/);
    if (nameMatches?.length) {
      // nameMatches[0] has the whole string, [1] has the split name, [2] has the subsplit name
      const splitName    = nameMatches[1];
      const subsplitName = nameMatches[2].trim();

      return `${splitName} | ${subsplitName}`;
    }

    return name.trim();
  }

  get segmentLabels() {
    return this.segmentData.map(segment => {
      const time        = selectTime((segment.SegmentHistory?.Time || []).find(t => t['@_id'] == this.attempt['@_id']));
      const segmentName = this.segmentNameFormat(segment.Name);
      return time ? `${segmentName} (${formatTime(time)})` : segmentName;
    });
  }

  get timesaveLabels() {
    return this.segmentData.map((segment, i) => {
      const ast         = this.attemptSplitTimesaves[i];
      const segmentName = this.segmentNameFormat(segment.Name);
      return `${segmentName} (${ast ? secondsToFormattedString(ast) : ''})`;
    });
  }

  makePlotData(title: string, data: Array<number | null>, labels: string[], sortByTimesave: boolean) {
    return [
      {
        values: data,
        labels: labels,
        domain: {column: 0},
        title: title,
        hoverinfo: 'label+percent',
        hole: .6,
        type: 'pie',
        sort: sortByTimesave,
        automargin: true,
        textinfo: this.displayLabels ? 'percent' : 'none'
      }
    ];
  }

  plotDataAttempt() {
    return this.makePlotData(
      'Split times',
      this.AttemptSplitTimes,
      this.segmentLabels,
      false
    );
  }

  plotDataTimesave() {
    return this.makePlotData(
      'Attempt compared to golds',
      this.attemptSplitTimesaves.map(v => v ? +(v.toFixed(2)) : null),
      this.timesaveLabels,
      this.sortByTimesave
    );
  }
}
</script>
