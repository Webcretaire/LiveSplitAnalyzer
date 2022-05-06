<template>
  <collapsible-card title="Comparisons">
    <multiselect v-model="referenceComparison" :options="comparisons" placeholder="Pick a reference comparison"
                 class="mb-2"/>
    <div v-if="referenceComparison">
      <multiselect v-model="otherComparisons" :options="multipleSelectOptions" placeholder="Pick additional comparisons"
                   multiple class="mb-2"/>

      <loading-switch v-model="cumulateTime" class="mb-2">
        Cumulate the time of previous splits
      </loading-switch>

      <b-table striped hover :items="tableData">
        <template v-for="slot in comparisonColumns" v-slot:[`cell(${slot})`]="slotProps">
          <comparison-table-cell :reference-comparison-name="referenceComparison"
                                 :comparison-name="slot" :cell-data="slotProps"/>
        </template>
      </b-table>
    </div>
  </collapsible-card>
</template>

<script lang="ts">
import {
  availableComparisons,
  cumulatedSumOfBests,
  Segments,
  selectTime,
  subsplitLabel
}                             from '~/util/splits';
import {Component, Prop, Vue} from 'nuxt-property-decorator';
import Multiselect            from 'vue-multiselect';
import {stringTimeToSeconds}  from '~/util/durations';

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

  cumulateTime: boolean = true;

  get comparisonColumns() {
    return [this.referenceComparison, ...this.otherComparisons];
  }

  get multipleSelectOptions() {
    return this.comparisons.filter(c => c != this.referenceComparison);
  }

  get comparisons() {
    return [...availableComparisons(this.segments), SOB_LABEL];
  }

  get sumOfBests(): Array<number | null> {
    return cumulatedSumOfBests(this.segments);
  }

  get splitTimeswithSoB(): NameTime[][] {
    return this.segments.Segment.map(
      (segment, index) => [
        ...segment.SplitTimes.SplitTime.map(t => {
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
    const out: any = this.segments.Segment.map(s => ({split: subsplitLabel(s.Name, true)}));

    let timeSoFar = 0;
    const timesSoFarOthers: Record<string, number> = {};
    this.otherComparisons.forEach(name => timesSoFarOthers[name] = 0);

    this.segments.Segment.forEach((segment, index) => {
      // Add reference data
      const timeForReferenceComparison = this.splitTimeswithSoB[index].find(st => st.name === this.referenceComparison)?.time;

      if (!timeForReferenceComparison) return;

      let outTimeReference = timeForReferenceComparison;

      if (!this.cumulateTime) {
        outTimeReference -= timeSoFar;
        timeSoFar += outTimeReference;
      }

      out[index][this.referenceComparison] = {
        time: outTimeReference,
        isDeltaNegative: true,
        delta: 0
      };

      // Add other comparisons
      this.otherComparisons.forEach(other => {
        const timeForOtherComparison = this.splitTimeswithSoB[index].find(st => st.name === other)?.time;

        if (!timeForOtherComparison) return;

        let outTimeOther = timeForOtherComparison;

        if (!this.cumulateTime) {
          outTimeOther -= timesSoFarOthers[other];
          timesSoFarOthers[other] += outTimeOther;
        }

        let delta             = outTimeOther - outTimeReference;
        const isDeltaNegative = delta < 0;

        // Make delta always positive so that secondsToFormattedString works
        if (isDeltaNegative)
          delta = -delta;

        out[index][other] = {
          time: outTimeOther,
          isDeltaNegative: isDeltaNegative,
          delta: delta
        };
      });
    });

    return out;
  }
}
</script>
