<template>
  <b-checkbox switch v-model="value">
    <slot/>
  </b-checkbox>
</template>

<script lang="ts">
import {Component, Prop, Vue, Watch} from 'nuxt-property-decorator';
import {withLoadAsync}               from '~/util/loading';

@Component
export default class LoadingSwitch extends Vue {
  @Prop()
  value!: boolean;

  @Watch('value')
  inputChange(newVal: boolean) {
    withLoadAsync((endLoad: Function) => {
      this.$emit('input', newVal);
      this.$nextTick(() => endLoad());
    });
  }
}
</script>
