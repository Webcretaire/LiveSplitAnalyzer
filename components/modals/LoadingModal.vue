<template>
  <b-modal v-model="modalDisplay" hide-header hide-footer centered size="sm" no-close-on-backdrop no-close-on-esc>
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
import {Component, Vue, Watch} from 'nuxt-property-decorator';

@Component
export default class LoadingModal extends Vue {
  runningCallbacks: number = 0;

  modalDisplay: boolean = false;

  runCallback(callback: () => any): void {
    ++this.runningCallbacks;

    this.$nextTick(() => Promise.resolve(callback()).finally(() => --this.runningCallbacks));
  }

  @Watch('runningCallbacks')
  onCallbacksUpdate(newVal: number) {
    this.modalDisplay = newVal > 0;
  }

  /**
   * I have no idea why this is needed, and I can't find an explanation in the documentation,
   * but it seems that *on production builds only*, this value can change without me changing
   * it (so the only explanation I have is that Bootstrap Vue is changing it itself because
   * it's the only other piece of code which has access to it), so if anything tries to modify
   * modalDisplay directly make sure its state is coherent with runningCallbacks value, and if
   * it's not schedule a "re-sync" on next Vue "cycle"
   */
  @Watch('modalDisplay')
  fixModalDisplayValueInCaseOfDeSync(newVal: boolean) {
    if (newVal && !this.runningCallbacks)
      this.$nextTick(() => this.modalDisplay = this.runningCallbacks > 0);
  }
}
</script>

<style lang="scss" scoped>
svg path,
svg rect {
  fill: #FF6700;
}
</style>
