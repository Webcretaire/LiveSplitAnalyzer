<template>
  <b-modal :ref="modalRef" title="Fix golds" class="text-center" @hidden="destroyModal" hide-footer centered size="lg">
    <div v-if="split" class="text-center" style="max-height: 80vh; overflow: auto">
      <h3 class="mb-3">Best attempts for split <em>{{ split.Name }}</em></h3>
      <b-table small :fields="fields" :items="history" responsive="sm">
        <template #cell(time)="data">
          {{ formatTime(data.item) }}
        </template>
        <template #cell(actions)="data">
          <b-button pill variant="danger" size="sm" @click="deleteAttempt(data.item)" v-b-tooltip:hover
                    title="Delete this attempt">
            <font-awesome-icon icon="trash"/>
          </b-button>
        </template>
      </b-table>
    </div>
  </b-modal>
</template>

<script lang="ts">
import {Component, Vue}                          from 'nuxt-property-decorator';
import {BModal}                                  from 'bootstrap-vue';
import BaseModal                                 from '~/components/BaseModal.vue';
import {Segment, SegmentHistoryTime, selectTime} from '~/util/splits';
import {GlobalEventEmitter}                      from '~/util/globalEvents';
import {singleSplitState}                        from '~/util/singleSplit';
import {formatTime, stringTimeToSeconds}         from '~/util/durations';
import {whithLoadAsync}                          from '~/util/loading';

@Component({mixins: [BaseModal]})
export default class ManualGoldUpdateModal extends Vue {
  modalRef: string = 'ManualGoldUpdateModal';

  split: Segment | null = null;

  fields = [
    {key: '@_id', label: 'Attempt #'},
    {key: 'time', label: 'Time'},
    {key: 'actions', label: 'Actions'}
  ];

  get history() {
    return [...this.split?.SegmentHistory.Time || []] // Make a copy otherwise sort acts in place and messes up the whole page
      .filter(t => selectTime(t))
      .sort((t1, t2) => {
        const t1s = selectTime(t1);
        const t2s = selectTime(t2);

        return stringTimeToSeconds(t1s!) - stringTimeToSeconds(t2s!);
      });
  }

  formatTime(attempt: SegmentHistoryTime) {
    return formatTime(selectTime(attempt) || '00:00:00.000000');
  }

  deleteAttempt(attempt: SegmentHistoryTime) {
    whithLoadAsync((endLoad: Function) => {
      // Delete split in attempts
      if (this.split?.SegmentHistory.Time)
        this.split.SegmentHistory.Time = this.split.SegmentHistory.Time.filter(a => a['@_id'] != attempt['@_id']);

      if (!this.split?.BestSegmentTime) return;

      // Update actual gold
      if (this.history[0].RealTime)
        this.split.BestSegmentTime = {RealTime: this.history[0].RealTime};
      if (this.history[0].GameTime)
        this.split.BestSegmentTime.GameTime = this.history[0].GameTime;

      this.$nextTick(() => {
        endLoad();

        this.$bvToast.toast(`Attempt #${attempt['@_id']} has been deleted`, {
          title: this.split?.Name,
          autoHideDelay: 5000,
          appendToast: false,
          variant: 'success'
        });
      });
    });
  }

  created() {
    if (singleSplitState.currentSplit)
      this.split = singleSplitState.currentSplit;
    GlobalEventEmitter.$on('setCurrentSplit', (split: Segment) => this.split = split);
  }
};
</script>

<style scoped lang="scss">
em {
  text-decoration: underline;
}
</style>
