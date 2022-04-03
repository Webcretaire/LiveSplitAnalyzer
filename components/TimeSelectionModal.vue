<template>
  <b-modal :ref="modalRef" hide-header hide-footer centered size="md" no-close-on-backdrop no-close-on-esc
           @hidden="destroyModal">
    <div class="text-center m-2">
      <h3 class="mb-3">{{ message }}</h3>
      <time-selector v-model="value" class="mb-3"/>
      <b-button variant="success" @click="applyCallback">OK</b-button>
      <b-button variant="danger" @click="hideModal">Cancel</b-button>
    </div>
  </b-modal>
</template>

<script lang="ts">
import {Component, Prop, mixins}    from 'nuxt-property-decorator';
import BaseModal            from '~/components/BaseModal.vue';
import {GlobalEventEmitter} from '~/util/globalEvents';

@Component
export default class TimeSelectionModal extends mixins(BaseModal) {
  modalRef: string = 'TimeSelectionModal';

  @Prop()
  message!: string;

  @Prop()
  callback!: Function;

  @Prop()
  value!:number;

  applyCallback() {
    this.$emit('input', this.value);
    this.callback(this.value);
    this.hideModal();
  }
}
</script>

<style scoped lang="scss">
h3 {
  font-size: 1.5rem;
}
</style>
