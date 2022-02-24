<template>
  <b-card class="text-center" :title="run.GameName + ' - ' + run.CategoryName">
    <b-button v-b-toggle="'collapse-run-overview'" class="toggle-collapse" variant="outline-secondary" pill>
      <font-awesome-icon icon="chevron-left" :rotation="visible ? 270 : null"/>
    </b-button>
    <b-collapse v-model="visible" id="collapse-run-overview" visible>
      <p>{{ run.AttemptCount }} attempts</p>
      <p v-for="m in run.Metadata.Variables.Variable" :key="`metadata-var-${m['@_name']}`" class="m-0">
        <strong>{{ m['@_name'] }}:</strong> {{ m['#text'] }}
      </p>
    </b-collapse>
  </b-card>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'nuxt-property-decorator';
import {Run}                  from '~/util/splits';

@Component
export default class RunOverview extends Vue {
  @Prop()
  run!: Run;

  visible: boolean = true;
};
</script>

<style scoped lang="scss">
* {
  color: black;
}

.toggle-collapse {
  position: absolute;
  right: 1rem;
  top: 1rem;
}
</style>
