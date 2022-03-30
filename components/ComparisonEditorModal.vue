<template>
  <b-modal :ref="modalRef" title="Comparison editor" class="text-center" @hidden="destroyModal" hide-footer centered
           size="lg">
    <h3 class="text-center">Create a balanced comparison</h3>
    <table role="presentation" class="w-100">
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

    <div v-if="deletableComparisons.length">
      <hr/>
      <h3 class="text-center">Delete comparison</h3>
      <multiselect style="max-width: 30rem" class="m-auto" v-model="comparisonsToDelete" :options="deletableComparisons" multiple/>
      <div class="text-center">
        <b-button @click="deleteComparisons" class="mt-2" variant="danger" :disabled="!comparisonsToDelete.length">
          Delete
        </b-button>
      </div>
    </div>
  </b-modal>
</template>

<script lang="ts">
import {
  availableComparisons,
  cumulatedSumOfBests,
  splitFileIsModified,
  Segments,
  SplitTime
}                                 from '~/util/splits';
import {Component, mixins}        from 'nuxt-property-decorator';
import BaseModal                  from '~/components/BaseModal.vue';
import store                      from '~/util/store';
import {asArray}                  from '~/util/util';
import {secondsToLivesplitFormat} from '~/util/durations';
import {whithLoad}                from '~/util/loading';
import Multiselect                from 'vue-multiselect';
import {GlobalEventEmitter}       from '~/util/globalEvents';

@Component({components: {Multiselect}})
export default class ComparisonEditorModal extends mixins(BaseModal) {
  modalRef: string = 'ComparisonEditorModal';

  comparisonName: string = '';

  comparisonsToDelete: string[] = [];

  targetTime: number = this.selectedSobTotal;

  balancedFactor: number = 0;

  useTargetTime: boolean = false;

  get deletableComparisons() {
    if (!store.state.splitFile.Run?.Segments) return [];

    return availableComparisons(store.state.splitFile.Run?.Segments).filter(s => s != 'Personal Best');
  }

  get segments(): Segments {
    if (!store.state.splitFile.Run?.Segments) {
      this.$bvToast.toast(`No splitfile selected`, {
        title: 'Error',
        autoHideDelay: 5000,
        appendToast: false,
        variant: 'danger'
      });
      return {Segment: []};
    }

    return store.state.splitFile.Run.Segments;
  }

  get selectedSobTotal() {
    const sob = cumulatedSumOfBests(this.segments);

    return +(sob[sob.length - 1]).toFixed(2);
  }

  makeBalanced() {
    whithLoad(() => {
      const comparisonAlreadyExists = this.segments.Segment.find(
        segment => asArray(segment.SplitTimes.SplitTime).find(
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
        const splitTimes = asArray(segArray[index].SplitTimes.SplitTime);

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

  deleteComparisons() {
    GlobalEventEmitter.$emit('openConfirm', `Delete ${this.comparisonsToDelete.join(', ')}?`, () => {
      splitFileIsModified(true);

      this.segments.Segment.forEach((segment, index, segArray) => {
        const splitTimes = asArray(segArray[index].SplitTimes.SplitTime);

        segArray[index].SplitTimes.SplitTime = splitTimes.filter(
          (splitTime: SplitTime) => !this.comparisonsToDelete.includes(splitTime['@_name'])
        );
      });

      this.$bvToast.toast(`Comparison${this.comparisonsToDelete.length == 1 ? '' : 's'} successfully deleted`, {
        title: this.comparisonsToDelete.join(', '),
        autoHideDelay: 5000,
        appendToast: false,
        variant: 'success'
      });

      this.comparisonsToDelete = [];

      GlobalEventEmitter.$emit('closeConfirm');
    });
  }
}
</script>

<style scoped lang="scss">
h3 {
  font-size: 1.25rem;
}

.help-question {
  font-size: 1rem;
}
</style>
