<template>
  <div class="text-center">
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
        <time-selector v-model.number="filterData.timeMin"/>
      </b-col>
      <b-col cols="2" class="mt-2">
        and
      </b-col>
      <b-col cols="5">
        <time-selector v-model.number="filterData.timeMax"/>
      </b-col>
    </b-row>
    <div v-b-tooltip.hover :title="formError">
      <b-button @click="activateFilter" variant="success" class="mt-2" :disabled="formError !== ''">
        Add filter
      </b-button>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue}                               from 'nuxt-property-decorator';
import {SplitFile, selectTime, SegmentHistoryTime, Attempt} from '~/util/splits';
import {stringTimeToSeconds}                                from '~/util/durations';
import {Filter, FILTER_GLOBAL, FILTER_DEFAULT_INDEX}        from '~/util/filter';
import store                                                from '~/util/store';
import Multiselect                                          from 'vue-multiselect';

@Component({components: {Multiselect}})
export default class FilterMenu extends Vue {
  @Prop()
  parsedSplits!: SplitFile;

  globalFilters: Filter[] = store.state.filters;

  filterData: Filter = {details: {label: '', index: FILTER_DEFAULT_INDEX}, timeMin: 0, timeMax: 0, attempts: []};

  get filterLabels() {
    const options = [{index: FILTER_GLOBAL, label: 'Global'}];
    this.parsedSplits.Run.Segments.Segment.forEach((split, index) => options.push({index: index, label: split.Name}));

    return options;
  }

  get formError() {
    if (this.filterData.details?.index == FILTER_DEFAULT_INDEX || this.filterData.details?.index == undefined)
      return 'You need to select a split.';

    if (this.filterData.timeMin == this.filterData.timeMax)
      return 'You need to select a time range.';

    return '';
  }

  get filterListSelect() {
    const index    = this.filterData.details?.index;
    const attempts = this.parsedSplits.Run.AttemptHistory.Attempt;
    if (index == undefined)
      return [];
    if (index == FILTER_GLOBAL) {
      return this.filterList(attempts);
    } else if (index > FILTER_GLOBAL) {
      const splitTimes = this.parsedSplits.Run.Segments.Segment[index].SegmentHistory?.Time;
      if (splitTimes)
        return this.filterList(splitTimes);
    }

    return []; // so that this is never undefined
  }

  filterList(toFilter: SegmentHistoryTime[] | Attempt[]) {
    const filteredAttempts: number[] = [];
    const timeMin                    = this.filterData.timeMin;
    const timeMax                    = this.filterData.timeMax;

    toFilter.forEach(run => {
      const time = selectTime(run);

      if (time != undefined) {
        const secondsTime = stringTimeToSeconds(time);

        if (secondsTime > timeMin && secondsTime < timeMax && run['@_id'] > 0) {
          filteredAttempts.push(run['@_id']);
        }
      }
    });

    return filteredAttempts;
  }

  activateFilter() {
    if (this.filterData.timeMin > this.filterData.timeMax) {
      [this.filterData.timeMin, this.filterData.timeMax] = [this.filterData.timeMax, this.filterData.timeMin];
    }

    this.filterData.attempts = this.filterListSelect;
    this.globalFilters.push(this.filterData);
    this.filterData = {details: {label: '', index: FILTER_DEFAULT_INDEX}, timeMin: 0, timeMax: 0, attempts: []};
  }
}
</script>
