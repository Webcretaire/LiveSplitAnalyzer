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
      <b-card class="text-left mb-3" v-for="split in splits" :key="split.Name">
        <div class="limit-height">
          <b-card-img :src="srcFormattedIcon(split)" class="split-icon mr-4" block/>
          <div class="mt-auto mb-auto">
            <h3>
              {{ split.Name }}
            </h3>
            <p v-if="split.BestSegmentTime">
              <strong>Best time:</strong> {{ formatTime(split.BestSegmentTime.GameTime) }} (game time) ;
              {{ formatTime(split.BestSegmentTime.RealTime) }} (real time)
            </p>
          </div>
        </div>
      </b-card>
    </div>
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

  formatTime(time: string) {
    const t = time.match(/([0-9]+):([0-9]+):([0-9.]+)/);

    if (!t) return ''; // Should not happen but we need to please TS

    // t[0] contains the whole string
    const hours = +t[1];
    const minutes = +t[2];
    const seconds = +t[3];
    let out = '';
    if (hours)
      out += `${hours}h`;
    if (minutes)
      out += `${minutes}m`;
    out += `${seconds}s`;

    return out;
  }
}
</script>

<style scoped lang="scss">
* {
  color: black;
}

img {
  filter: drop-shadow(0 0 0.5rem rgba(0, 0, 0, 1));
}

.limit-height {
  max-height: 4rem;
  display: flex;
}

.split-icon {
  object-fit: contain;
  max-width: 100%;
  max-height: 256px;
  width: auto;
  height: auto;
}
</style>
