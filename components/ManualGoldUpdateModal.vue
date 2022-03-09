<template>
  <b-modal :ref="modalRef" title="Fix golds" class="text-center" @hidden="destroyModal" hide-footer centered size="lg">
    <div v-if="split" class="text-center" style="max-height: 80vh; overflow: auto">
      <h2>Best attempts for split <em>{{ split.Name }}</em></h2>
      <div v-for="(attempt, key) in history" :key="`split-attempt-${key}`">
        <h3>{{ formatTime(attempt) }}
          <b-button pill variant="danger" size="sm" @click="deleteAttempt(attempt)" v-b-tooltip:hover
                    title="Delete this attempt">
            <font-awesome-icon icon="trash"/>
          </b-button>
        </h3>
      </div>
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

@Component({mixins: [BaseModal]})
export default class ManualGoldUpdateModal extends Vue {
  modalRef: string = 'ManualGoldUpdateModal';

  split: Segment | null = null;

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
    // Delete split in attempts
    if (this.split?.SegmentHistory.Time)
      this.split.SegmentHistory.Time = this.split.SegmentHistory.Time.filter(a => a['@_id'] != attempt['@_id']);

    if (!this.split?.BestSegmentTime) return;

    // Update actual gold
    if (this.history[0].RealTime)
      this.split.BestSegmentTime = {RealTime: this.history[0].RealTime};
    if (this.history[0].GameTime)
      this.split.BestSegmentTime.GameTime = this.history[0].GameTime;
  }

  created() {
    if (singleSplitState.currentSplit)
      this.split = singleSplitState.currentSplit;
    GlobalEventEmitter.$on('setCurrentSplit', (split: Segment) => this.split = split);
  }
};
</script>
