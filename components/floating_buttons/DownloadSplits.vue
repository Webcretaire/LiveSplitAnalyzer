<template>
  <b-button v-b-tooltip.hover.left="'Download splits'" pill size="lg" :variant="variant" @click="downloadSplits"
            :class="classList">
    <font-awesome-icon icon="floppy-disk"/>
  </b-button>
</template>

<script lang="ts">
import {Component, Prop, Vue}           from 'nuxt-property-decorator';
import {xmlBuilder}                     from '~/util/xml';
import store                            from '~/util/store';
import {SplitFile, splitFileIsModified} from '~/util/splits';
import {withLoad}                       from '~/util/loading';

@Component
export default class DownloadSplits extends Vue {
  @Prop()
  parsedSplits!: SplitFile;

  get variant() {
    return store.state.splitFileIsModified ? 'success' : 'light';
  }

  get classList() {
    return store.state.splitFileIsModified ? 'dl-button-modified float-button' : 'float-button';
  }

  downloadSplits() {
    withLoad(() => {
      let element = document.createElement('a');
      element.setAttribute('download', 'splits.lss');
      element.setAttribute(
        'href',
        `data:binary/octet-stream,${encodeURIComponent(xmlBuilder.build(this.parsedSplits))}`
      );

      element.style.display = 'none';
      document.body.appendChild(element);

      splitFileIsModified(false);

      element.click();

      document.body.removeChild(element);
    });
  }
}
</script>

<style lang="scss" scoped>
.dl-button-modified {
  width: 4.8rem !important;
  height: 4.8rem !important;
  font-size: 2rem !important;
  transform: translateY(0.4rem);
}
</style>
