<template>
  <collapsible-card title="Comparisons">
    <multiselect v-model="referenceComparison" :options="comparisons" placeholder="Pick a reference comparison"
                 class="mb-2"/>
    <multiselect v-model="otherComparisons" :options="multipleSelectOptions" placeholder="Pick additional comparisons"
                 multiple/>

    <b-table v-if="referenceComparison" striped hover :items="tableData">
      <template v-for="slot in otherComparisons" v-slot:[`cell(${slot})`]="slotProps">
        {{ slotProps.value.time }}
        <small :class="slotProps.value.isDeltaNegative ? 'text-green' : 'text-red'">
          ({{ slotProps.value.isDeltaNegative ? '-' : '+' }}{{ slotProps.value.delta }})
        </small>
      </template>
    </b-table>
  </collapsible-card>
</template>

<script lang="ts">
import {
  formatTime,
  secondsToFormattedString,
  stringTimeToSeconds
}                                                 from '~/util/durations';
import {Component, Prop, Vue}                     from 'nuxt-property-decorator';
import {Segment, Segments, selectTime, SplitTime} from '~/util/splits';
import Multiselect                                from 'vue-multiselect';

@Component({components: {Multiselect}})
export default class ComparisonsDisplay extends Vue {
  @Prop()
  segments!: Segments;

  referenceComparison: string = '';

  otherComparisons: string[] = [];

  get multipleSelectOptions() {
    return this.comparisons.filter(c => c != this.referenceComparison);
  }

  get comparisons() {
    return this.segments.Segment.reduce((acc: string[], segment: Segment) => {
      const splitTime = Array.isArray(segment.SplitTimes.SplitTime) ? segment.SplitTimes.SplitTime : [segment.SplitTimes.SplitTime];

      splitTime.forEach((s: SplitTime) => {
        if (!acc.includes(s['@_name']))
          acc.push(s['@_name']);
      });

      return acc;
    }, []);
  }

  get tableData() {
    const out: any = this.segments.Segment.map(s => ({split: s.Name}));

    this.segments.Segment.forEach((segment, index) => {
      const splitTime = Array.isArray(segment.SplitTimes.SplitTime) ? segment.SplitTimes.SplitTime : [segment.SplitTimes.SplitTime];

      const timeForReferenceComparison = selectTime(splitTime.find((st) => st['@_name'] === this.referenceComparison));

      if (!timeForReferenceComparison) return;

      const referenceSeconds = stringTimeToSeconds(timeForReferenceComparison);

      out[index][this.referenceComparison] = formatTime(timeForReferenceComparison);

      this.otherComparisons.forEach(other => {
        const timeForOtherComparison = selectTime(splitTime.find((st) => st['@_name'] === other));

        if (!timeForOtherComparison) return;


        let delta             = stringTimeToSeconds(timeForOtherComparison) - referenceSeconds;
        const isDeltaNegative = delta < 0;
        if (isDeltaNegative)
          delta = -delta;

        out[index][other] = {
          time: formatTime(timeForOtherComparison),
          isDeltaNegative: isDeltaNegative,
          delta: secondsToFormattedString(delta)
        };
      });
    });

    return out;
  }
};
</script>
