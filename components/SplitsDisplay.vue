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
        <div v-if="parsedSplits">
          <b-card class="main-card" no-body>
            <b-tabs class="main-tabs" card pills align="center">
              <b-tab title="Summary" active>
                <run-overview :run="parsedSplits.Run" class="mb-4"/>

                <collapsible-card id="OptionsCard" title="General settings">
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

                <attempt-stats :attempts="runAttempts" :graphYAxisToZero="graphYAxisToZero"/>
              </b-tab>

              <b-tab title="Attempt analysis">
                <attempt-analysis-tab :detailed-segments="detailedSegments"
                                      :segments="parsedSplits.Run.Segments.Segment"
                                      :attempts="parsedSplits.Run.AttemptHistory.Attempt"/>
              </b-tab>
              <b-tab title="Comparisons">
                <comparison-tab :segments="parsedSplits.Run.Segments.Segment"/>
              </b-tab>
              <b-tab title="Splits analysis">
                <splits-display-tab :detailed-segments="detailedSegments"
                                    :attempts="parsedSplits.Run.AttemptHistory.Attempt"
                                    :segments-holder="parsedSplits.Run.Segments"/>
              </b-tab>
            </b-tabs>
          </b-card>
        </div>
      </div>
    </b-col>
  </b-row>
</template>

<script lang="ts">
import {
  Attempt, AutoSplitterSettings,
  Segment,
  selectTime,
  SplitFile,
  splitFileIsModified
}                               from '~/util/splits';
import {Component, Vue, Watch}  from 'nuxt-property-decorator';
import VueSlider                from 'vue-slider-component';
import {withLoadAsync}          from '~/util/loading';
import store, {Store}           from '~/util/store';
import {offload}                from '~/util/offloadWorker';
import {OffloadWorkerOperation} from '~/util/offloadworkerTypes';
import {DetailedSegment}        from '~/util/splitProcessing';

@Component({components: {VueSlider}})
export default class SplitsDisplay extends Vue {
  splitFile: File | null = null;

  graphYAxisToZero: boolean = false;

  globalState = store.state;

  filterRuns: boolean = false;

  widthValue: number = 0;

  detailedSegments: DetailedSegment[] = [];

  get parsedSplits() {
    return store.state.splitFile;
  }

  get panelOffset() {
    return (0 - (this.widthValue - 3));
  }

  get panelSize() {
    return (12 - (2 * this.panelOffset));
  }

  get runAttempts(): Attempt[] {
    const attempts = this.parsedSplits?.Run.AttemptHistory.Attempt || [];

    return this.filterRuns ? attempts.filter(a => selectTime(a)) : attempts;
  }

  @Watch('splitFile')
  fileChange(newVal: File) {
    withLoadAsync((endLoad: Function) => {
      newVal.text()
        .then(text => {
          // Not very elegant, but efficient and decently fast
          this.globalState.hasGameTime = text.includes('<GameTime>');

          return offload(OffloadWorkerOperation.XML_PARSE_TEXT, text);
        })
        .then((parsedSplits: SplitFile) => {
          this.globalState.useRealTime = !this.globalState.hasGameTime;
          this.globalState.splitFile   = parsedSplits;

          if (this.$matomo)
            this.$matomo.trackEvent('SplitFile', 'SplitFile load', parsedSplits.Run.GameName);

          splitFileIsModified(false);
        })
        .finally(() => endLoad());
    });
  }

  @Watch('parsedSplits.Run.Segments.Segment', {deep: true})
  segmentsChange(newVal: Segment[]) {
    offload(OffloadWorkerOperation.GENERATE_SPLIT_DETAIL, newVal).then(s => this.detailedSegments = s);
  }

  @Watch('globalState', {deep: true})
  onStateUpdate(newVal: Store) {
    offload(OffloadWorkerOperation.UPDATE_STORE_DATA, newVal);
  }

  @Watch('parsedSplits.Run.AutoSplitterSettings', {deep: true})
  onAutoSplitterSettingsUpdate(newVal: AutoSplitterSettings) {
    this.globalState.autoSplitterSettings = newVal;
  }

  @Watch('parsedSplits', {deep: true})
  onSplitFileLoad(newVal: SplitFile) {
    offload(OffloadWorkerOperation.GET_PB, newVal.Run.AttemptHistory).then(PB => this.globalState.PB = PB);
  }

  @Watch('widthValue')
  panelWidthStore() {
    localStorage.setItem('widthValue', JSON.stringify(this.widthValue));
  }

  mounted() {
    const savedWidthValue = localStorage.getItem('widthValue');
    if (savedWidthValue) {
      this.widthValue = JSON.parse(savedWidthValue);
    } else {
      this.widthValue = window.innerWidth > 1400 ? 0 : 1;
    }
  }
}
</script>

<style lang="scss" scoped>
.main-card {
  background-color: transparent;
}
</style>
