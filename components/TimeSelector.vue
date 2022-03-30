<template>
  <b-form inline class="time-form">
    <b-row>
      <b-col class="column" cols="4">
        <b-input-group append="h">
          <b-form-input v-model.number="hours" placeholder="Hours" type="number" step="1" @change="onInputChange"/>
        </b-input-group>
      </b-col>
      <b-col class="column" cols="4">
        <b-input-group append="m">
          <b-form-input v-model.number="minutes" placeholder="Minutes" type="number" step="1" @change="onInputChange"/>
        </b-input-group>
      </b-col>
      <b-col class="column" cols="4">
        <b-input-group append="s">
          <b-form-input v-model.number="seconds" placeholder="Seconds" type="number" step="0.01"
                        @change="onInputChange"/>
        </b-input-group>
      </b-col>
    </b-row>
  </b-form>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'nuxt-property-decorator';

@Component
export default class TimeSelector extends Vue {
  @Prop({type: Number})
  value!: number;

  hours: number = 0;

  minutes: number = 0;

  seconds: number = 0;

  get outputInSeconds(): number {
    return 3600 * this.hours + 60 * this.minutes + this.seconds;
  }

  onInputChange() {
    this.$emit('input', this.outputInSeconds);
  }

  mounted() {
    let time = this.value;
    if (time > 3600) {
      this.hours = Math.floor(time / 3600);
      time       = time % 3600;
    }

    if (time > 60) {
      this.minutes = Math.floor(time / 60);
      time         = time % 60;
    }

    this.seconds = +time.toFixed(2);
  }
};
</script>

<style scoped lang="scss">
.column {
  padding-left: 0.25rem;
  padding-right: 0.25rem;
}

.time-form {
  padding-left: 1rem;
  padding-right: 1rem;
}
</style>
