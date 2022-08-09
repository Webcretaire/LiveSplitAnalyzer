<template>
  <div class="text-center">
    <div v-if="!filterData.active">
      <b-row class="mb-3">
        <b-col cols="3" class="mt-2">
          Only display runs with a
        </b-col>
        <b-col cols="7">
          <multiselect v-model="filterData.details" :options="filterLabels" track-by="index" label="label"/>
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
      <b-button @click="activateFilter" variant="success" :disabled="filterData.details.index == -2 || (filterData.timeMin == filterData.timeMax)" class="mt-2">
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
import {Component, Prop, Vue}                          from 'nuxt-property-decorator';
import {SplitFile, selectTime}                         from '~/util/splits';
import {stringTimeToSeconds, secondsToFormattedString} from '~/util/durations';
import {Filter}                                        from '~/util/filter';
import store                                           from '~/util/store';
import Multiselect                                     from 'vue-multiselect';

@Component({components: {Multiselect}})
export default class FilterComponent extends Vue {
  @Prop()
  filterIndex!: number;

  @Prop()
  parsedSplits!: SplitFile;

  useRealTime: boolean = store.state.useRealTime;

  globalFilters: Filter[] = store.state.filters;

  filterData: Filter = {details: {label: "", index: -2}, timeMin: 0, timeMax: 0, active: false, attempts: []};

 get filterLabels() {
    let options = [{index: -1, label: "Global"}];
    this.parsedSplits.Run.Segments.Segment.forEach((split, index) => options.push({index: index, label: split.Name}));

    return options;
  }

  filterListGlobal() {
    let filteredAttempts: number[] = [];
    const attempts = this.parsedSplits.Run.AttemptHistory.Attempt;
    const timeMin = this.filterData.timeMin;
    const timeMax = this.filterData.timeMax;

    attempts.forEach(attempt => {
      const attemptTime = selectTime(attempt);

      if (attemptTime != undefined && timeMin != undefined && timeMax != undefined) {
        const secondsAttemptTime = stringTimeToSeconds(attemptTime);

        if (secondsAttemptTime > timeMin && secondsAttemptTime < timeMax && attempt['@_id'] > 0) {
          filteredAttempts.push(attempt['@_id']);
        }
      }
    });

    return filteredAttempts;
  }

  filterListSplits(index: number) {
    let filteredAttempts: number[] = [];
    const timeMin = this.filterData.timeMin;
    const timeMax = this.filterData.timeMax;

    const splitTimes = this.parsedSplits.Run.Segments.Segment[index].SegmentHistory?.Time;

    if (splitTimes) {
      splitTimes.forEach(splitTime => {
        const chosenSplitTime = selectTime(splitTime);

        if (chosenSplitTime != undefined && timeMin != undefined && timeMax != undefined) {
          const secondsSplitTime = stringTimeToSeconds(chosenSplitTime);

          if (secondsSplitTime > timeMin && secondsSplitTime < timeMax && splitTime['@_id'] > 0) {
              filteredAttempts.push(splitTime['@_id']);
          }
        }
      });
    }

    return filteredAttempts;
  }

  get filterDescription() {
    if (this.filterData.timeMin != undefined && this.filterData.timeMax != undefined && this.filterData.details != undefined)
      return `Active filter: ${this.filterData.details.label}, between ${secondsToFormattedString(this.filterData.timeMin)} and ${secondsToFormattedString(this.filterData.timeMax)}`;
  }

  activateFilter() {
    if (this.filterData.timeMin && this.filterData.timeMax){
      if (this.filterData.timeMin > this.filterData.timeMax) {
        [this.filterData.timeMin, this.filterData.timeMax] = [this.filterData.timeMax, this.filterData.timeMin];
      }
    }

    this.filterData.active = true;

    const index = this.filterData.details?.index;
    if (index != undefined) {
      if (index == -1) {
        this.filterData.attempts = this.filterListGlobal();
      } else if (index > -1) {
        this.filterData.attempts = this.filterListSplits(index);
      }
    }

    this.globalFilters.push(this.filterData);
  }

  deleteFilter() {
    this.filterData = {details: {label: "", index: -2}, timeMin: 0, timeMax: 0, active: false};
    this.globalFilters.splice(this.filterIndex - 1, 1);
  }

  mounted() {
    const storedFilterData = this.globalFilters[this.filterIndex - 1];
    if (storedFilterData)
      this.filterData = storedFilterData;
  }
}
</script>