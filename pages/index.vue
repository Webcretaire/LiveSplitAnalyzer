<template>
  <div class="text-center">
    <h1 class="mt-4">LiveSplit Analyzer</h1>
    <p>For now this only extracts PNG icons and best times from splits, but hopefully in the future it does more</p>
    <b-row>
      <b-col cols="12" xl="6" offset-xl="3" lg="10" offset-lg="1">
        <SplitsDisplay/>
      </b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'nuxt-property-decorator';

@Component
export default class IndexPage extends Vue {
};
</script>
