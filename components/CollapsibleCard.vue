<template>
  <b-card :title="title" class="mb-4">
    <b-button v-b-toggle="id" class="toggle-collapse" variant="outline-secondary" pill>
      <font-awesome-icon icon="chevron-left" :rotation="visible ? 270 : null"/>
    </b-button>
    <b-collapse v-model="visible" :id="id">
      <slot v-if="visible || !lazy"/>
    </b-collapse>
  </b-card>
</template>

<script lang="ts">
import {Vue, Component, Prop, Watch} from 'nuxt-property-decorator';

@Component
export default class CollapsibleCard extends Vue {
  @Prop()
  value!: boolean;

  @Prop()
  title!: string;

  @Prop({default: false})
  startsOpen!: boolean;

  @Prop({default: true})
  lazy!: boolean;

  visible: boolean = false;

  id: string = 'collapse-xxxx';

  created() {
    this.visible = this.startsOpen;
  }

  @Watch('visible')
  onVisibleUpdate(newVal: boolean) {
    this.$emit('input', newVal);
  }

  @Watch('value', {immediate: true})
  onValueUpdate(newVal: boolean) {
    this.visible = newVal;
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
