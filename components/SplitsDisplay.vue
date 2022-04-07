<template>
  <b-row>
    <b-col cols="12" :lg="panelSize" :offset-lg="panelOffset">
      <div class="p-3">
        <b-form-file
          v-model="splitFile"
          accept=".lss"
          placeholder="Choose a file or drop it here..."
          drop-placeholder="Drop file here..."
          class="mb-3"
        ></b-form-file>
        <div v-if="parsedSplits && showDetail">
          <run-overview :run="parsedSplits.Run" class="mb-4"/>

          <collapsible-card id="OptionsCard" title="Options">
            <div class="d-flex mt-4 mb-2">
              <b-form inline class="text-center m-auto">
                <b-input-group prepend="Currently displayed run">
                  <b-form-input type="number" v-model.number="currentAttemptNumber" :max="latestAttemptNumber" min="1"
                                debounce="500"/>
                </b-input-group>
                <b-button variant="outline-info" class="ml-2" @click="currentAttemptNumber = PB['@_id']"
                          :disabled="isPb">
                  Go to PB
                </b-button>
              </b-form>
            </div>
            <loading-switch v-model="filterRuns" class="mt-3 mb-2">
              Filter out unfinished runs
            </loading-switch>
            <vue-slider v-model="currentAttemptNumber" :data="runAttempts" data-value="@_id" data-label="@_id"
                        :marks="runSliderMarks" lazy adsorb class="attempt-selection-slider"/>
            <hr/>
            <loading-switch v-model="graphYAxisToZero" class="mt-2 mb-2">
              Graphs' Y axis starts at zero
            </loading-switch>
            <loading-switch v-model="graphPBHline" class="mb-2">
              Current attempt times' horizontal line in graphs
            </loading-switch>
            <loading-switch v-model="displayLabels" class="mb-2">
              Display labels for doughnut charts
            </loading-switch>
            <loading-switch v-if="globalState.hasGameTime" v-model="globalState.useRealTime" class="mb-2">
              Use real time instead of game time
            </loading-switch>
            <h6 class="mt-4">Size of info panels</h6>
            <b-row>
              <b-col cols="12" xl="8" offset-xl="2">
                <vue-slider v-model="widthValue" :min="0" :max="3" lazy adsorb/>
              </b-col>
            </b-row>
          </collapsible-card>

          <toolbox v-model="parsedSplits" :current-attempt-number="currentAttemptNumber" :pb="PB['@_id']" class="mb-4"/>

          <attempt-stats :attempts="runAttempts" :graphYAxisToZero="graphYAxisToZero"/>

          <attempt-overview :run="parsedSplits.Run"
                            :attempt="currentAttempt"
                            :is-pb="isPb"
                            :display-labels="displayLabels"
                            class="mb-4"/>

          <comparisons-display :segments="parsedSplits.Run.Segments"/>

          <split-display :split="split"
                         v-for="(split, key) in splits"
                         :key="`split-${key}-${split.Name}`"
                         :splitIndex="key"
                         :graphYAxisToZero="graphYAxisToZero"
                         :graphPBHline="graphPBHline"
                         :currentAttemptNumber="currentAttemptNumber"
                         class="mb-3"/>
        </div>
      </div>
    </b-col>
  </b-row>
</template>

<script lang="ts">
import {Attempt, selectTime, SplitFile, splitFileIsModified} from '~/util/splits';
import {Component, Vue, Watch}                               from 'nuxt-property-decorator';
import {stringTimeToSeconds}                                 from '~/util/durations';
import VueSlider                                             from 'vue-slider-component';
import {whithLoadAsync}                                      from '~/util/loading';
import {asArray}                                             from '~/util/util';
import store                                                 from '~/util/store';
import {offload}                                             from '~/util/offloadWorker';
import {OffloadWorkerOperation}                              from '~/util/offloadworkerTypes';

@Component({components: {VueSlider}})
export default class SplitsDisplay extends Vue {
  splitFile: File | null = null;

  parsedSplits: SplitFile | null = null;

  graphYAxisToZero: boolean = false;

  graphPBHline: boolean = false;

  displayLabels: boolean = false;

  currentAttemptNumber: number = 1;

  showDetail: boolean = false;

  globalState = store.state;

  filterRuns: boolean = false;

  widthValue: number = 0;

  get panelOffset() {
    return (0 - (this.widthValue - 3));
  }

  get panelSize() {
    return (12 - (2 * this.panelOffset));
  }

  get isPb(): boolean {
    return this.currentAttemptNumber === this.PB?.['@_id'];
  }

  get latestAttemptNumber(): number {
    if (!this.parsedSplits) return 0;

    return Math.max(...this.runAttempts.map(a => a['@_id']));
  }

  get splits() {
    if (!this.parsedSplits) return [];

    return this.parsedSplits.Run.Segments.Segment;
  }

  get currentAttempt() {
    if (!this.parsedSplits) return null;

    return asArray(this.parsedSplits.Run.AttemptHistory.Attempt).find((a) => a['@_id'] == this.currentAttemptNumber) || this.PB;
  }

  get runAttempts(): Attempt[] {
    if (this.filterRuns)
      return asArray(this.parsedSplits?.Run.AttemptHistory.Attempt).filter(a => selectTime(a));
    else
      return asArray(this.parsedSplits?.Run.AttemptHistory.Attempt);
  }

  get runSliderMarks(): number[] {
    const firstRunId = this.runAttempts[0]['@_id'];
    const lastRunId  = this.latestAttemptNumber;

    return [firstRunId, lastRunId];
  }

  get PB() {
    if (!this.parsedSplits) return null;

    return this.runAttempts.reduce((curLowest: Attempt | null, cur: Attempt) => {
      const curTime = selectTime(cur);
      if (!curTime) return curLowest;
      const compare = selectTime(curLowest) || '999:59:59.99';
      return !curLowest || stringTimeToSeconds(curTime) < stringTimeToSeconds(compare) ? cur : curLowest;
    }, null);
  }

  @Watch('splitFile')
  fileChange(newVal: File) {
    whithLoadAsync((endLoad: Function) => {
      newVal.text()
        .then(text => {
          // Not very elegant, but efficient and decently fast
          store.state.hasGameTime = text.includes('<GameTime>');

          return offload(OffloadWorkerOperation.XML_PARSE_TEXT, text);
        })
        .then((parsedSplits: SplitFile) => {
          this.parsedSplits = parsedSplits;

          if (!this.parsedSplits) // Should never happen, but it's important for type safety
            return;

          store.state.useRealTime = !store.state.hasGameTime;
          store.state.splitFile   = this.parsedSplits;
          splitFileIsModified(false);
        })
        .finally(() => endLoad());
    });
  }

  @Watch('parsedSplits')
  onSplitFileLoad() {
    this.currentAttemptNumber = this.PB?.['@_id'] || this.latestAttemptNumber;
    this.displayLabels        = (this.parsedSplits?.Run.Segments.Segment.length || 0) <= 30;
    this.showDetail           = false;
    this.$nextTick(() => this.showDetail = true);
  }
}
</script>

<style lang="scss" scoped>
.attempt-selection-slider {
  margin-bottom: 2rem;
}
</style>
