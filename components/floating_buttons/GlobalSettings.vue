<template>
  <b-button v-b-tooltip.hover.left="'Settings'" pill size="lg" variant="light" @click="openSettings"
            class="floating-button">
    <font-awesome-icon icon="cog"/>
  </b-button>
</template>

<script lang="ts">
import {Component, Vue}     from 'nuxt-property-decorator';
import {GlobalEventEmitter} from '~/util/globalEvents';

@Component
export default class GlobalSettings extends Vue {
  openSettings() {
    GlobalEventEmitter.$emit('openModal', 'GlobalSettingsModal');
  }
}
</script>

