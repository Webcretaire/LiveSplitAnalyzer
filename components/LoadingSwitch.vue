<template>
  <b-checkbox switch v-model="internalValue">
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

  internalValue: boolean = true;

  @Watch('value', {immediate: true})
  valueChange(newVal: boolean) {
    this.internalValue = newVal;
  }

  @Watch('internalValue')
  inputChange(newVal: boolean) {
    withLoadAsync((endLoad: Function) => {
      this.$emit('input', newVal);
      this.$nextTick(() => endLoad());
    });
  }
}
</script>
