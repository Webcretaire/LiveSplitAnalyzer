<template>
  <b-modal :ref="modalRef" hide-header hide-footer class="text-center" centered size="sm" @hidden="destroyModal"
           no-close-on-backdrop no-close-on-esc>
    <div class="w-100 mt-2">
      <svg xmlns="http://www.w3.org/2000/svg"
           x="0px" y="0px" class="d-block m-auto"
           width="3rem" height="3rem" viewBox="0 0 24 30"
           xml:space="preserve">
        <rect x="0" y="0" width="4" height="10" fill="#333">
          <animateTransform attributeType="xml"
                            attributeName="transform" type="translate"
                            values="0 0; 0 20; 0 0"
                            begin="0" dur="1.35s" repeatCount="indefinite"/>
        </rect>
      <rect x="10" y="0" width="4" height="10" fill="#333">
          <animateTransform attributeType="xml"
                            attributeName="transform" type="translate"
                            values="0 0; 0 20; 0 0"
                            begin="0.45s" dur="1.35s" repeatCount="indefinite"/>
        </rect>
      <rect x="20" y="0" width="4" height="10" fill="#333">
          <animateTransform attributeType="xml"
                            attributeName="transform" type="translate"
                            values="0 0; 0 20; 0 0"
                            begin="0.9s" dur="1.35s" repeatCount="indefinite"/>
        </rect>
      </svg>
    </div>

    <div class="text-center mt-4">
      <h2>Loading</h2>
    </div>
  </b-modal>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator';
import {BModal}         from 'bootstrap-vue';

@Component
export default class LoadingModal extends Vue {
  destroyModal() {
    this.$store.dispatch('modal/destroy');
  }

  hideModal() {
    const m = this.$refs[this.modalRef] as BModal;
    if (m) m.hide();
  }

  mounted() {
    const m = this.$refs[this.modalRef] as BModal;
    if (m) m.show();
  }

  modalRef: string = 'alertIconModal';
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
