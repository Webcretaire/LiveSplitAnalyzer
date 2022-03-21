<template>
  <collapsible-card title="Comparisons">
    <multiselect v-model="referenceComparison" :options="comparisons" placeholder="Pick a reference comparison"
                 class="mb-2"/>
    <div v-if="referenceComparison">
      <multiselect v-model="otherComparisons" :options="multipleSelectOptions" placeholder="Pick additional comparisons"
                   multiple class="mb-2"/>

      <b-table striped hover :items="tableData">
        <template v-for="slot in otherComparisons" v-slot:[`cell(${slot})`]="slotProps">
          {{ slotProps.value.time }}
          <small :class="slotProps.value.isDeltaNegative ? 'text-green' : 'text-red'">
            ({{ slotProps.value.isDeltaNegative ? '-' : '+' }}{{ slotProps.value.delta }})
          </small>
        </template>
      </b-table>
    </div>
  </collapsible-card>
</template>

<script lang="ts">
import {Component, Prop, Vue}                          from 'nuxt-property-decorator';
import Multiselect                                     from 'vue-multiselect';
import {secondsToFormattedString, stringTimeToSeconds} from '~/util/durations';
import {Segment, Segments, selectTime, SplitTime}      from '~/util/splits';
import {asArray}                                       from '~/util/util';

const SOB_LABEL = 'Sum of Best';

interface NameTime {
  name: string,
  time: number | null
}

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
      const splitTime = asArray(segment.SplitTimes.SplitTime);

      splitTime.forEach((s: SplitTime) => {
        if (!acc.includes(s['@_name']))
          acc.push(s['@_name']);
      });

      return acc;
    }, [SOB_LABEL]);
  }

  get sumOfBests(): Array<number | null> {
    let timeSoFar = 0;

    return this.segments.Segment.map((segment) => {
      const best_seg_t = selectTime(segment.BestSegmentTime);
      if (!best_seg_t) return null;

      timeSoFar += stringTimeToSeconds(best_seg_t);

      return timeSoFar;
    });
  }

  get splitTimeswithSoB(): NameTime[][] {
    return this.segments.Segment.map(
      (segment, index) => [
        ...asArray(segment.SplitTimes.SplitTime).map(t => {
          let outTime    = null;
          const selected = selectTime(t);

          if (selected) outTime = stringTimeToSeconds(selected);

          return {name: t['@_name'], time: outTime};
        }),
        {name: SOB_LABEL, time: this.sumOfBests[index]}
      ]
    );
  }

  get tableData() {
    const out: any = this.segments.Segment.map(s => ({split: s.Name}));

    this.segments.Segment.forEach((segment, index) => {
      // Add reference data
      const timeForReferenceComparison = this.splitTimeswithSoB[index].find(st => st.name === this.referenceComparison)?.time;

      if (!timeForReferenceComparison) return;

      out[index][this.referenceComparison] = secondsToFormattedString(timeForReferenceComparison);

      // Add other comparisons
      this.otherComparisons.forEach(other => {
        const timeForOtherComparison = this.splitTimeswithSoB[index].find(st => st.name === other)?.time;

        if (!timeForOtherComparison) return;

        let delta             = timeForOtherComparison - timeForReferenceComparison;
        const isDeltaNegative = delta < 0;

        // Make delta always positive so that secondsToFormattedString works
        if (isDeltaNegative)
          delta = -delta;

        out[index][other] = {
          time: secondsToFormattedString(timeForOtherComparison),
          isDeltaNegative: isDeltaNegative,
          delta: secondsToFormattedString(delta)
        };
      });
    });

    return out;
  }
}
</script>
