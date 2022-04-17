<template>
  <div class="text-center">
    <main>
      <img :class="logoClasses" src="~/assets/images/logo_flat.png"/>
      <h1 class="mb-3">LiveSplit Analyzer</h1>
      <p>This tool extracts data from your split files, to display it into (hopefully) pretty graphs.
        Everything happens in your browser, the split file is not sent on the network.</p>
      <SplitsDisplay class="mt-4"/>
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
        GitHub
      </a>
    </footer>

    <download-splits v-if="loadedSplitfile"/>

    <component v-if="componentInstance" :is="componentInstance" v-bind="modalArgs"/>
    <loading-modal v-if="loadingCallback" :callback="loadingCallback"/>
    <confirm-modal v-if="confirmMessage" :message="confirmMessage" :callback="confirmCallback"/>
  </div>
</template>

<script lang="ts">
import {Vue, Component}     from 'nuxt-property-decorator';
import {GlobalEventEmitter} from '~/util/globalEvents';
import {whithLoadAsync}     from '~/util/loading';
import store                from '~/util/store';

@Component
export default class IndexPage extends Vue {
  loadingCallback: Function | null = null;

  componentInstance: Function | null = null;

  modalArgs: Record<string, any> = {};

  confirmMessage: string = '';

  confirmCallback: Function | null = null;

  get loadedSplitfile() {
    return store.state.splitFile?.Run != undefined;
  }

  get logoClasses() {
    return this.loadedSplitfile ? ['logo', 'logo-small', 'mt-3', 'mb-2'] : ['logo', 'mt-5', 'mb-4'];
  }

  created() {
    GlobalEventEmitter.$on('startLoading', (callback: Function) => {
      this.loadingCallback = callback;
    });
    GlobalEventEmitter.$on('stopLoading', () => {
      this.loadingCallback = null;
    });
    GlobalEventEmitter.$on('openModal', (modal: string, args: Record<string, any> = {}) => {
      whithLoadAsync((endLoad: Function) => {
        this.modalArgs         = args;
        // This needs to be an attribute because if it's a getter it gets cached way too aggressively
        this.componentInstance = () => import(`~/components/${modal}`);
        this.$nextTick(() => endLoad());
      });
    });
    GlobalEventEmitter.$on('closeModal', () => {
      this.componentInstance = null;
    });
    GlobalEventEmitter.$on('openConfirm', (text: string, callback: Function) => {
      this.confirmCallback = callback;
      this.confirmMessage  = text;
    });
    GlobalEventEmitter.$on('closeConfirm', () => {
      this.confirmMessage  = '';
      this.confirmCallback = null;
    });
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
