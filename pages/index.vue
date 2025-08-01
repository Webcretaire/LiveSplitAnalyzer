<template>
  <div class="text-center" id="index-wrapper" :style="indexWrapperStyle">
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
            <tabs-container v-if="parsedSplits"
                            :parsed-splits="parsedSplits"
                            :detailed-segments="detailedSegments"
                            :game-cover="gameCover"/>
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
        awesome contributors</a>. Its <a href="https://github.com/Webcretaire/LiveSplitAnalyzer" class="text-white" target="_blank">source code</a> is available on
      <a href="https://github.com/Webcretaire/LiveSplitAnalyzer" class="text-white font-weight-bold" target="_blank">
        GitHub</a>.
    </footer>

    <div class="floating-buttons-holder">
      <global-settings v-if="parsedSplits"/>
      <download-splits v-if="parsedSplits" :parsed-splits="parsedSplits"/>
      <filter-runs v-if="parsedSplits" :parsed-splits="parsedSplits"/>
    </div>

    <component v-if="componentInstance" :is="componentInstance" v-bind="modalArgs"/>
    <loading-modal ref="loadingModal"/>
    <confirm-modal v-if="confirmMessage" :message="confirmMessage" :callback="confirmCallback"/>
  </div>
</template>

<script lang="ts">
import {
  AttemptHistory,
  AutoSplitterSettings,
  Segment,
  SplitFile,
  splitFileIsModified
}                                    from '~/util/splits';
import {GlobalEventEmitter}          from '~/util/globalEvents';
import {withLoad}                    from '~/util/loading';
import store, {SavedSettings, Store} from '~/util/store';
import {offload}                     from '~/util/offloadWorker';
import {OffloadWorkerOperation}      from '~/util/offloadworkerTypes';
import {DetailedSegment}             from '~/util/splitProcessing';
import {Vue, Component, Watch}       from 'nuxt-property-decorator';
import LoadingModal                  from '~/components/modals/LoadingModal.vue';
import {ImageExtractor}              from '~/util/imageExtractor';

@Component
export default class IndexPage extends Vue {
  $refs!: {
    loadingModal: LoadingModal
  };

  componentInstance: Function | null = null;

  modalArgs: Record<string, any> = {};

  confirmMessage: string = '';

  confirmCallback: Function | null = null;

  fileInput: File | null = null;

  splitFile: string | null = null;

  parsedSplits: SplitFile | null = null;

  detailedSegments: DetailedSegment[] = [];

  globalState: Store = store.state;

  gameCover: string = '';

  get widthValue() {
    return this.globalState.savedSettings.pageWidth === undefined ? 3 : this.globalState.savedSettings.pageWidth;
  }

  get panelSize() {
    return (12 - (2 * this.panelOffset));
  }

  get panelOffset() {
    return (0 - (this.widthValue - 3));
  }

  get logoClasses() {
    return this.parsedSplits ? ['logo', 'logo-small', 'mt-3', 'mb-2'] : ['logo', 'mt-5', 'mb-4'];
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

  get indexWrapperStyle() {
    return {'--page-hue': this.globalState.savedSettings.pageHue || 0};
  }

  @Watch('parsedSplits.Run.GameName')
  @Watch('parsedSplits.Run.GameIcon')
  coverSource() {
    if (!this.parsedSplits) return;

    this.gameCover = '';

    if (this.parsedSplits.Run.GameIcon)
      this.gameCover = new ImageExtractor(this.parsedSplits.Run.GameIcon).imgSrc;

    if (!this.gameCover) {
      const url = `https://www.speedrun.com/api/v1/games?name=${encodeURIComponent(this.parsedSplits.Run.GameName)}`;
      fetch(url)
        .then(response => {
          if (!response.ok)
            throw Error();

          return response.json();
        })
        .then(data => {
          if (data.data.length == 0)
            throw Error();

          this.gameCover = data.data[0].assets['cover-small'].uri;
        })
        .catch(() => this.gameCover = '');
    }
  }

  @Watch('fileInput')
  splitFileSet(newFileInputVal: File | null) {
    newFileInputVal?.text().then(t => {
      history.replaceState(null, '', '#');

      this.splitFile = t;
    });
  }

  @Watch('splitFile')
  fileChange(newVal: string) {
    withLoad(() => {
      this.globalState.filters = [];
      this.globalState.filteredAttempts = [];

      // Not very elegant, but efficient and decently fast
      store.state.hasGameTime = newVal.includes('<GameTime>');

      return offload(OffloadWorkerOperation.XML_PARSE_TEXT, newVal)
        .then((parsedSplits: SplitFile) => {
          store.state.useRealTime = !store.state.hasGameTime;
          this.parsedSplits       = parsedSplits;

          if (this.$matomo)
            this.$matomo.trackEvent('SplitFile', 'SplitFile load', parsedSplits.Run.GameName);

          splitFileIsModified(false);
        });
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

  @Watch('globalState.savedSettings', {deep: true})
  onSavedSettingsUpdate(newVal: SavedSettings) {
    localStorage.setItem('savedSettings', JSON.stringify(newVal));
  }

  @Watch('parsedSplits.Run.AutoSplitterSettings', {deep: true})
  onAutoSplitterSettingsUpdate(newVal: AutoSplitterSettings) {
    store.state.autoSplitterSettings = newVal;
  }

  @Watch('parsedSplits.Run.AttemptHistory', {deep: true})
  onSplitFileLoad(newVal: AttemptHistory) {
    offload(OffloadWorkerOperation.GET_PB, newVal).then(PB => store.state.PB = PB);
  }

  created() {
    GlobalEventEmitter.$on('startLoading', (callback: () => any) => {
      if (this.$refs.loadingModal)
        this.$refs.loadingModal.runCallback(callback);
      else
        callback();
    });
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

    this.globalState.savedSettings = JSON.parse(localStorage.getItem('savedSettings') || '{}');

    const defaultSettings: SavedSettings = {
      attemptAnalysisMergeSubsplits: false,
      pageWidth: window.innerWidth > 1400 ? 0 : 1,
      pageHue: 230,
      graphCurrentAttemptHline: false,
      graphMedianAttemptHline: false,
      cumulateSplits: false
    };

    Object.keys(defaultSettings).forEach(key => {
      if (this.globalState.savedSettings[key] === undefined)
        Vue.set(this.globalState.savedSettings, key, defaultSettings[key]);
    });
  }
}
</script>

<style scoped lang="scss">
#index-wrapper {
  background-color: hsl(var(--page-hue), 30%, 10%);
  box-shadow: inset 0 0 8rem 1rem black;
}

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

@for $i from 1 through 3 {
  .floating-buttons-holder > :nth-child(#{$i}) {
    position: fixed;
    right: 1rem;
    bottom: calc(1rem + (#{$i} - 1) * 5rem);
    transition: all 500ms;
    width: 4rem;
    height: 4rem;
    font-size: 1.5rem;
    filter: drop-shadow(0 0 0.5rem black);
  }
}
</style>
