<template>
  <div class="text-center">
    <b-row class="mb-3">
      <b-col cols="3" class="mt-2">
        Only display runs with a
      </b-col>
      <b-col cols="7">
        <multiselect v-model="filterData.type" :options="filterTypes"/>
      </b-col>
      <b-col cols="2" class="mt-2">
        time between
      </b-col>
    </b-row>
    <b-row class="mt-3">
      <b-col cols="5">
        <time-selector v-model="filterData.timeMin"/>
      </b-col>
      <b-col cols="2" class="mt-2">
        and
      </b-col>
      <b-col cols="5">
        <time-selector v-model="filterData.timeMax"/>
      </b-col>
    </b-row>
    <b-button @click="clearFilter" variant="danger" class="mt-2">Clear filter</b-button>
    <hr>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Watch, Vue} from 'nuxt-property-decorator';
import {SplitFile}                   from '~/util/splits';
import {stringTimeToSeconds}         from '~/util/durations';
import store, {Filter}               from '~/util/store';
import Multiselect                   from 'vue-multiselect';

@Component({components: {Multiselect}})
export default class FilterComponent extends Vue {
  @Prop()
  filterIndex!: number;

  @Prop()
  parsedSplits!: SplitFile;

  useRealTime: boolean = store.state.useRealTime;

  globalFilters: Filter[] = store.state.filters;

  filterData: Filter = {type: "", timeMin: 0, timeMax: 0};

  get filterTypes() {
    let options = ["Global"];
    this.parsedSplits.Run.Segments.Segment.forEach(split => options.push(split.Name));

    return options;
  }

  get filterList() {
    let filteredAttempts: number[] = [];
    const type = this.filterData.type;
    const timeMin = this.filterData!.timeMin;
    const timeMax = this.filterData.timeMax;

    if (type == "Global") {
      const attempts = this.parsedSplits.Run.AttemptHistory.Attempt;

      attempts.forEach(attempt => {
        const attemptTime = this.useRealTime ? attempt.RealTime : attempt.GameTime;

        if (attemptTime != undefined && timeMin != undefined && timeMax != undefined) {
          const secondsAttemptTime = stringTimeToSeconds(attemptTime);

          if (secondsAttemptTime > timeMin && secondsAttemptTime < timeMax) {
            filteredAttempts.push(attempt['@_id']);
          }
        }
      });
    } else if (type == "" || (timeMin == timeMax)) {
      const attempts = this.parsedSplits.Run.AttemptHistory.Attempt;

      attempts.forEach(attempt => filteredAttempts.push(attempt['@_id']));
    }
    else {
      const splitTimes = this.parsedSplits.Run.Segments.Segment.find(segment => segment.Name == type)?.SegmentHistory?.Time;

      if (splitTimes) {
        splitTimes.forEach(splitTime => {
          const chosenSplitTime = this.useRealTime ? splitTime.RealTime : splitTime.GameTime;

          if (chosenSplitTime != undefined && timeMin != undefined && timeMax != undefined) {
            const secondsSplitTime = stringTimeToSeconds(chosenSplitTime);

            if (secondsSplitTime > timeMin && secondsSplitTime < timeMax) {
              filteredAttempts.push(splitTime['@_id']);
            }
          }
        });
      }
    }

    return filteredAttempts;
  }

  clearFilter() {
    this.filterData.type = "";
    this.filterData.timeMin = 0;
    this.filterData.timeMax = 0;
  }

  @Watch('filterData.type')
  @Watch('filterData.timeMin')
  @Watch('filterData.timeMax')
  updateFilters() {
    if (this.filterData.timeMin && this.filterData.timeMax){
      if (this.filterData.timeMin > this.filterData.timeMax) {
        [this.filterData.timeMin, this.filterData.timeMax] = [this.filterData.timeMax, this.filterData.timeMin];
      }
    }

    if (this.globalFilters.length == this.filterIndex - 1)
      this.globalFilters.push(this.filterData);
    console.log(this.filterList);
    this.globalFilters[this.filterIndex - 1] = this.filterData;
  }

  mounted() {
    const storedFilterData = this.globalFilters[this.filterIndex - 1];
    if (storedFilterData)
      this.filterData = storedFilterData;
  }
}
</script>