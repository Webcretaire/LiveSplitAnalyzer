<template>
  <div class="text-center">
    <main>
      <h1 class="mt-4">LiveSplit Analyzer</h1>
      <p>For now this only extracts PNG icons and best times from splits, but hopefully in the future it does more</p>
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
      </a>. It's source code is available on
      <a href="https://github.com/Webcretaire/LiveSplitAnalyzer" class="text-white font-weight-normal" target="_blank">GitHub</a>
    </footer>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'nuxt-property-decorator';

@Component
export default class IndexPage extends Vue {
};
</script>

<style scoped lang="scss">
main {
  min-height: calc(100vh - 4rem);
}

footer {
  opacity: 0.75;
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
