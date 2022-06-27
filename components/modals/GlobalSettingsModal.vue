<template>
  <b-modal :ref="modalRef" title="Global settings" @hidden="destroyModal" hide-footer centered size="lg">
    <div class="text-center">
      <loading-switch v-if="globalState.hasGameTime" v-model="globalState.useRealTime" class="mb-2">
        Use real time instead of game time
      </loading-switch>
      <h6 class="mt-4">Size of info panels</h6>
      <b-row>
        <b-col cols="12" xl="8" offset-xl="2">
          <vue-slider v-model="globalState.savedSettings.pageWidth" :min="0" :max="3" lazy adsorb/>
        </b-col>
      </b-row>
    </div>
  </b-modal>
</template>

<script lang="ts">
import {Component, mixins} from 'nuxt-property-decorator';
import BaseModal           from '~/components/modals/BaseModal.vue';
import LoadingSwitch       from '~/components/LoadingSwitch.vue';
import store               from '~/util/store';
import VueSlider           from 'vue-slider-component';

@Component({components:{LoadingSwitch, VueSlider}})
export default class GlobalSettingsModal extends mixins(BaseModal) {
  modalRef: string = 'GlobalSettingsModal';

  globalState = store.state;
}
</script>
