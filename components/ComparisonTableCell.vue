<template>
  <span>
    <font-awesome-icon icon="pen-to-square" class="text-info" v-if="comparisonName !== 'Sum of Best'"
                       @click="editValue"/>
    <span v-if="comparisonName === referenceComparisonName">
      {{ formatWithDefault(cellData.value.time) }}
    </span>
    <span v-else>
      {{ formatWithDefault(cellData.value.time) }}
      <small :class="cellData.value.isDeltaNegative ? 'text-green' : 'text-red'"
             v-if="cellData.value.time && cellData.value.delta">
        ({{ cellData.value.isDeltaNegative ? '-' : '+' }}{{ format(cellData.value.delta) }})
      </small>
    </span>
  </span>
</template>

<script lang="ts">
import {
  secondsToFormattedString,
  secondsToLivesplitFormat,
  stringTimeToSeconds
}                             from '~/util/durations';
import {Component, Prop, Vue} from 'nuxt-property-decorator';
import {GlobalEventEmitter}   from '~/util/globalEvents';
import store                  from '~/util/store';
import {SplitTime}            from '~/util/splits';

@Component
export default class ComparisonTableCell extends Vue {
  @Prop()
  referenceComparisonName!: string;

  @Prop()
  comparisonName!: string;

  @Prop()
  cellData!: any;

  format = secondsToFormattedString;

  formatWithDefault(time: number | undefined) {
    return time ? secondsToFormattedString(time) : 'No data';
  }

  doEditValue(newVal: number) {
    const delta = newVal - this.cellData.value.time;

    const segments = store.state.splitFile!.Run.Segments.Segment;

    for (let i = this.cellData.index; i < segments.length; ++i) {
      const comparisons = store.state.splitFile!.Run.Segments.Segment[i].SplitTimes.SplitTime;

      const relevantComparison: SplitTime | undefined = comparisons.find(
        comparison => comparison['@_name'] === this.comparisonName
      );

      if (!relevantComparison) {
        this.$bvToast.toast(`Couldn't find selected comparison in splitfile`, {
          title: 'Error',
          autoHideDelay: 5000,
          appendToast: false,
          variant: 'danger'
        });
      } else {
        const indexToUpdate = !store.state.useRealTime && relevantComparison.GameTime ? 'GameTime' : 'RealTime';

        relevantComparison[indexToUpdate] = secondsToLivesplitFormat(
          stringTimeToSeconds(relevantComparison[indexToUpdate] || '') + delta
        );
      }
    }
  }

  editValue() {
    const splitName: string = this.cellData.item.split;

    GlobalEventEmitter.$emit('openModal', 'TimeSelectionModal', {
      message: splitName.startsWith('-') ? `${splitName.slice(1)} (subsplit)` : splitName,
      value: this.cellData.value.time || 0,
      callback: (value: number) => this.doEditValue(value)
    });
  }
};
</script>

<style lang="scss" scoped>
.text-info {
  cursor: pointer;

  &:hover {
    filter: drop-shadow(0 0 1px rgb(23, 162, 184, 25));
  }
}
</style>
