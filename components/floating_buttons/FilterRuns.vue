<template>
  <b-button v-b-tooltip.hover.left="tooltip" pill size="lg" :variant="variant" @click="filterRuns"
            class="float-button">
    <font-awesome-icon icon="filter"/>
  </b-button>
</template>

<script lang="ts">
import {Component, Prop, Vue}     from 'nuxt-property-decorator';
import {SplitFile}                from '~/util/splits';
import {GlobalEventEmitter}       from '~/util/globalEvents';
import {secondsToFormattedString} from '~/util/durations';
import {Filter}                   from '~/util/filter';
import store                      from '~/util/store';

@Component
export default class FilterRuns extends Vue {
  @Prop()
  parsedSplits!: SplitFile;

  filters: Filter[] = store.state.filters;

  get filtersActive() {
    return store.state.filters.length != 0;
  }

  get variant() {
    return this.filtersActive ? "success" : "light";
  }

  get tooltip() {
    if (!this.filtersActive)
      return "Filter runs";

    let filterDescription = "Active filters:"
    this.filters.forEach(filter => {
      if (filter.timeMin != undefined && filter.timeMax != undefined && filter.details != undefined) // i don't think these can be undefined at this point, but we need this to satisfy typescript
        filterDescription += ` ${filter.details.label}, between ${secondsToFormattedString(filter.timeMin)} and ${secondsToFormattedString(filter.timeMax)};`;
    });

    return filterDescription;
  }

  filterRuns() {
    GlobalEventEmitter.$emit('openModal', 'FilterModal', {
      parsedSplits: this.parsedSplits
    });
  }
}
</script>

<style lang="scss" scoped>
.dl-button-modified {
  width: 4.8rem !important;
  height: 4.8rem !important;
  font-size: 2rem !important;
  transform: translateY(0.4rem);
}
</style>
