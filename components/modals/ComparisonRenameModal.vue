<template>
  <b-modal :ref="modalRef" title="Rename comparison" class="text-center" @hidden="destroyModal" hide-footer centered
           size="lg">
    <div class="text-center" style="max-height: 80vh; overflow: auto">
      <h4>Rename "{{ oldComparisonName }}" to:</h4>
      <b-form-input v-model="newComparisonName" required class="mt-2 mb-2"/>
      <b-button @click="renameComparison" variant="success" :disabled="newNameInput" class="mb-1">
        Confirm
      </b-button>
    </div>
  </b-modal>
</template>

<script lang="ts">
import {Segment, splitFileIsModified} from '~/util/splits';
import {Component, Prop, mixins}      from 'nuxt-property-decorator';
import BaseModal                      from '~/components/modals/BaseModal.vue';
import {withLoad}                     from '~/util/loading';

@Component
export default class ComparisonRenameModal extends mixins(BaseModal) {
  modalRef: string = 'ComparisonRenameModal';

  newComparisonName: string = '';

  @Prop()
  segments!: Segment[];

  @Prop()
  oldComparisonName!: string;

  @Prop()
  callback!: Function;

  get newNameInput() {
    return this.newComparisonName.trim() === '';
  }

  renameComparison() {
    withLoad(() => {
      this.segments.forEach((segment) => {
        const selectedComparison = segment.SplitTimes.SplitTime.find(s => s['@_name'] === this.oldComparisonName);
        if (selectedComparison)
          selectedComparison['@_name'] = this.newComparisonName;
      });
      splitFileIsModified(true);
      this.applyCallback();
    });
  }

  applyCallback() {
    this.callback(this.newComparisonName);
    this.hideModal();
  }
}
</script>
