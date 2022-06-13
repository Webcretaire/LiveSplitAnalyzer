<template>
  <div>
    <comparisons-display :segments="segments"/>
    <comparison-creator :segments="segments"/>
    <comparison-remover :segments="segments"/>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'nuxt-property-decorator';
import {Segment}              from '~/util/splits';

@Component
export default class ComparisonTab extends Vue {
  @Prop()
  segments!: Segment[];
};
</script>

