<template>
  <collapsible-card title="Toolbox (experimental)">
    <p>
      <b-button variant="info" @click="fixPB">
        <font-awesome-icon icon="screwdriver-wrench"/>
        Fix Personal Best
      </b-button>
      <span v-b-tooltip.hover title="Fix PB split time for each segment, if your PB comparison is currently broken"
            class="help-question">
        <font-awesome-icon icon="circle-question"/>
      </span>
    </p>
    <p>
      <b-button variant="danger" @click="deletePreviousRuns">
        <font-awesome-icon icon="trash"/>
        Delete all attempts before #{{ currentAttemptNumber }}
      </b-button>
      <span v-b-tooltip.hover
            title="Delete all attempts before the currently selected one in options (included). If your PB is in this range it will not be deleted."
            class="help-question">
        <font-awesome-icon icon="circle-question"/>
      </span>
    </p>
  </collapsible-card>
</template>

<script lang="ts">
import {
  Attempt, Run,
  Segment,
  selectTime,
  SplitFile,
  splitFileIsModified,
  SplitTime
}                                                      from '~/util/splits';
import {secondsToLivesplitFormat, stringTimeToSeconds} from '~/util/durations';
import {whithLoad, whithLoadAsync}                     from '~/util/loading';
import {asArray}                                       from '~/util/util';
import {Component, Prop, Vue}                          from 'nuxt-property-decorator';
import {GlobalEventEmitter}                            from '~/util/globalEvents';
import store                                           from '~/util/store';
import {offload}                                       from '~/util/offloadWorker';
import {OffloadWorkerOperation}                        from '~/util/offloadworkerTypes';

@Component
export default class Toolbox extends Vue {
  @Prop()
  value!: SplitFile;

  visible: boolean = false;

  @Prop()
  currentAttemptNumber!: number;

  @Prop()
  pb!: number;

  get splits() {
    return this.value.Run.Segments.Segment;
  }

  reconstructAttemptTime(id: number) {
    return this.splits.reduce((curTime: number, s: Segment) => {
      const time = selectTime(asArray(s.SegmentHistory.Time).find(t => t['@_id'] == id));
      if (!time) return curTime;
      return stringTimeToSeconds(time) + curTime;
    }, 0);
  }

  get allRunAttempts(): Attempt[] {
    return asArray(this.value.Run.AttemptHistory.Attempt);
  }

  get pbFromSplitHistory(): Attempt | undefined {
    const completedRunsTimes = asArray(this.splits[this.splits.length - 1].SegmentHistory.Time).map(
      t => ({
        id: t['@_id'],
        time: this.reconstructAttemptTime(t['@_id'])
      })
    );

    let currentPBtime = stringTimeToSeconds('999:59:59.99');
    let currentPBid   = 0;
    completedRunsTimes.forEach(({id, time}) => {
      if (id > 0 && time < currentPBtime) {
        currentPBtime = time;
        currentPBid   = id;
      }
    });

    return this.allRunAttempts.find(a => a['@_id'] == currentPBid);
  }

  get pbFromAttemptHistory(): Attempt | undefined {
    let currentPBtime = stringTimeToSeconds('999:59:59.99');
    let currentPBattempt;
    this.allRunAttempts.forEach(attempt => {
      if (attempt['@_id'] <= 0) return;

      const t = selectTime(attempt);
      if (!t) return;

      const seconds = stringTimeToSeconds(t);
      if (seconds > 1 && seconds < currentPBtime) {
        currentPBtime    = seconds;
        currentPBattempt = attempt;
      }
    });

    return currentPBattempt;
  }

  fixPB() {
    whithLoad(() => {
      splitFileIsModified(true);

      const realPB = this.pbFromAttemptHistory || this.pbFromSplitHistory;
      const id     = realPB?.['@_id'];
      if (!id) {
        console.error('Couldn\'t find a PB in your splits, did you finish a run?');
        return;
      }
      let timeSoFar = {RealTime: 0, GameTime: 0};
      for (let i = 0; i < this.value.Run.Segments.Segment.length; ++i) {
        const st                 = this.splits[i].SplitTimes.SplitTime || [];
        const times: SplitTime[] = asArray(st);
        const realPBTime         = asArray(this.splits[i].SegmentHistory.Time).find(t => t['@_id'] == realPB?.['@_id']);
        const out                = times.filter(t => t['@_name'] != 'Personal Best'); // Remove pre-existing PB time

        if (realPBTime) {
          if (realPBTime.RealTime)
            timeSoFar.RealTime += stringTimeToSeconds(realPBTime.RealTime);
          if (realPBTime.GameTime)
            timeSoFar.GameTime += stringTimeToSeconds(realPBTime.GameTime);

          const newTime: SplitTime = {
            '@_name': 'Personal Best',
            RealTime: secondsToLivesplitFormat(timeSoFar.RealTime)
          };

          if (realPB?.GameTime)
            newTime.GameTime = secondsToLivesplitFormat(timeSoFar.GameTime);

          out.push(newTime);
        }

        // It appears sometimes PB is so messed up there is no SplitTimes property
        if (!this.value.Run.Segments.Segment[i].SplitTimes)
          this.value.Run.Segments.Segment[i].SplitTimes = {SplitTime: []};

        console.log(this.value.Run.Segments.Segment[i].SplitTimes.SplitTime);

        this.value.Run.Segments.Segment[i].SplitTimes.SplitTime = out;
      }

      this.$emit('input', this.value);

      this.$bvToast.toast(`PB time for each split was updated with run ${realPB?.['@_id']}`, {
        title: 'Splits updated',
        autoHideDelay: 5000,
        appendToast: false,
        variant: 'success'
      });
    });
  }

  deletePreviousRuns() {
    GlobalEventEmitter.$emit('openConfirm', `Delete all attempts before #${this.currentAttemptNumber} included?`, () => {
      whithLoadAsync(
        (endLoad: Function) => offload(
          OffloadWorkerOperation.DELETE_ATTEMPT_BEFORE_NUMBER,
          store.state.splitFile.Run,
          this.pb,
          this.currentAttemptNumber
        ).then((r: Run) => {
          store.state.splitFile.Run              = r;
          store.state.splitFile.Run.AttemptCount = asArray(r.AttemptHistory.Attempt).length;
          endLoad();
        })
      );
    });
  }
}
</script>
