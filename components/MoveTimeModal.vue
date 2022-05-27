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
import {splitFileIsModified, selectTime, Segment, OptionalRealAndGameTime} from '~/util/splits';
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
  splits!: Segment[];

  @Prop()
  currentSplitIndex!: number;

  get segmentGold() {
    const gold = selectTime(this.currentSplit.BestSegmentTime);
    return stringTimeToSeconds(gold || "0.0.0.0");
  }

  get splitOptions() {
    if (this.currentSplitIndex == 0)
      return [this.nextSplit.Name];

    const lastSplitIndex = this.splits.length - 1;
    if (this.currentSplitIndex == lastSplitIndex)
      return [this.previousSplit.Name];

    return [this.previousSplit.Name, this.nextSplit.Name];
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
    return this.splits[this.currentSplitIndex];
  }

  get nextSplit() {
    return this.splits[this.currentSplitIndex + 1];
  }

  get previousSplit() {
    return this.splits[this.currentSplitIndex - 1];
  }

  get chosenSplitFunction() {
    if (this.transferSplitName === this.nextSplit?.Name)
      return () => this.moveTimeNext();
    
    if (this.transferSplitName === this.previousSplit?.Name)
      return () => this.moveTimePrevious();
  }

  moveTransferTime(chosenTime: OptionalRealAndGameTime, isCurrentSplit: boolean) {
    let transferTime = this.transferTime;
    if (isCurrentSplit)
      transferTime = -transferTime;

    const newRealTime = stringTimeToSeconds(chosenTime.RealTime || "0.0.0.0") + transferTime;
    chosenTime.RealTime = secondsToLivesplitFormat(newRealTime);

    if (store.state.hasGameTime) {
      const newGameTime = stringTimeToSeconds(chosenTime?.GameTime || "0.0.0.0") + transferTime;
      chosenTime.GameTime = secondsToLivesplitFormat(newGameTime);
    }
  }

  moveTimePrevious() {
    whithLoad(() => {
      const currentSplitTimes = this.currentSplit.SegmentHistory?.Time;
      const previousSplitTimes = this.previousSplit.SegmentHistory?.Time;

      this.moveTransferTime(this.currentSplit.BestSegmentTime, true);
      this.moveTransferTime(this.previousSplit.BestSegmentTime, false);

      previousSplitTimes?.forEach((attemptPreviousSplit) => {
        const attemptCurrentSplit = currentSplitTimes?.find(t => t['@_id'] === attemptPreviousSplit['@_id']);
        this.moveTransferTime(attemptPreviousSplit, false);
        if (attemptCurrentSplit)
          this.moveTransferTime(attemptCurrentSplit, true);
      });
      splitFileIsModified(true);
    });
    this.destroyModal();
  }

  moveTimeNext() {
    whithLoad(() => {
      const currentSplitTimes = this.currentSplit.SegmentHistory?.Time;
      const nextSplitTimes = this.nextSplit.SegmentHistory?.Time;

      this.moveTransferTime(this.currentSplit.BestSegmentTime, true);
      this.moveTransferTime(this.nextSplit.BestSegmentTime, false);

      currentSplitTimes?.forEach((attemptCurrentSplit) => {
        const attemptNextSplit = nextSplitTimes?.find(t => t['@_id'] === attemptCurrentSplit['@_id']);
        this.moveTransferTime(attemptCurrentSplit, true);
        if (attemptNextSplit)
          this.moveTransferTime(attemptNextSplit, false);
      });
      splitFileIsModified(true);
    });
    this.destroyModal();
  }
}
</script>