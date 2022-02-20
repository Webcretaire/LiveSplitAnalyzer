<!-- Please remove this file from your project -->
<template>
  <div class="p-3">
    <b-form-file
      @change="previewFiles"
      accept=".lss"
      placeholder="Choose a file or drop it here..."
      drop-placeholder="Drop file here..."
      class="mb-3"
    ></b-form-file>
    <b-row v-if="splitFile">
      <b-col cols="6" xl="3" lg="4" v-for="split in splits">
        <b-card :title="split.Name" class="text-center mb-3">
          <img class="mt-3" :alt="split.Name" :src="srcFormattedImage(extractPng(split.Icon))"/>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import {XMLParser}  from 'fast-xml-parser';
import {extractPng} from '~/util/pngExtractor';

export default {
  name: 'NuxtTutorial',
  data: () => ({
    xmlParser: new XMLParser(),
    splitFile: null
  }),
  computed: {
    parsedSplits() {
      return this.xmlParser.parse(this.splitFile);
    },
    splits() {
      return this.parsedSplits.Run.Segments.Segment;
    }
  },
  watch: {
    fileInput(newVal) {

    }
  },
  methods: {
    srcFormattedImage(rawImage) {
      return 'data:image/jpeg;base64,' + btoa(
        new Uint8Array(rawImage)
          .reduce((data, byte) => data + String.fromCharCode(byte), '')
      );
    },
    previewFiles(ev) {
      const file = ev.target.files[0];
      const reader = new FileReader();

      reader.onload = e => this.splitFile = e.target.result;
      reader.readAsText(file);
    },
    extractPng
  },
  mounted() {
  }
};
</script>

<style scoped lang="scss">
img {
  filter: drop-shadow(0 0 0.5rem rgba(0, 0, 0, 1));
  max-width: 6rem;
  max-height: 6rem;
}
</style>
