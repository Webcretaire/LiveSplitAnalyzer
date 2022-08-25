<template>
  <div class="text-center">
    <b-row>
      <b-col cols="9" class="mt-auto">
        <h5>{{ displayText }}</h5>
      </b-col>
      <b-col cols="3">
        <b-button @click="deleteFilter" variant="danger" class="mt-2">Delete filter</b-button>
      </b-col>
    </b-row>
    <hr>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue}         from 'nuxt-property-decorator';
import {secondsToFormattedString}     from '~/util/durations';
import {Filter, FILTER_DEFAULT_INDEX} from '~/util/filter';
import store                          from '~/util/store';
@Component
export default class ActiveFilter extends Vue {
  @Prop()
  filterIndex!: number;

  filterData: Filter = store.state.filters[this.filterIndex - 1];

  globalFilters: Filter[] = store.state.filters;

  get displayText() {
    if (this.filterData.details)
      return `Active filter: ${this.filterData.details.label}, between ${secondsToFormattedString(this.filterData.timeMin)} and ${secondsToFormattedString(this.filterData.timeMax)}`;
    else return "";
  }

  deleteFilter() {
    this.filterData = {details: {label: "", index: FILTER_DEFAULT_INDEX}, timeMin: 0, timeMax: 0, attempts: []};
    this.globalFilters.splice(this.filterIndex - 1, 1);
  }
}
</script>