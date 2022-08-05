<template>
  <div class="text-center">
    <div v-if="!filterData.active">
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
      <b-button @click="activateFilter" variant="success" :disabled="filterData.type == '' || (filterData.timeMin == filterData.timeMax)" class="mt-2">
        Activate filter
      </b-button>
    </div>
    <div v-else>
      <b-row>
        <b-col cols="9" class="mt-auto">
          <h5>{{ filterDescription }}</h5>
        </b-col>
        <b-col cols="3">
          <b-button @click="deleteFilter" variant="danger" class="mt-2">Delete filter</b-button>
        </b-col>
      </b-row>
    </div>
    <hr>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Watch, Vue}                   from 'nuxt-property-decorator';
import {SplitFile}                                     from '~/util/splits';
import {stringTimeToSeconds, secondsToFormattedString} from '~/util/durations';
import store, {Filter}                                 from '~/util/store';
import Multiselect                                     from 'vue-multiselect';

@Component({components: {Multiselect}})
export default class FilterComponent extends Vue {
  @Prop()
  filterIndex!: number;

  @Prop()
  parsedSplits!: SplitFile;

  useRealTime: boolean = store.state.useRealTime;

  globalFilters: Filter[] = store.state.filters;

  filterData: Filter = {type: "", timeMin: 0, timeMax: 0, active: false, attempts: []};

  get filterTypes() {
    let options = ["Global"];
    this.parsedSplits.Run.Segments.Segment.forEach(split => options.push(split.Name));

    return options;
  }

  filterList() {
    let filteredAttempts: number[] = [];
    const type = this.filterData.type;
    const timeMin = this.filterData.timeMin;
    const timeMax = this.filterData.timeMax;

    if (type == "Global") {
      const attempts = this.parsedSplits.Run.AttemptHistory.Attempt;

      attempts.forEach(attempt => {
        const attemptTime = this.useRealTime ? attempt.RealTime : attempt.GameTime;

        if (attemptTime != undefined && timeMin != undefined && timeMax != undefined) {
          const secondsAttemptTime = stringTimeToSeconds(attemptTime);

          if (secondsAttemptTime > timeMin && secondsAttemptTime < timeMax) {
            if (attempt['@_id'] > 0)
              filteredAttempts.push(attempt['@_id']);
          }
        }
      });
    } else {
      const splitTimes = this.parsedSplits.Run.Segments.Segment.find(segment => segment.Name == type)?.SegmentHistory?.Time;

      if (splitTimes) {
        splitTimes.forEach(splitTime => {
          const chosenSplitTime = this.useRealTime ? splitTime.RealTime : splitTime.GameTime;

          if (chosenSplitTime != undefined && timeMin != undefined && timeMax != undefined) {
            const secondsSplitTime = stringTimeToSeconds(chosenSplitTime);

            if (secondsSplitTime > timeMin && secondsSplitTime < timeMax) {
              if (splitTime['@_id'] > 0)
                filteredAttempts.push(splitTime['@_id']);
            }
          }
        });
      }
    }

    return filteredAttempts;
  }

  get filterDescription() {
    if (this.filterData.timeMin != undefined && this.filterData.timeMax != undefined)
      return `Active filter: ${this.filterData.type}, between ${secondsToFormattedString(this.filterData.timeMin)} and ${secondsToFormattedString(this.filterData.timeMax)}`
  }

  activateFilter() {
    if (this.filterData.timeMin && this.filterData.timeMax){
      if (this.filterData.timeMin > this.filterData.timeMax) {
        [this.filterData.timeMin, this.filterData.timeMax] = [this.filterData.timeMax, this.filterData.timeMin];
      }
    }
    this.filterData.active = true;
    this.filterData.attempts = this.filterList();
    this.globalFilters.push(this.filterData);
  }

  deleteFilter() {
    this.filterData = {type: "", timeMin: 0, timeMax: 0, active: false, attempts: []};
    this.globalFilters.splice(this.filterIndex - 1, 1);
  }

  mounted() {
    const storedFilterData = this.globalFilters[this.filterIndex - 1];
    if (storedFilterData)
      this.filterData = storedFilterData;
  }
}
</script>