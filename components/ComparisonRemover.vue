<template>
  <div v-if="deletableComparisons.length">
    <collapsible-card id="ComparisonRemoverCard" title="Delete comparison">
      <multiselect style="max-width: 30rem" class="m-auto" v-model="comparisonsToDelete" :options="deletableComparisons"
                   multiple/>
      <div class="text-center">
        <b-button @click="deleteComparisons" class="mt-2" variant="danger" :disabled="!comparisonsToDelete.length">
          Delete
        </b-button>
      </div>
    </collapsible-card>
  </div>
</template>

<script lang="ts">
import {
  availableComparisons,
  splitFileIsModified,
  Segment,
  SplitTime
}                                from '~/util/splits';
import {Component, mixins, Prop} from 'nuxt-property-decorator';
import BaseModal                 from '~/components/BaseModal.vue';
import Multiselect               from 'vue-multiselect';
import {GlobalEventEmitter}      from '~/util/globalEvents';

@Component({components: {Multiselect}})
export default class ComparisonRemover extends mixins(BaseModal) {
  comparisonsToDelete: string[] = [];

  @Prop()
  segments!: Segment[];

  get deletableComparisons() {
    return availableComparisons(this.segments).filter(s => s != 'Personal Best');
  }

  deleteComparisons() {
    GlobalEventEmitter.$emit('openConfirm', `Delete ${this.comparisonsToDelete.join(', ')}?`, () => {
      splitFileIsModified(true);

      this.segments.forEach((segment, index, segArray) => {
        const splitTimes = segArray[index].SplitTimes.SplitTime;

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
