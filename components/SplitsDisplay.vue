<template>
  <div class="p-3">
    <b-form-file
      @change="fileChange"
      accept=".lss"
      placeholder="Choose a file or drop it here..."
      drop-placeholder="Drop file here..."
      class="mb-3"
    ></b-form-file>
    <div v-if="parsedSplits && showDetail">
      <run-overview :run="parsedSplits.Run" class="mb-4"/>

      <collapsible-card title="Options">
        <div class="d-flex mt-4 mb-2">
          <b-form inline class="text-center m-auto">
            <b-input-group prepend="Currently displayed run">
              <b-form-input type="number" v-model.number="currentAttemptNumber" :max="latestAttemptNumber" min="1"
                            debounce="500"/>
            </b-input-group>
            <b-button variant="outline-info" class="ml-2" @click="currentAttemptNumber = PB['@_id']" :disabled="isPb">
              Go to PB
            </b-button>
          </b-form>
        </div>
        <vue-slider v-model="currentAttemptNumber" :min="1" :max="latestAttemptNumber" lazy/>
        <hr/>
        <b-form-checkbox v-model="graphYAxisToZero" name="check-button" switch class="mt-4 mb-2">
          Graphs' Y axis starts at zero
        </b-form-checkbox>
        <b-form-checkbox v-model="graphPBHline" name="check-button" switch class="mb-2">
          Current attempt times' horizontal line in graphs
        </b-form-checkbox>
      </collapsible-card>

      <toolbox v-model="parsedSplits" class="mb-4"/>

      <attempt-overview :run="parsedSplits.Run"
                        :attempt="currentAttempt"
                        :is-pb="isPb"
                        class="mb-4"/>

      <split-display :split="split"
                     v-for="(split, key) in splits"
                     :key="`split-${key}`"
                     :graphYAxisToZero="graphYAxisToZero"
                     :graphPBHline="graphPBHline"
                     :currentAttemptNumber="currentAttemptNumber"
                     class="mb-3"/>
    </div>
  </div>
</template>

<script lang="ts">
import {Vue, Component, Watch}          from 'nuxt-property-decorator';
import {Attempt, selectTime, SplitFile} from '~/util/splits';
import {stringTimeToSeconds}            from '~/util/durations';
import {xmlParser}                      from '~/util/xml';
import VueSlider                        from 'vue-slider-component';
import {whithLoadAsync}                 from '~/util/loading';

@Component({components: {VueSlider}})
export default class SplitsDisplay extends Vue {
  parsedSplits: SplitFile | null = null;

  graphYAxisToZero: boolean = false;

  graphPBHline: boolean = false;

  currentAttemptNumber: number = 1;

  showDetail: boolean = false;

  get isPb(): boolean {
    return this.currentAttemptNumber === this.PB?.['@_id'];
  }

  get latestAttemptNumber(): number {
    if (!this.parsedSplits) return 0;

    return Math.max(...this.parsedSplits.Run.AttemptHistory.Attempt.map(a => a['@_id']));
  }

  get splits() {
    if (!this.parsedSplits) return [];

    return this.parsedSplits.Run.Segments.Segment;
  }

  get currentAttempt() {
    if (!this.parsedSplits) return null;

    return this.parsedSplits.Run.AttemptHistory.Attempt.find((a) => a['@_id'] == this.currentAttemptNumber) || this.PB;
  }

  get PB() {
    if (!this.parsedSplits) return null;

    return this.parsedSplits.Run.AttemptHistory.Attempt.reduce((curLowest: Attempt | null, cur: Attempt) => {
      const curTime = selectTime(cur);
      if (!curTime) return curLowest;
      const compare = selectTime(curLowest) || '999:59:59.99';
      return !curLowest || stringTimeToSeconds(curTime) < stringTimeToSeconds(compare) ? cur : curLowest;
    }, null);
  }

  // There isn't a good type for form events which contain files unfortunately
  fileChange(ev: any) {
    whithLoadAsync((endLoad: Function) => {
      // If the user drag & drops the file we'll get it in `dataTransfer`, otherwise it'll be in `target`
      const file   = (ev.dataTransfer || ev.target).files[0];
      const reader = new FileReader();

      reader.onload = e => {
        if (e.target)
          this.parsedSplits = xmlParser.parse(e.target.result as string);
        else
          console.error('FileReader error');
        endLoad();
      };
      reader.readAsText(file);
    });
  }

  @Watch('parsedSplits')
  onSplitFileLoad() {
    this.currentAttemptNumber = this.PB?.['@_id'] || this.latestAttemptNumber;
    this.showDetail           = false;
    this.$nextTick(() => this.showDetail = true);
  }
}
</script>
