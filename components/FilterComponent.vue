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
import store, {Filter}               from '~/util/store';
import Multiselect                   from 'vue-multiselect';

@Component({components: {Multiselect}})
export default class FilterComponent extends Vue {
  @Prop()
  filterIndex!: number;

  @Prop()
  parsedSplits!: SplitFile;

  globalFilters: Filter[] = store.state.filters;

  filterData: Filter = {type: "", timeMin: 0, timeMax: 0};

  get filterTypes() {
    let options = ["Global"];
    this.parsedSplits.Run.Segments.Segment.forEach(split => options.push(split.Name));

    return options;
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
    if (this.globalFilters.length == this.filterIndex - 1)
      this.globalFilters.push(this.filterData);

    this.globalFilters[this.filterIndex - 1] = this.filterData;
  }

  mounted() {
    const storedFilterData = this.globalFilters[this.filterIndex - 1];
    if (storedFilterData)
      this.filterData = storedFilterData;
  }
}
</script>