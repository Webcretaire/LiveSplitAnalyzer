<template>
  <collapsible-card id="ComparisonCreatorCard" title="Create a balanced comparison">
    <table role="presentation" class="w-100 mt-4">
      <tbody>
      <tr>
        <td class="text-right pr-2">
          Name
        </td>
        <td>
          <b-form-input v-model="comparisonName" required debounce="500"/>
        </td>
      </tr>
      <tr>
        <td class="text-center pt-2 pb-2" colspan="2">
          <span class="pr-2">Use a factor</span>
          <b-checkbox class="d-inline" v-model="useTargetTime" switch/>
          <span class="pl-1">Use a target time</span>
        </td>
      </tr>
      <tr v-if="!useTargetTime">
        <td class="text-right pr-2">
          Factor
          <span v-b-tooltip.hover title="How much time to add to each of your golds (as a percentage)"
                class="help-question">
              <font-awesome-icon icon="circle-question"/>
            </span>
        </td>
        <td>
          <b-form-input type="number" v-model.number="balancedFactor" min="0" debounce="500" step="0.01"/>
        </td>
      </tr>
      <tr v-else>
        <td class="text-right pr-2" style="min-width: 8rem">
          Target time
          <span v-b-tooltip.hover title="Automatically determine time factor based on a target total time (in seconds)"
                class="help-question">
              <font-awesome-icon icon="circle-question"/>
            </span>
        </td>
        <td>
          <time-selector v-model="targetTime"/>
        </td>
      </tr>
      </tbody>
    </table>
    <div class="text-center">
      <b-button @click="makeBalanced" class="mt-3" variant="success">
        Create
      </b-button>
    </div>
  </collapsible-card>
</template>

<script lang="ts">
import {
  cumulatedSumOfBests,
  splitFileIsModified,
  Segments,
  SplitTime
}                                 from '~/util/splits';
import {Component, mixins}        from 'nuxt-property-decorator';
import BaseModal                  from '~/components/BaseModal.vue';
import store                      from '~/util/store';
import {secondsToLivesplitFormat} from '~/util/durations';
import {withLoad}                 from '~/util/loading';
import Multiselect                from 'vue-multiselect';

@Component({components: {Multiselect}})
export default class ComparisonCreator extends mixins(BaseModal) {
  comparisonName: string = '';

  targetTime: number = this.selectedSobTotal;

  balancedFactor: number = 0;

  useTargetTime: boolean = false;

  get segments(): Segments {
    if (!store.state.splitFile!.Run?.Segments) {
      this.$bvToast.toast(`No splitfile selected`, {
        title: 'Error',
        autoHideDelay: 5000,
        appendToast: false,
        variant: 'danger'
      });
      return {Segment: []};
    }

    return store.state.splitFile!.Run.Segments;
  }

  get selectedSobTotal() {
    const sob = cumulatedSumOfBests(this.segments);

    return +(sob[sob.length - 1]).toFixed(2);
  }

  makeBalanced() {
    withLoad(() => {
      const comparisonAlreadyExists = this.segments.Segment.find(
        segment => segment.SplitTimes.SplitTime.find(
          (splitTime: SplitTime) => splitTime['@_name'] == this.comparisonName
        )
      );

      if (comparisonAlreadyExists) {
        this.$bvToast.toast(`Comparison ${this.comparisonName} already exists`, {
          title: 'Error',
          autoHideDelay: 5000,
          appendToast: false,
          variant: 'danger'
        });
        return;
      }

      splitFileIsModified(true);

      const actualFactor = this.useTargetTime
        ? ((this.targetTime / this.selectedSobTotal) - 1) * 100
        : this.balancedFactor;

      const sobRT              = cumulatedSumOfBests(this.segments, false);
      const balancedRT         = sobRT.map((time) => time + actualFactor / 100 * time);
      let sobGT                = [];
      let balancedGT: number[] = [];

      if (store.state.hasGameTime) {
        sobGT      = cumulatedSumOfBests(this.segments, true);
        balancedGT = sobGT.map((time) => time + actualFactor / 100 * time);
      }

      this.segments.Segment.forEach((segment, index, segArray) => {
        const splitTimes = segArray[index].SplitTimes.SplitTime;

        const newSplitTime: SplitTime = {
          '@_name': this.comparisonName,
          RealTime: secondsToLivesplitFormat(balancedRT[index])
        };

        if (store.state.hasGameTime)
          newSplitTime.GameTime = secondsToLivesplitFormat(balancedGT[index]);

        splitTimes.push(newSplitTime);

        segArray[index].SplitTimes.SplitTime = splitTimes;
      });
    });

    this.$bvToast.toast(`Comparison was successfully added`, {
      title: this.comparisonName,
      autoHideDelay: 5000,
      appendToast: false,
      variant: 'success'
    });
  }
}
</script>

<style scoped lang="scss">
.help-question {
  font-size: 1rem;
}
</style>
