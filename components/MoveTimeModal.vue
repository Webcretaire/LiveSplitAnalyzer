<template>
  <b-modal :ref="modalRef" title="Move time between splits" @hidden="destroyModal" hide-footer centered size="lg">
    <div class="text-center" style="max-height: 80vh; overflow: auto">
      <b-row>
        <b-col>
          Transfer time to:
        </b-col>
        <b-col cols=10>
          <multiselect v-model="transferSplitName" :options="splitOptions" placeholder="Pick a split" class="mb-4"/>
        </b-col>
      </b-row>
      <time-selector v-model="transferTime"/>
      <div v-b-tooltip.hover :title="invalidTimeTooltip">
        <b-button @click="chosenSplitFunction" variant="success" class="mt-2 mb-2 text-center" :disabled="!timeValid">
          Confirm
        </b-button>
      </div>
    </div>
  </b-modal>
</template>

<script lang="ts">
import {
  secondsToFormattedString,
  secondsToLivesplitFormat,
  stringTimeToSeconds
}                                        from '~/util/durations';
import {splitFileIsModified, selectTime} from '~/util/splits';
import {Component, Prop, mixins}         from 'nuxt-property-decorator';
import BaseModal                         from '~/components/BaseModal.vue';
import Multiselect                       from 'vue-multiselect';
import {whithLoad}                       from '~/util/loading';
import store                             from '~/util/store';

@Component({components: {Multiselect}})
export default class MoveTimeModal extends mixins(BaseModal) {
  modalRef: string = 'MoveTimeModal';

  transferTime: number = 0;

  transferSplitName: string = "";

  @Prop()
  currentSplitIndex!: number;

  get segmentGold() {
    const gold = selectTime(this.currentSplit?.BestSegmentTime);
    return stringTimeToSeconds(gold || "0.0.0.0");
  }

  get splitOptions() {
    if (this.currentSplitIndex == 0)
      return [this.nextSplit?.Name];

    const lastSplitIndex = (store.state.splitFile?.Run.Segments.Segment.length  || 0) - 1;
    if (this.currentSplitIndex == lastSplitIndex)
      return [this.previousSplit?.Name];

    return [this.previousSplit?.Name, this.nextSplit?.Name];
  }

  get timeValid() {
    if (this.transferTime == 0 || this.transferTime > this.segmentGold || this.transferSplitName == '') {
      return false;
    }

    return true;
  }

  get invalidTimeTooltip() {
    if (this.transferTime == 0)
      return 'You must add a time.';

    if (this.transferSplitName == '')
      return 'You need select a split to transfer to.';

    if (this.transferTime > this.segmentGold)
      return `You cannot transfer more than ${secondsToFormattedString(this.segmentGold)}.`

    return "";
  }

  get currentSplit() {
    return store.state.splitFile?.Run.Segments.Segment[this.currentSplitIndex];
  }

  get nextSplit() {
    return store.state.splitFile?.Run.Segments.Segment[this.currentSplitIndex + 1];
  }

  get previousSplit() {
    return store.state.splitFile?.Run.Segments.Segment[this.currentSplitIndex - 1];
  }

  get chosenSplitFunction() {
    if (this.transferSplitName === this.nextSplit?.Name)
      return () => this.moveTimeNext();
    
    if (this.transferSplitName === this.previousSplit?.Name)
      return () => this.moveTimePrevious();
  }

