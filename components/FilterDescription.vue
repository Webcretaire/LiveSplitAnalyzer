<template>
  <b-row>
    <b-col cols="9" class="mt-auto">
      <h5>{{ filterDescription }}</h5>
    </b-col>
    <b-col cols="3">
      <b-button @click="deleteFilter" variant="danger" class="mt-2">Delete filter</b-button>
    </b-col>
  </b-row>
</template>

<script lang="ts">
import {Component, Prop, Vue}                               from 'nuxt-property-decorator';

@Component
export default class FilterDescription extends Vue {
  // @Prop()
  // filterData
  // get filterDescription() {
  //   if (this.filterData.timeMin != undefined && this.filterData.timeMax != undefined && this.filterData.details != undefined)
  //     return `Active filter: ${this.filterData.details.label}, between ${secondsToFormattedString(this.filterData.timeMin)} and ${secondsToFormattedString(this.filterData.timeMax)}`;
  // }
}
</script>