<template>
  <div>
    <collapsible-card title="Options" :lazy="false">
      <attempt-selector v-model="currentAttemptNumber"/>
      <b-col cols="10" offset="1"><hr/></b-col>
      <loading-switch v-model="graphYAxisToZero" class="mt-2 mb-2">
        Graphs' Y axis starts at zero
      </loading-switch>
      <loading-switch v-model="graphCurrentAttemptHline" class="mb-2">
        Display current attempt times' as an horizontal line
      </loading-switch>
    </collapsible-card>

    <split-display :split="split"
                   v-for="(split, index) in splits"
                   :key="`split-${index}-${split.Name}`"
                   :splitIndex="index"
                   :graphYAxisToZero="graphYAxisToZero"
                   :graphCurrentAttemptHline="graphCurrentAttemptHline"
                   :currentAttemptNumber="currentAttemptNumber"
                   class="mb-3"/>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'nuxt-property-decorator';
import {Segment}              from '~/util/splits';

@Component
export default class SplitsDisplayTab extends Vue {
  graphCurrentAttemptHline: boolean = false;

  graphYAxisToZero: boolean = false;

  currentAttemptNumber: number = 1;

  @Prop()
  splits!: Segment[];
};
</script>
