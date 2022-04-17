<template>
  <b-card :title="title" class="mb-4">
    <b-button v-b-toggle="id" class="toggle-collapse" variant="outline-secondary" pill>
      <font-awesome-icon icon="chevron-left" :rotation="visible ? 270 : null"/>
    </b-button>
    <b-collapse v-model="visible" :id="id">
      <div v-if="visible || !lazy">
        <slot/>
      </div>
    </b-collapse>
  </b-card>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'nuxt-property-decorator';

@Component
export default class CollapsibleCard extends Vue {
  visible: boolean = false;

  id: string = 'collapse-xxxx';

  @Prop()
  title!: string;

  @Prop({default: false})
  startsOpen!: boolean;

  @Prop({default: true})
  lazy!: boolean;

  created() {
    this.visible = this.startsOpen;
  }

  mounted() {
    this.id = `collapse-${Math.floor(Math.random() * 10000)}`;
  }
}
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
