<template>
  <b-modal :ref="modalRef" class="text-center" centered size="sm">
  </b-modal>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator';
import {BModal}         from 'bootstrap-vue';

@Component
export default class ManualGoldUpdateModal extends Vue {
  modalRef: string = 'alertIconModal';

  mounted() {
    const m = this.$refs[this.modalRef] as BModal;
    if (m) m.show();
  }
};
</script>

<style lang="scss" scoped>
* {
  color: black;
}

svg path,
svg rect {
  fill: #FF6700;
}
</style>
