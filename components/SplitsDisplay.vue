<template>
  <div class="p-3">
    <b-form-file
      @change="fileChange"
      accept=".lss"
      placeholder="Choose a file or drop it here..."
      drop-placeholder="Drop file here..."
      class="mb-3"
    ></b-form-file>
    <div v-if="splitFile.length">
      <split-display :split="split" v-for="split in splits" :key="split.Name"/>
    </div>
  </div>
</template>

<script lang="ts">
import {XMLParser}      from 'fast-xml-parser';
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
