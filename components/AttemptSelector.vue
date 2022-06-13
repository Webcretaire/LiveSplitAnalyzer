<template>
  <div class="mb-4">
    <div class="d-flex mt-4 mb-2">
      <b-form inline class="text-center m-auto">
        <b-input-group prepend="Currently displayed run">
          <b-form-input type="number" v-model.number="internalValue" :max="latestAttemptNumber" min="1"
                        debounce="500"/>
        </b-input-group>
        <b-button variant="outline-info" class="ml-2" @click="internalValue = PB['@_id']" :disabled="isPb">
          Go to PB
        </b-button>
      </b-form>
    </div>
    <loading-switch v-model="filterRuns" class="mt-3 mb-2">
      Filter out unfinished runs
    </loading-switch>
    <vue-slider v-model="internalValue" :data="runAttempts" data-value="@_id" data-label="@_id"
                :marks="runSliderMarks" lazy adsorb class="attempt-selection-slider"/>
  </div>
</template>

<script lang="ts">
import VueSlider                     from 'vue-slider-component';
import {Component, Prop, Vue, Watch} from 'nuxt-property-decorator';
import {Attempt, selectTime}         from '~/util/splits';
import store                         from '~/util/store';

@Component({components: {VueSlider}})
export default class AttemptSelector extends Vue {
  @Prop()
  value!: number;

  @Prop()
  attempts!: Attempt[];

  internalValue: number = 1;

  filterRuns: boolean = false;

  get isPb(): boolean {
    return this.internalValue === this.PB?.['@_id'];
  }

  get PB() {
    return store.state.PB;
  }

  get runAttempts(): Attempt[] {
    if (this.filterRuns)
      return this.attempts.filter(a => selectTime(a));
    else
      return this.attempts;
  }

  get latestAttemptNumber(): number {
    return Math.max(...this.runAttempts.map(a => a['@_id']));
  }

  get runSliderMarks(): number[] {
    const firstRunId = this.runAttempts[0]['@_id'];
    const lastRunId  = this.latestAttemptNumber;

    return [firstRunId, lastRunId];
  }

  @Watch('value', {immediate: true})
  onValueUpdate(newVal: number) {
    this.internalValue = newVal;
  }

  @Watch('internalValue')
  onInternalValueChange(newVal: number) {
    this.$emit('input', newVal);
  }
}
</script>

<style lang="scss" scoped>
.attempt-selection-slider {
  margin-bottom: 2rem;
}
</style>
