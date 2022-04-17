<template>
  <div v-if="deletableComparisons.length">
    <collapsible-card id="ComparisonRemoverCard" title="Delete comparison">
    <multiselect style="max-width: 30rem" class="m-auto" v-model="comparisonsToDelete" :options="deletableComparisons" multiple/>
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
  Segments,
  SplitTime
}                                 from '~/util/splits';
import {Component, mixins}        from 'nuxt-property-decorator';
import BaseModal                  from '~/components/BaseModal.vue';
import store                      from '~/util/store';
import {asArray}                  from '~/util/util';
import Multiselect                from 'vue-multiselect';
import {GlobalEventEmitter}       from '~/util/globalEvents';

@Component({components: {Multiselect}})
export default class ComparisonRemover extends mixins(BaseModal) {
  comparisonsToDelete: string[] = [];

  get deletableComparisons() {
    if (!store.state.splitFile!.Run?.Segments) return [];

    return availableComparisons(store.state.splitFile!.Run?.Segments).filter(s => s != 'Personal Best');
  }

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
