<template>
  <b-modal :ref="modalRef" title="Move time between splits" class="text-center" @hidden="destroyModal" hide-footer centered size="lg">
    <div class="text-center" style="max-height: 80vh; overflow: auto">
      <h4>Time to move from {{ currentSplit.Name }} to {{ nextSplit.Name }}:</h4>
      <time-selector v-model="transferTime"/>
      <div v-b-tooltip.hover :title="invalidTimeTooltip">
        <b-button @click="moveTime" variant="success" class="mt-2 mb-1" :disabled="!timeValid">
          Confirm
        </b-button>
      </div>
    </div>
  </b-modal>
</template>

<script lang="ts">
import {Segments, splitFileIsModified, selectTime} from '~/util/splits';
import {Component, Prop, mixins}       from 'nuxt-property-decorator';
import BaseModal                       from '~/components/BaseModal.vue';
import {whithLoad}                     from '~/util/loading';
import store                           from '~/util/store';
import { secondsToLivesplitFormat, stringTimeToSeconds } from '~/util/durations';

@Component
export default class MoveTimeModal extends mixins(BaseModal) {
  modalRef: string = 'MoveTimeModal';

  transferTime: number = 0;

  @Prop()
  currentSplitIndex!: number;

  get segmentGold() {
    const gold = selectTime(this.currentSplit?.BestSegmentTime);
    return stringTimeToSeconds(gold || "0.0.0.0");
  }

  get timeValid() {
    if (this.transferTime == 0 || this.transferTime > this.segmentGold) {
      return false;
    }

    return true;
  }

  get invalidTimeTooltip() {
    if (this.transferTime == 0) {
      return "You must add a time.";
    }

    if (this.transferTime > this.segmentGold) {
      return `You cannot transfer more than ${this.segmentGold} seconds.`
    }

    return "";
  }

  get currentSplit() {
    return store.state.splitFile?.Run.Segments.Segment[this.currentSplitIndex];
  }

  get nextSplit() {
    return store.state.splitFile?.Run.Segments.Segment[this.currentSplitIndex + 1];
  }

  moveTime() {
    whithLoad(() => {
      const currentSplitTimes = this.currentSplit?.SegmentHistory?.Time;
      const nextSplitTimes = this.nextSplit?.SegmentHistory?.Time;

      currentSplitTimes?.forEach((currentSplit) => {
        const nextSplit = nextSplitTimes?.find(t => t['@_id'] === currentSplit['@_id']);

        if (nextSplit) {
          if(currentSplit.RealTime && nextSplit.RealTime) {
            let currentRealTime = stringTimeToSeconds(currentSplit.RealTime);
            let nextRealTime = stringTimeToSeconds(nextSplit.RealTime);

            currentRealTime -= this.transferTime;
            nextRealTime += this.transferTime;

            currentSplit.RealTime = secondsToLivesplitFormat(currentRealTime);
            nextSplit.RealTime = secondsToLivesplitFormat(currentRealTime);
          }
          if (currentSplit.GameTime && nextSplit.GameTime) {
            let currentGameTime = stringTimeToSeconds(currentSplit.GameTime);
            let nextGameTime = stringTimeToSeconds(nextSplit.GameTime);

            currentGameTime -= this.transferTime;
            nextGameTime += this.transferTime;

            currentSplit.GameTime = secondsToLivesplitFormat(currentGameTime);
            nextSplit.GameTime = secondsToLivesplitFormat(currentGameTime);
          }
        }
      });
      splitFileIsModified(true);
    });
  }
}
</script>