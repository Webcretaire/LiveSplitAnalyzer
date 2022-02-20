<template>
  <div class="text-center">
    <h1 class="mt-3">LiveSplit Analyzer</h1>
    <p>For now this only extracts PNG icons from splits, but hopefully in the future it does more</p>
    <SplitsDisplay/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'IndexPage'
});
</script>

<style scoped lang="scss">
h1 {
  font-family: "Roboto Thin", Arial, sans-serif;
}
</style>
