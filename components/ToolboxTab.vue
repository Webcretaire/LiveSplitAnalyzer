<template>
  <div>
    <collapsible-card title="Personal Best">
      <b-button variant="info" @click="fixPB" class="mb-2">
        <font-awesome-icon icon="screwdriver-wrench"/>
        Fix Personal Best
      </b-button>
      <p class="m-0">
        Updates the split times for each segment on your Personal Best comparison if they don't match up with those on
        your actual PB attempt.
      </p>
    </collapsible-card>
    <collapsible-card title="Attempt Count">
      <b-button variant="info" :disabled="correctCount" @click="fixAttemptCount" class="mb-2">
        <font-awesome-icon icon="screwdriver-wrench"/>
        Fix Attempt Count
      </b-button>
      <p class="m-0">
        Counts attempts in your Attempt history, and rewrites the value stored in the splitfile if it's incorrect.
      </p>
    </collapsible-card>
    <collapsible-card title="Delete Attempts">
      <attempt-selector v-model="currentAttemptNumber" :attempts="attempts" :use-to-display="false"/>
      <b-button variant="danger" @click="deletePreviousRuns" class="mt-2 mb-2">
        <font-awesome-icon icon="trash"/>
        Delete all attempts up to #{{ currentAttemptNumber }}
      </b-button>
      <p class="m-0">
        Delete all attempts up to and including the currently selected one above. If your PB is in this range it will
        not be deleted.
      </p>
    </collapsible-card>
    <collapsible-card title="Extract Splits">
      <p class="m-0">Extract a subset of splits and download them into their own splitfile.</p>
      <b-row class="mt-4">
        <b-col class="mt-2" cols="3">
          Separate splits from
        </b-col>
        <b-col cols="4">
          <multiselect v-model="extractStartSplit" :options="splitNames" track-by="index" label="label"/>
        </b-col>
        <b-col class="mt-2" cols="1">
          to
        </b-col>
        <b-col cols="4">
          <multiselect v-model="extractEndSplit" :options="splitNames" track-by="index" label="label"/>
        </b-col>
      </b-row>
      <div v-if="validSubset" class="mt-4" v-b-tooltip.hover :title="downloadSplitsLabel">
        <b-button @click="downloadSplits" variant="success">
          <font-awesome-icon icon="floppy-disk"/>
          Download splitfile
        </b-button>
      </div>
    </collapsible-card>
  </div>
</template>

<script lang="ts">
import {
  Attempt,
  Run,
  Segment,
  selectTime,
  SplitFile,
  splitFileIsModified,
  SplitTime
}                                                      from '~/util/splits';
import {secondsToLivesplitFormat, stringTimeToSeconds} from '~/util/durations';
import {withLoad}                                      from '~/util/loading';
import {xmlBuilder, xmlParser}                         from '~/util/xml';
import {Component, Prop, Vue, Watch}                   from 'nuxt-property-decorator';
import {GlobalEventEmitter}                            from '~/util/globalEvents';
import store                                           from '~/util/store';
import {offload}                                       from '~/util/offloadWorker';
import {OffloadWorkerOperation}                        from '~/util/offloadworkerTypes';
import {FilterDetails}                                 from '~/util/filter';
import Multiselect                                     from 'vue-multiselect';
import {asArray}                                       from '~/util/util';

@Component({components: {Multiselect}})
export default class ToolboxTab extends Vue {
  visible: boolean = false;

  @Prop()
  pb!: Attempt | null;

  @Prop()
  parsedSplits!: SplitFile;

  @Prop()
  attempts!: Attempt[];

  currentAttemptNumber: number = 1;

  extractStartSplit: FilterDetails = {label: '', index: -1};

  extractEndSplit: FilterDetails = {label: '', index: -1};

  get splits() {
    return this.parsedSplits.Run.Segments.Segment;
  }

  get splitNames() {
    return this.splits.map((split, index) => ({label: split.Name, index: index}));
  }

  reconstructAttemptTime(id: number) {
    return this.splits.reduce((curTime: number, s: Segment) => {
      const time = selectTime((s.SegmentHistory?.Time || []).find(t => t['@_id'] == id));
      if (!time) return curTime;
      return stringTimeToSeconds(time) + curTime;
    }, 0);
  }

  get allRunAttempts(): Attempt[] {
    return this.parsedSplits.Run.AttemptHistory.Attempt;
  }

