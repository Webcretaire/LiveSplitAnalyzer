<template>
  <b-button v-b-tooltip.hover="'Download splits'" pill size="lg" :variant="variant"
            @click="downloadSplits" :class="classList">
    <font-awesome-icon icon="floppy-disk"/>
  </b-button>
</template>

<script lang="ts">
import {Component, Vue}      from 'nuxt-property-decorator';
import {xmlBuilder}          from '~/util/xml';
import store                 from '~/util/store';
import {splitFileIsModified} from '~/util/splits';
import {withLoad}            from '~/util/loading';

@Component
export default class DownloadSplits extends Vue {
  get variant() {
    return store.state.splitFileIsModified ? 'success' : 'light';
  }

  get classList() {
    return store.state.splitFileIsModified ? 'dl-button-modified dl-button' : 'dl-button';
  }

  downloadSplits() {
    withLoad(() => {
      let element = document.createElement('a');
      element.setAttribute('href', 'data:binary/octet-stream,' + encodeURIComponent(xmlBuilder.build(store.state.splitFile)));
      element.setAttribute('download', 'splits.lss');

      element.style.display = 'none';
      document.body.appendChild(element);

      splitFileIsModified(false);

      element.click();

      document.body.removeChild(element);
    });
  }
}
</script>

<style lang="scss">
.dl-button {
  transition: all 500ms;
  width: 4rem;
  height: 4rem;
  font-size: 1.5rem;
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  filter: drop-shadow(0 0 0.5rem black);
}

.dl-button.dl-button-modified {
  width: 5rem;
  height: 5rem;
  font-size: 2rem;
}
</style>
