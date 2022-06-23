<template>
  <div class="text-center">
    <main>
      <b-img :class="logoClasses" :src="logoSrc" alt="LiveSplitAnalyzer logo"/>
      <h1 class="mb-3">{{ pageTitle }}</h1>
      <p>This tool extracts data from your split files, to display it into (hopefully) pretty graphs.
        Everything happens in your browser, the split file is not sent on the network.</p>
      <b-row>
        <b-col cols="12" :lg="panelSize" :offset-lg="panelOffset" style="transition: all 500ms">
          <div class="p-3">
            <b-form-file
              v-model="fileInput"
              accept=".lss"
              placeholder="Choose a file or drop it here..."
              drop-placeholder="Drop file here..."
              class="mb-3"
            ></b-form-file>
            <p>or import splits from splits.io:</p>
            <b-form @submit.prevent="getSplitsFromID" class="mb-4" inline>
              <b-input-group prepend="https://splits.io/" class="m-auto">
                <b-form-input v-model="splitsID" placeholder="Enter ID here"/>
                <b-input-group-append><b-button type="submit" variant="info" :disabled="emptyID">Get splits</b-button></b-input-group-append>
              </b-input-group>
            </b-form>
            <tabs-container v-if="parsedSplits" :parsed-splits="parsedSplits" :detailed-segments="detailedSegments"
                            :page-width="widthValue" @updateWidth="e => widthValue = e"/>
          </div>
        </b-col>
      </b-row>
    </main>
    <footer>
      This LiveSplit Analyzer is a tool made by
      <a class="font-weight-normal" href="https://speedrun.com/user/Webcretaire" target="_blank">
        <span class="username"><span class="username-dark username-gradient webcretaire-color">Webcretaire</span></span>
      </a> with help from these
      <a href="https://github.com/Webcretaire/LiveSplitAnalyzer/graphs/contributors" class="text-white font-weight-bold"
         target="_blank">
        awesome contributors</a>. Its source code is available on
      <a href="https://github.com/Webcretaire/LiveSplitAnalyzer" class="text-white font-weight-bold" target="_blank">
        GitHub</a>.
    </footer>

    <download-splits v-if="parsedSplits" :parsed-splits="parsedSplits"/>

    <component v-if="componentInstance" :is="componentInstance" v-bind="modalArgs"/>
    <loading-modal ref="loadingModal"/>
    <confirm-modal v-if="confirmMessage" :message="confirmMessage" :callback="confirmCallback"/>
  </div>
</template>

<script lang="ts">
import {
  AutoSplitterSettings,
  Segment,
  SplitFile,
  splitFileIsModified
}                               from '~/util/splits';
import {GlobalEventEmitter}     from '~/util/globalEvents';
import {withLoad}               from '~/util/loading';
import store, {Store}           from '~/util/store';
import {offload}                from '~/util/offloadWorker';
import {OffloadWorkerOperation} from '~/util/offloadworkerTypes';
import {DetailedSegment}        from '~/util/splitProcessing';
import {Vue, Component, Watch}  from 'nuxt-property-decorator';
import VueSlider                from 'vue-slider-component';
import LoadingModal             from '~/components/modals/LoadingModal.vue';

const ConfirmModal = () => import('~/components/modals/ConfirmModal.vue');

@Component({components: {LoadingModal, ConfirmModal, VueSlider}})
export default class IndexPage extends Vue {
  $refs!: {
    loadingModal: LoadingModal
  };

  componentInstance: Function | null = null;

  modalArgs: Record<string, any> = {};

  confirmMessage: string = '';

  confirmCallback: Function | null = null;

  widthValue: number = 0;

  splitsID: string = '';

  fileInput: File | null = null;

  splitFile: string | null = null;

  parsedSplits: SplitFile | null = null;

  detailedSegments: DetailedSegment[] = [];

  globalState: Store = store.state;

  get panelSize() {
    return (12 - (2 * this.panelOffset));
  }

  get panelOffset() {
    return (0 - (this.widthValue - 3));
  }

  get logoClasses() {
    return this.parsedSplits ? ['logo', 'logo-small', 'mt-3', 'mb-2'] : ['logo', 'mt-5', 'mb-4'];
  }