  moveTimePrevious() {
    whithLoad(() => {
      const currentSplitTimes = this.currentSplit?.SegmentHistory?.Time;
      const previousSplitTimes = this.previousSplit?.SegmentHistory?.Time;
      const hasGameTime = store.state.hasGameTime;

      let currentSplitGold = this.currentSplit?.BestSegmentTime;
      let previousSplitGold = this.previousSplit?.BestSegmentTime;

      this.currentSplit.BestSegmentTime.RealTime = secondsToLivesplitFormat(stringTimeToSeconds(currentSplitGold?.RealTime || "0.0.0.0") - this.transferTime);
      this.previousSplit.BestSegmentTime.RealTime = secondsToLivesplitFormat(stringTimeToSeconds(previousSplitGold?.RealTime || "0.0.0.0") + this.transferTime);
      if (hasGameTime) {
        this.currentSplit.BestSegmentTime.GameTime = secondsToLivesplitFormat(stringTimeToSeconds(currentSplitGold?.GameTime || "0.0.0.0") - this.transferTime);
        this.previousSplit.BestSegmentTime.GameTime = secondsToLivesplitFormat(stringTimeToSeconds(previousSplitGold?.GameTime || "0.0.0.0") + this.transferTime);
      }

      previousSplitTimes?.forEach((attemptPreviousSplit) => {
        const attemptCurrentSplit = previousSplitTimes?.find(t => t['@_id'] === attemptPreviousSplit['@_id']);

        attemptPreviousSplit.RealTime = secondsToLivesplitFormat(stringTimeToSeconds(attemptPreviousSplit.RealTime || "0.0.0.0") + this.transferTime);
        if (hasGameTime)
          attemptPreviousSplit.GameTime = secondsToLivesplitFormat(stringTimeToSeconds(attemptPreviousSplit.GameTime || "0.0.0.0") + this.transferTime);

        if (attemptCurrentSplit) {
          attemptCurrentSplit.RealTime = secondsToLivesplitFormat(stringTimeToSeconds(attemptCurrentSplit.RealTime || "0.0.0.0") - this.transferTime);
          if (hasGameTime)
            attemptCurrentSplit.GameTime = secondsToLivesplitFormat(stringTimeToSeconds(attemptCurrentSplit.GameTime || "0.0.0.0") - this.transferTime);
        }
      });
      splitFileIsModified(true);
    });
    this.destroyModal();
  }

  moveTimeNext() {
    whithLoad(() => {
      const currentSplitTimes = this.currentSplit?.SegmentHistory?.Time;
      const nextSplitTimes = this.nextSplit?.SegmentHistory?.Time;
      const hasGameTime = store.state.hasGameTime;

      let currentSplitGold = this.currentSplit?.BestSegmentTime;
      let nextSplitGold = this.nextSplit?.BestSegmentTime;

      this.currentSplit.BestSegmentTime.RealTime = secondsToLivesplitFormat(stringTimeToSeconds(currentSplitGold?.RealTime || "0.0.0.0") - this.transferTime);
      this.nextSplit.BestSegmentTime.RealTime = secondsToLivesplitFormat(stringTimeToSeconds(nextSplitGold?.RealTime || "0.0.0.0") + this.transferTime);
      if (hasGameTime) {
        this.currentSplit.BestSegmentTime.GameTime = secondsToLivesplitFormat(stringTimeToSeconds(currentSplitGold?.GameTime || "0.0.0.0") - this.transferTime);
        this.nextSplit.BestSegmentTime.GameTime = secondsToLivesplitFormat(stringTimeToSeconds(nextSplitGold?.GameTime || "0.0.0.0") + this.transferTime);
      }

      currentSplitTimes?.forEach((attemptCurrentSplit) => {
        const attemptNextSplit = nextSplitTimes?.find(t => t['@_id'] === attemptCurrentSplit['@_id']);

        attemptCurrentSplit.RealTime = secondsToLivesplitFormat(stringTimeToSeconds(attemptCurrentSplit.RealTime || "0.0.0.0") - this.transferTime);
        if (hasGameTime)
          attemptCurrentSplit.GameTime = secondsToLivesplitFormat(stringTimeToSeconds(attemptCurrentSplit.GameTime || "0.0.0.0") - this.transferTime);

        if (attemptNextSplit) {
          attemptNextSplit.RealTime = secondsToLivesplitFormat(stringTimeToSeconds(attemptNextSplit.RealTime || "0.0.0.0") + this.transferTime);
          if (hasGameTime)
            attemptNextSplit.GameTime = secondsToLivesplitFormat(stringTimeToSeconds(attemptNextSplit.GameTime || "0.0.0.0") + this.transferTime);
        }
      });
      splitFileIsModified(true);
    });
    this.destroyModal();
  }
}
</script>