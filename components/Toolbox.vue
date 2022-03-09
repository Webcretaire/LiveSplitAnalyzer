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
      <b-button variant="success" @click="downloadSplits">
        <font-awesome-icon icon="floppy-disk"/>
        Download splits
      </b-button>
    </p>
  </collapsible-card>
</template>

<script lang="ts">
// Ignore TS errors for libs with no types
import {Vue, Component, Prop}                               from 'nuxt-property-decorator';
import {Attempt, Segment, selectTime, SplitFile, SplitTime} from '~/util/splits';
import {xmlBuilder}                                         from '~/util/xml';
import {secondsToLivesplitFormat, stringTimeToSeconds}      from '~/util/durations';
import {whithLoad}                                          from '~/util/loading';

@Component
export default class Toolbox extends Vue {
  @Prop()
  value!: SplitFile;

  visible: boolean = false;

  get splits() {
    return this.value.Run.Segments.Segment;
  }

  reconstructAttemptTime(id: number) {
    return this.splits.reduce((curTime: number, s: Segment) => {
      const time = selectTime(s.SegmentHistory.Time.find(t => t['@_id'] == id));
      if (!time) return curTime;
      return stringTimeToSeconds(time) + curTime;
    }, 0);
  }

  get pbFromSplitHistory(): Attempt | undefined {
    const completedRunsTimes = this.splits[this.splits.length - 1].SegmentHistory.Time.map(
      t => ({
        id: t['@_id'],
        time: this.reconstructAttemptTime(t['@_id'])
      })
    );

    let currentPBtime = stringTimeToSeconds('999:59:59.99');
    let currentPBid   = 0;
    completedRunsTimes.map(({id, time}) => {
      if (id > 0 && time < currentPBtime) {
        currentPBtime = time;
        currentPBid   = id;
      }
    });

    return this.value.Run.AttemptHistory.Attempt.find(a => a['@_id'] == currentPBid);
  }

  get pbFromAttemptHistory(): Attempt | undefined {
    let currentPBtime = stringTimeToSeconds('999:59:59.99');
    let currentPBattempt;
    this.value.Run.AttemptHistory.Attempt.map(a => {
      if (a['@_id'] <= 0) return;

      const t = selectTime(a);
      if (!t) return;

      const seconds = stringTimeToSeconds(t);
      if (seconds > 1 && seconds < currentPBtime) {
        currentPBtime    = seconds;
        currentPBattempt = a;
      }
    });

    return currentPBattempt;
  }

  fixPB() {
    whithLoad(() => {
      const realPB = this.pbFromAttemptHistory || this.pbFromSplitHistory;
      const id     = realPB?.['@_id'];
      if (!id) {
        console.error('Couldn\'t find a PB in your splits, did you finish a run?');
        return;
      }
      let timeSoFar = {RealTime: 0, GameTime: 0};
      for (let i = 0; i < this.value.Run.Segments.Segment.length; ++i) {
        const st                 = this.splits[i].SplitTimes.SplitTime || [];
        const times: SplitTime[] = Array.isArray(st) ? st : [st];
        const realPBTime         = this.splits[i].SegmentHistory.Time.find(t => t['@_id'] == realPB?.['@_id']);
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

  downloadSplits() {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:binary/octet-stream,' + encodeURIComponent(xmlBuilder.build(this.value)));
    element.setAttribute('download', 'splits.lss');

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }
};
</script>
