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
import {secondsToFormattedString, secondsToLivesplitFormat, stringTimeToSeconds}  from '~/util/durations';
import {splitFileIsModified, selectTime, Segment, OptionalRealAndGameTime}        from '~/util/splits';
import {Component, Prop, mixins}                                                  from 'nuxt-property-decorator';
import BaseModal                                                                  from '~/components/BaseModal.vue';
import Multiselect                                                                from 'vue-multiselect';
import {whithLoad}                                                                from '~/util/loading';
import store                                                                      from '~/util/store';

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

  chosenSplitFunction() {
    if (this.transferSplitName === this.nextSplit?.Name)
      this.moveTime(this.currentSplit, this.nextSplit);
    
    if (this.transferSplitName === this.previousSplit?.Name)
      this.moveTime(this.currentSplit, this.previousSplit);
  }

  moveTransferTime(chosenTime: OptionalRealAndGameTime, transferTime: number) {
    const newRealTime = stringTimeToSeconds(chosenTime.RealTime || "0.0.0.0") + transferTime;
    chosenTime.RealTime = secondsToLivesplitFormat(newRealTime);

    if (store.state.hasGameTime) {
      const newGameTime = stringTimeToSeconds(chosenTime?.GameTime || "0.0.0.0") + transferTime;
      chosenTime.GameTime = secondsToLivesplitFormat(newGameTime);
    }
  }

  moveTime(currentSplit: Segment, otherSplit: Segment) {
    whithLoad(() => {
      const currentSplitTimes = currentSplit.SegmentHistory?.Time;
      const otherSplitTimes = otherSplit.SegmentHistory?.Time;
      const currentSplitComparisons = currentSplit.SplitTimes.SplitTime;
      const otherSplitComparisons = otherSplit.SplitTimes.SplitTime;

      this.moveTransferTime(currentSplit.BestSegmentTime, -this.transferTime);
      this.moveTransferTime(otherSplit.BestSegmentTime, this.transferTime);

      currentSplitTimes?.forEach((attemptCurrentSplit) => {
        this.moveTransferTime(attemptCurrentSplit, -this.transferTime);
      });

      otherSplitTimes?.forEach((attemptOtherSplit) => {
        this.moveTransferTime(attemptOtherSplit, this.transferTime);
      });

      currentSplitComparisons.forEach((comparison) => {
        this.moveTransferTime(comparison, -this.transferTime);
      });

      otherSplitComparisons?.forEach((comparison) => {
        this.moveTransferTime(comparison, this.transferTime);
      });

      splitFileIsModified(true);
      this.$bvToast.toast(`Moved ${secondsToFormattedString(this.transferTime)} from ${currentSplit.Name} to ${otherSplit.Name}`, {
          title: 'Times changed',
          autoHideDelay: 5000,
          appendToast: false,
          variant: 'success'
      });
    });
    this.destroyModal();
  }
}
</script>