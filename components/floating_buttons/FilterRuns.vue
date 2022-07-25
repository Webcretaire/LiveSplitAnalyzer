<template>
  <b-button v-b-tooltip.hover.left="'Filter runs'" pill size="lg" variant="light" @click="filterRuns"
            class="float-button">
    <font-awesome-icon icon="filter"/>
  </b-button>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'nuxt-property-decorator';
import {SplitFile}            from '~/util/splits';
import {GlobalEventEmitter}   from '~/util/globalEvents';
import store                  from '~/util/store';

@Component
export default class FilterRuns extends Vue {
  @Prop()
  parsedSplits!: SplitFile;

  get variant() {
    const filtersActive = (store.state.filters.length != 0);
    return filtersActive ? "success" : "light";
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
