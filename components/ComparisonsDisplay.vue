<template>
  <collapsible-card title="Comparisons">
    <b-select v-model="selectedComparison" :options="selectOptions"></b-select>

    <b-table v-if="selectedComparison" striped hover :items="timesForSelectedComparison"/>
  </collapsible-card>
</template>

<script lang="ts">
import {Component, Prop, Vue}         from 'nuxt-property-decorator';
import { formatTime } from '~/util/durations';
import {Segment, Segments, SplitTime} from '~/util/splits';

@Component
export default class ComparisonsDisplay extends Vue {
  @Prop()
  segments!: Segments;

  selectedComparison: string = '';

  get selectOptions() {
    const out = [
      {value: '', text: 'Select a comparison to display'}
    ];

    this.comparisons.forEach(comp => {
      out.push({value: comp, text: comp});
    });

    return out;
  }

  get comparisons() {
    return this.segments.Segment.reduce((acc: string[], segment: Segment) => {
      const splitTime = Array.isArray(segment.SplitTimes.SplitTime) ? segment.SplitTimes.SplitTime : [segment.SplitTimes.SplitTime];

      splitTime.forEach((s: SplitTime) => {
        if (!acc.includes(s['@_name']))
          acc.push(s['@_name']);
      });

      return acc;
    }, []);
  }

  get timesForSelectedComparison() {
    return this.segments.Segment.map(segment => {
      const splitTime = Array.isArray(segment.SplitTimes.SplitTime) ? segment.SplitTimes.SplitTime : [segment.SplitTimes.SplitTime];

      return splitTime.find((st) => st['@_name'] === this.selectedComparison);
    }).map(data => ({
      RealTime: formatTime(data?.RealTime || ''),
      GameTime: formatTime(data?.GameTime || '')
    }));
  }
};
</script>