  get emptyID() {
    return this.splitsID.trim() === '';
  }

  get isPopFileLoaded() {
    return this.parsedSplits?.Run?.CategoryName === 'Path of Pain';
  }

  get logoSrc() {
    return require(`~/assets/images/logo_${this.isPopFileLoaded ? 'schy' : 'flat'}.png`);
  }

  get pageTitle() {
    return this.isPopFileLoaded ? '💙' : 'LiveSplit Analyzer';
  }

  getSplitsFromID() {
    const splitsURL = `https://splits.io/${this.splitsID}/export/livesplit?blank=0`;
    withLoad(() =>
      fetch(splitsURL)
        .then(response => response.text())
        .then(fileString => this.splitFile = fileString)
        .catch(() => {
          this.$bvToast.toast(`${this.splitsID} is not a valid ID`, {
              title: 'Invalid ID',
              autoHideDelay: 5000,
              appendToast: false,
              variant: 'danger'
          });
        })
    );
  }

  @Watch('widthValue')
  panelWidthStore() {
    localStorage.setItem('widthValue', JSON.stringify(this.widthValue));
  }

  @Watch('fileInput')
  splitFileSet(newFileInputVal: File) {
    newFileInputVal.text().then(t => this.splitFile = t);
  }

  @Watch('splitFile')
  fileChange(newVal: string) {
    withLoad(() => {
      // Not very elegant, but efficient and decently fast
      store.state.hasGameTime = newVal.includes('<GameTime>');

      return offload(OffloadWorkerOperation.XML_PARSE_TEXT, newVal)
      .then((parsedSplits: SplitFile) => {
        store.state.useRealTime = !store.state.hasGameTime;
        this.parsedSplits       = parsedSplits;

        if (this.$matomo)
          this.$matomo.trackEvent('SplitFile', 'SplitFile load', parsedSplits.Run.GameName);

        splitFileIsModified(false);
      })
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
    store.state.autoSplitterSettings = newVal;
  }

  @Watch('parsedSplits', {deep: true})
  onSplitFileLoad(newVal: SplitFile) {
    offload(OffloadWorkerOperation.GET_PB, newVal.Run.AttemptHistory).then(PB => store.state.PB = PB);
  }

  created() {
    GlobalEventEmitter.$on('startLoading', (callback: () => any) => this.$refs.loadingModal.runCallback(callback));
    GlobalEventEmitter.$on('openModal', (modal: string, args: Record<string, any> = {}) => {
      withLoad(() => new Promise<void>(resolve => {
        this.modalArgs         = args;
        // This needs to be an attribute because if it's a getter it gets cached way too aggressively
        this.componentInstance = () => import(`~/components/modals/${modal}`);
        this.$nextTick(resolve);
      }));
    });
    GlobalEventEmitter.$on('closeModal', () => this.componentInstance = null);
    GlobalEventEmitter.$on('openConfirm', (text: string, callback: Function) => {
      this.confirmCallback = callback;
      this.confirmMessage  = text;
    });
    GlobalEventEmitter.$on('closeConfirm', () => {
      this.confirmMessage  = '';
      this.confirmCallback = null;
    });

    const savedWidthValue = localStorage.getItem('widthValue');
    if (savedWidthValue) {
      this.widthValue = JSON.parse(savedWidthValue);
    } else {
      this.widthValue = window.innerWidth > 1400 ? 0 : 1;
    }
  }
}
</script>

<style scoped lang="scss">
main {
  min-height: calc(100vh - 3.5rem);
}

footer {
  line-height: 3.5rem;
  font-weight: 300;
}

.webcretaire-color {
  color: #09B876;
  background-image: linear-gradient(90deg, #09B876, #8AC951);
}

.username-gradient {
  background-clip: text;
  background-size: 100%;
  background-repeat: no-repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-decoration: none !important;

  &:hover {
    text-decoration: underline !important;
  }
}

.logo {
  height: 15rem;
  max-height: 50vh;
  filter: drop-shadow(0 0 0.5rem black);
  transition: all 0.5s;
}

.logo-small {
  height: 8rem;
  max-height: 30vh;
}
</style>
