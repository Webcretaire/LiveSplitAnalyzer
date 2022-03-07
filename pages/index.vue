<template>
  <div class="text-center">
    <main>
      <h1 class="mt-4">LiveSplit Analyzer</h1>
      <p>This tools extracts data from your split files, to display it into (hopefully) pretty graphs.
        Everything happens in your browser, the split file is not sent on the network.</p>
      <b-row>
        <b-col cols="12" xl="6" offset-xl="3" lg="10" offset-lg="1">
          <SplitsDisplay/>
        </b-col>
      </b-row>
    </main>
    <footer>
      This LiveSplit Analyzer is a tool made by
      <a class="font-weight-normal" href="https://speedrun.com/user/Webcretaire" target="_blank">
        <span class="username"><span class="username-dark username-gradient"
                                     style="color: #09B876; background-image: linear-gradient(90deg, #09B876, #8AC951)">Webcretaire</span></span>
      </a>. Its source code is available on
      <a href="https://github.com/Webcretaire/LiveSplitAnalyzer" class="text-white font-weight-bold" target="_blank">GitHub</a>
    </footer>
    <loading-modal v-if="loading"/>
  </div>
</template>

<script lang="ts">
import {Vue, Component}     from 'nuxt-property-decorator';
import {GlobalEventEmitter} from '~/util/globalEvents';

@Component
export default class IndexPage extends Vue {
  loading: boolean = false;

  created() {
    GlobalEventEmitter.$on('startLoading', () => {
      this.loading = true;
    });
    GlobalEventEmitter.$on('stopLoading', () => {
      this.loading = false;
    });
  }
};
</script>

<style scoped lang="scss">
main {
  min-height: calc(100vh - 4rem);
}

footer {
  font-weight: 300;
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
</style>