  get pbFromSplitHistory(): Attempt | undefined {
    const completedRunsTimes = (this.splits[this.splits.length - 1].SegmentHistory?.Time || []).map(
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

  get correctCount() {
    return this.parsedSplits.Run.AttemptCount == this.allRunAttempts.length;
  }

  get validSubset() {
    if (!this.extractStartSplit.label.length) return false;
    if (!this.extractEndSplit.label.length) return false;

    return this.extractStartSplit.index != this.extractEndSplit.index;
  }

  get newSplits() {
    // Deep copy
    let out: SplitFile = xmlParser.parse(xmlBuilder.build(this.parsedSplits));

    if (!this.validSubset) return out;

    let segments = out.Run.Segments.Segment;

    let removeInitialTime: Segment | null = null;
    if (this.extractStartSplit.index > 0)
      removeInitialTime = segments[this.extractStartSplit.index - 1];

    out.Run.Segments.Segment = [...segments.slice(this.extractStartSplit.index, this.extractEndSplit.index + 1)];

    if (removeInitialTime) {
      out.Run.Segments.Segment = out.Run.Segments.Segment.map(segment => {
        const outSegment                = segment;
        outSegment.SplitTimes.SplitTime = asArray(outSegment.SplitTimes.SplitTime).map(splitTime => {
          const outSplit          = splitTime;
          const matchingSplitTime = asArray(removeInitialTime.SplitTimes.SplitTime).find(st => st['@_name'] === splitTime['@_name']);

          if (outSplit.GameTime && matchingSplitTime?.GameTime)
            outSplit.GameTime = secondsToLivesplitFormat(stringTimeToSeconds(outSplit.GameTime) - stringTimeToSeconds(matchingSplitTime.GameTime));
          if (outSplit.RealTime && matchingSplitTime?.RealTime)
            outSplit.RealTime = secondsToLivesplitFormat(stringTimeToSeconds(outSplit.RealTime) - stringTimeToSeconds(matchingSplitTime.RealTime));

          return outSplit;
        });

        return outSegment;
      });
    }

    return out;
  }

  get downloadSplitsLabel() {
    return `The generated splitfile contains ${this.extractEndSplit.index - this.extractStartSplit.index + 1} splits, from ${this.extractStartSplit.label} to ${this.extractEndSplit.label}`;
  }

  fixPB() {
    withLoad(() => {
      splitFileIsModified(true);

      const realPB = this.pbFromAttemptHistory || this.pbFromSplitHistory;
      const id     = realPB?.['@_id'];
      if (!id) {
        console.error('Couldn\'t find a PB in your splits, did you finish a run?');
        return;
      }
      let timeSoFar = {RealTime: 0, GameTime: 0};
      for (let i = 0; i < this.splits.length; ++i) {
        const times: SplitTime[] = this.splits[i].SplitTimes.SplitTime;
        const realPBTime         = this.splits[i].SegmentHistory!.Time.find(t => t['@_id'] == realPB?.['@_id']);
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
        if (!this.parsedSplits.Run.Segments.Segment[i].SplitTimes)
          this.parsedSplits.Run.Segments.Segment[i].SplitTimes = {SplitTime: []};

        this.parsedSplits.Run.Segments.Segment[i].SplitTimes.SplitTime = out;
      }

      this.$bvToast.toast(`PB time for each split was updated with run ${realPB?.['@_id']}`, {
        title: 'Splits updated',
        autoHideDelay: 5000,
        appendToast: false,
        variant: 'success'
      });
    });
  }

  fixAttemptCount() {
    const oldCount = this.parsedSplits.Run.AttemptCount;
    withLoad(() => {
      this.parsedSplits.Run.AttemptCount = this.allRunAttempts.length;
      splitFileIsModified(true);
    });

    this.$bvToast.toast(`Count updated from ${oldCount} to ${this.allRunAttempts.length} attempts`, {
      title: 'Attempt count fixed',
      autoHideDelay: 5000,
      appendToast: false,
      variant: 'success'
    });
  }

  deletePreviousRuns() {
    GlobalEventEmitter.$emit('openConfirm', `Delete all attempts up to and including #${this.currentAttemptNumber}?`, () => {
      withLoad(
        () => offload(
          OffloadWorkerOperation.DELETE_ATTEMPT_BEFORE_NUMBER,
          this.parsedSplits.Run,
          store.state.PB?.['@_id'],
          this.currentAttemptNumber
        ).then((r: Run) => {
          splitFileIsModified(true);

          this.parsedSplits.Run              = r;
          this.parsedSplits.Run.AttemptCount = r.AttemptHistory.Attempt.length;
        })
      );
    });
  }

  downloadSplits() {
    withLoad(() => {
      let element = document.createElement('a');
      element.setAttribute('download', 'splits.lss');
      element.setAttribute(
        'href',
        `data:binary/octet-stream,${encodeURIComponent(xmlBuilder.build(this.newSplits))}`
      );

      element.style.display = 'none';
      document.body.appendChild(element);

      element.click();

      document.body.removeChild(element);
    });
  }

  @Watch('extractStartSplit')
  @Watch('extractEndSplit')
  swapSplits() {
    if (this.validSubset && this.extractStartSplit.index > this.extractEndSplit.index)
      [this.extractStartSplit, this.extractEndSplit] = [this.extractEndSplit, this.extractStartSplit];
  }
}
</script>
