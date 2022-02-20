<template>
  <div class="p-3">
    <b-form-file
      @change="fileChange"
      accept=".lss"
      placeholder="Choose a file or drop it here..."
      drop-placeholder="Drop file here..."
      class="mb-3"
    ></b-form-file>
    <b-row v-if="splitFile.length">
      <b-col cols="6" xl="3" lg="4" v-for="split in splits" :key="split.Name">
        <b-card :title="split.Name" class="text-center mb-3">
          <img class="mt-3" :alt="split.Name" :src="srcFormattedIcon(split)"/>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
import {XMLParser}      from 'fast-xml-parser';
import {extractPng}     from '~/util/pngExtractor';
import {Segment}        from '~/util/splits';
import {Vue, Component} from 'nuxt-property-decorator';

// See https://github.com/microsoft/TypeScript/issues/31816#issuecomment-593069149
export type FileEventTarget = EventTarget & { files: FileList };

@Component
export default class SplitsDisplay extends Vue {
  xmlParser: XMLParser = new XMLParser();

  splitFile: string = '';

  get parsedSplits() {
    return this.xmlParser.parse(this.splitFile);
  }

  get splits() {
    return this.parsedSplits.Run.Segments.Segment;
  }

  srcFormattedIcon(split: Segment): String | null {
    const png = extractPng(split.Icon);
    return png ? 'data:image/jpeg;base64,' + btoa(
      new Uint8Array(png)
        .reduce((data, byte) => data + String.fromCharCode(byte), '')
    ) : null;
  }

  fileChange(ev: Event) {
    const file   = (<FileEventTarget>ev.target).files[0];
    const reader = new FileReader();

    reader.onload = e => {
      if (e.target)
        this.splitFile = e.target.result as string;
      else
        console.error('FileReader error');
    };
    reader.readAsText(file);
  }
}
</script>

<style scoped lang="scss">
* {
  color: black;
}

img {
  filter: drop-shadow(0 0 0.5rem rgba(0, 0, 0, 1));
  max-width: 6rem;
  max-height: 6rem;
}
</style>
