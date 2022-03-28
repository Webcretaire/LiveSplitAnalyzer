<template>
  <b-button class="dl-button" v-b-tooltip.hover="'Download splits'" pill size="lg" variant="light"
            @click="downloadSplits">
    <font-awesome-icon icon="floppy-disk"/>
  </b-button>
</template>

<script lang="ts">
import {Component, Vue}      from 'nuxt-property-decorator';
import {xmlBuilder}          from '~/util/xml';
import store                 from '~/util/store';
import {splitFileIsModified} from '~/util/splits';

@Component
export default class DownloadSplits extends Vue {
  downloadSplits() {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:binary/octet-stream,' + encodeURIComponent(xmlBuilder.build(store.state.splitFile)));
    element.setAttribute('download', 'splits.lss');

    element.style.display = 'none';
    document.body.appendChild(element);

    splitFileIsModified(false);

    element.click();

    document.body.removeChild(element);
  }
}
</script>

<style lang="scss">
.dl-button {
  width: 4rem;
  height: 4rem;
  font-size: 1.5rem;
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  filter: drop-shadow(0 0 0.5rem black);
}
</style>
