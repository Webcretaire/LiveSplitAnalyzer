<template>
  <b-modal :ref="modalRef" title="Move time between splits" @hidden="destroyModal" hide-footer centered size="lg">
    <div class="text-center">
      <b-form-group label="Transfer time to:">
        <multiselect v-model="transferSplit" :options="splitOptions" placeholder="Pick a split" track-by="id" label="name"/>
      </b-form-group>
      <b-form-group label="Amount to transfer:">
        <time-selector v-model="transferTime"/>
      </b-form-group>
      <div v-b-tooltip.hover :title="invalidTimeTooltip" class="d-inline-block">
        <b-button @click="chosenSplitFunction" variant="success" class="mt-2 mb-2 text-center" :disabled="!timeValid">
          Confirm
        </b-button>
      </div>
    </div>
  </b-modal>
</template>

<script lang="ts">
import {secondsToFormattedString, stringTimeToSeconds} from '~/util/durations';
import {splitFileIsModified, selectTime, Segment}      from '~/util/splits';
import {Component, Prop, mixins}                       from 'nuxt-property-decorator';
import {withLoadAsync}                                 from '~/util/loading';
import {offload}                                       from '~/util/offloadWorker';
import {OffloadWorkerOperation}                        from '~/util/offloadworkerTypes';
import BaseModal                                       from '~/components/BaseModal.vue';
import Multiselect                                     from 'vue-multiselect';

interface TransferSplitOption {
  id: number,
  name: string
}

@Component({components: {Multiselect}})
export default class MoveTimeModal extends mixins(BaseModal) {
  modalRef: string = 'MoveTimeModal';

  transferTime: number = 0;

  transferSplit: TransferSplitOption = {id: -1, name: ''};

  @Prop()
  splits!: Segment[];

  @Prop()
  currentSplitIndex!: number;

  get segmentGold() {
    const gold = selectTime(this.currentSplit.BestSegmentTime);
    return stringTimeToSeconds(gold || '0:0:0.0');
  }

  get splitOptions() {
    const nextSplitOption = {name: `(next) ${this.nextSplit?.Name}`, id: this.currentSplitIndex + 1};
    const previousSplitOption = {name: `(prev) ${this.previousSplit?.Name}`, id: this.currentSplitIndex - 1};

    if (this.currentSplitIndex == 0)
      return [nextSplitOption];

    const lastSplitIndex = this.splits.length - 1;
    if (this.currentSplitIndex == lastSplitIndex)
      return [previousSplitOption];

    return [previousSplitOption, nextSplitOption];
  }

  get timeValid() {
    return this.transferTime > 0 && this.transferTime <= this.segmentGold && this.transferSplit.id >= 0;
  }

  get invalidTimeTooltip() {
    if (this.transferTime == 0)
      return 'Please provide a time';

    if (this.transferSplit.id < 0)
      return 'Please select a split to transfer time to';

    if (this.transferTime > this.segmentGold)
      return `You cannot transfer more than ${secondsToFormattedString(this.segmentGold)}`;

    return '';
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
    if (this.transferSplit.id === this.currentSplitIndex + 1)
      this.doMoveTime(this.currentSplit, this.nextSplit);

    if (this.transferSplit.id === this.currentSplitIndex - 1)
      this.doMoveTime(this.currentSplit, this.previousSplit);
  }

  doMoveTime(currentSplit: Segment, otherSplit: Segment) {
    withLoadAsync((endLoad: Function) => {
      offload(
        OffloadWorkerOperation.MOVE_TIME_TO_OTHER_SPLIT,
        currentSplit,
        otherSplit,
        this.transferTime
      ).then(modifiedSplits => {
        splitFileIsModified(true);

        Object.assign(currentSplit, modifiedSplits[0]);
        Object.assign(otherSplit, modifiedSplits[1]);

        this.$bvToast.toast(
          `Moved ${secondsToFormattedString(this.transferTime)} from ${currentSplit.Name} to ${otherSplit.Name}`,
          {
            title: 'Times changed',
            autoHideDelay: 5000,
            appendToast: false,
            variant: 'success'
          }
        );
      }).finally(() => endLoad());
    });
    this.destroyModal();
  }
}
</script>
