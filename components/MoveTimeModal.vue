<template>
  <b-modal :ref="modalRef" title="Move time to next split" class="text-center" @hidden="destroyModal" hide-footer centered size="lg">
    <div class="text-center" style="max-height: 80vh; overflow: auto">
      <h4>Time to move from {{ currentSplit.Name }} to {{ nextSplit.Name }}:</h4>
    </div>
  </b-modal>
</template>

<script lang="ts">
import {Segments, splitFileIsModified} from '~/util/splits';
import {Component, Prop, mixins}       from 'nuxt-property-decorator';
import BaseModal                       from '~/components/BaseModal.vue';
import {whithLoad}                     from '~/util/loading';
import store                           from '~/util/store';

@Component
export default class MoveTimeModal extends mixins(BaseModal) {
  modalRef: string = 'MoveTimeModal';

  @Prop()
  currentSplitIndex!: number;

  get currentSplit() {
    return store.state.splitFile?.Run.Segments.Segment[this.currentSplitIndex];
  }

  get nextSplit() {
    return store.state.splitFile?.Run.Segments.Segment[this.currentSplitIndex + 1];
  }
}
</script>