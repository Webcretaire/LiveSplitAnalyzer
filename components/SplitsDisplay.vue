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
      <run-overview :run="parsedSplits.Run" class="mb-4"/>

      <b-card class="mb-4" title="Options" style="color: black">
        <div class="d-flex mt-4 mb-2">
          <b-form inline class="text-center m-auto">
            <b-input-group prepend="Current displayed run">
              <b-form-input type="number" v-model.number="currentAttemptNumber" :max="latestAttemptNumber" min="1"/>
            </b-input-group>
            <b-button variant="outline-dark" class="ml-2" @click="currentAttemptNumber = PB['@_id']">Go to PB</b-button>
          </b-form>
        </div>
        <vue-slider
          v-model="currentAttemptNumber"
          :min="1"
          :max="latestAttemptNumber"
          lazy
        />
        <hr/>
        <b-form-checkbox v-model="graphYAxisToZero" name="check-button" switch class="mt-4 mb-2">
          Graphs' Y axis starts at zero
        </b-form-checkbox>
        <b-form-checkbox v-model="graphPBHline" name="check-button" switch class="mb-2">
          Current attempt times' horizontal line in graphs
        </b-form-checkbox>
      </b-card>

      <attempt-overview :run="parsedSplits.Run"
                        :attempt="currentAttempt"
                        :is-pb="currentAttemptNumber === PB['@_id']"
                        class="mb-4"/>

      <split-display :split="split"
                     v-for="split in splits"
                     :key="split.Name"
                     :graphYAxisToZero="graphYAxisToZero"
                     :graphPBHline="graphPBHline"
                     :currentAttemptNumber="currentAttemptNumber"
                     class="mb-3"/>
    </div>
  </div>
</template>

<script lang="ts">
import {XMLParser}             from 'fast-xml-parser';
import {Vue, Component, Watch} from 'nuxt-property-decorator';
import {Attempt, SplitFile}    from '~/util/splits';
import {stringTimeToSeconds}   from '~/util/durations';
import VueSlider               from 'vue-slider-component';

// See https://github.com/microsoft/TypeScript/issues/31816#issuecomment-593069149
export type FileEventTarget = EventTarget & { dataTransfer: FileList };

@Component({components: {VueSlider}})
export default class SplitsDisplay extends Vue {
  xmlParser: XMLParser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: '@_',
    parseAttributeValue: true,
    allowBooleanAttributes: true
  });

  splitFile: string = '';

  graphYAxisToZero: boolean = false;

  graphPBHline: boolean = false;

  currentAttemptNumber: number = 1;

  get latestAttemptNumber(): number {
    return Math.max(...this.parsedSplits.Run.AttemptHistory.Attempt.map(a => a['@_id']));
  }

  get parsedSplits(): SplitFile {
    return this.xmlParser.parse(this.splitFile);
  }

  get splits() {
    return this.parsedSplits.Run.Segments.Segment;
  }

  get currentAttempt() {
    return this.parsedSplits.Run.AttemptHistory.Attempt.find((a) => a['@_id'] == this.currentAttemptNumber) || this.PB;
  }

  get PB() {
    return this.parsedSplits.Run.AttemptHistory.Attempt.reduce((curLowest: Attempt | null, cur: Attempt) => {
      if (!cur?.GameTime) return curLowest;
      const compare = curLowest?.GameTime || '999:59:59.9999';
      return !curLowest || stringTimeToSeconds(cur.GameTime) < stringTimeToSeconds(compare) ? cur : curLowest;
    }, null);
  }

  // There isn't a good type for form events which contain files unfortunately
  fileChange(ev: any) {
    // If the user drag & drops the file we'll get it in `dataTransfer`, otherwise it'll be in `target`
    const file   = (ev.dataTransfer || ev.target).files[0];
    const reader = new FileReader();

    reader.onload = e => {
      if (e.target)
        this.splitFile = e.target.result as string;
      else
        console.error('FileReader error');
    };
    reader.readAsText(file);
  }

  @Watch('splitFile')
  onSplitFileLoad() {
    this.currentAttemptNumber = this.PB?.['@_id'] || this.latestAttemptNumber;
  }
}
</script>
