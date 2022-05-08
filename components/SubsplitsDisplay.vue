<template>
  <div>
    <div v-if="split.Index < 0">
      <b-card :id="`SingleSplitCard_${splitIndex}`" class="SingleSplitCard text-left">
        <div class="limit-height">
          <div class="split-icon-container mr-4 ml-2" v-if="split.Icon">
            <b-card-img :src="split.Icon" class="split-icon" block/>
          </div>
          <div class="mt-auto mb-auto">
            <h3>{{ split.Name }}</h3>
            <p v-if="split.BestSegmentTime" class="m-0">
              <span class="mr-2"><strong>Best time:</strong> {{ bestTimeDisplay }}</span>
            </p>
            <b-button class="toggle-collapse" v-b-toggle="collapseName" variant="outline-dark" pill>
              <font-awesome-icon icon="chevron-left" :rotation="collapseVisible ? 270 : null"/>
            </b-button>
          </div>
        </div>
      </b-card>

      <b-collapse :id="collapseName" class="mt-1" v-model="collapseVisible">
      <b-card class="text-left">
          <Plotly :data="plot_data" :layout="layout" :display-mode-bar="true"/>
      </b-card>
      </b-collapse>

      <div class="pl-4 ml-3 mt-3 subsplit-container">
        <split-display :split="subsplit" 
                    v-for="subsplit in split.Subsplits" 
                    :key="`split-${subsplit.Index}-${subsplit.Name}`"
                    :splitIndex="subsplit.Index"
                    :graphYAxisToZero="graphYAxisToZero"
                    :graphCurrentAttemptHline="graphCurrentAttemptHline"
                    :currentAttemptNumber="currentAttemptNumber"
                    class="mb-3"/>
      </div>
    </div>
    <div v-else>
      <split-display :split="split"
                     :splitIndex="split.Index"
                     :graphYAxisToZero="graphYAxisToZero"
                     :graphCurrentAttemptHline="graphCurrentAttemptHline"
                     :currentAttemptNumber="currentAttemptNumber"
                     class="mb-3"/>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue, Watch}               from 'nuxt-property-decorator';
import {SegmentHistoryTime, selectTime}            from '~/util/splits';
import {formatTime, stringTimeToSeconds}           from '~/util/durations';
import {GOLD_COLOR, LINE_COLOR, CUR_ATTEMPT_COLOR} from '~/util/plot';
import {XYCoordinates}                             from '~/util/util';
import store                                       from '~/util/store';
import {offload}                                   from '~/util/offloadWorker';
import {OffloadWorkerOperation}                    from '~/util/offloadworkerTypes';
import {DetailedSegment}                           from '~/util/splitProcessing';
// Plotly doesn't seem to have TS types available anywhere so we need to ignore the errors
// @ts-ignore
import {Plotly}                                    from 'vue-plotly';

@Component({components: {'Plotly': Plotly}})
export default class SubsplitsDisplay extends Vue {
  @Prop()
  split!: DetailedSegment;

  @Prop({default: false})
  graphYAxisToZero!: boolean;

  @Prop({default: false})
  graphCurrentAttemptHline!: boolean;

  @Prop()
  currentAttemptNumber?: number;

  @Prop()
  splitIndex!: number;

  collapseVisible: boolean = false;

  timesSeconds: Array<number | null> = [];

  layout: any = {};

  gold: XYCoordinates = {x: 0, y: 0};

  get useRealTime() {
    return store.state.useRealTime;
  }

  /**
   * For some reason layout needs to be a data property or a function (a computed property will be cached and never
   * change), and it needs to be an arrow function otherwise we get `_vm.layout is not a function`
   */
  @Watch('gold')
  @Watch('timesWithPositiveIds')
  @Watch('graphYAxisToZero')
  @Watch('graphCurrentAttemptHline')
  updateLayout() {
    const l: any = {
      title: 'Time history',
      xaxis: {
        title: `Finished number (${this.timesWithPositiveIds.length} total)`
      },
      yaxis: {
        title: 'Time (seconds)',
        rangemode: this.graphYAxisToZero ? 'tozero' : 'nonnegative'
      },
      annotations: [
        {
          x: this.gold.x,
          y: this.gold.y,
          text: 'Gold',
          font: {
            color: GOLD_COLOR
          },
          arrowhead: 2,
          arrowsize: 1,
          arrowwidth: 2,
          arrowcolor: GOLD_COLOR,
          ax: 0,
          ay: 30
        }
      ]
    };

    l.shapes = [];

    const t = selectTime(this.currentAttempt);
    if (this.graphCurrentAttemptHline && this.currentAttemptNumber && t) {
      l.shapes = [
        {
          type: 'line',
          x0: 0,
          y0: stringTimeToSeconds(t),
          x1: this.timesSeconds.length - 1,
          y1: stringTimeToSeconds(t),
          line: {
            color: CUR_ATTEMPT_COLOR,
            width: 1,
            dash: 'dot'
          }
        }
      ];
    }

    this.layout = l;
  }

  get bestTimeDisplay() {
    return this.formatTime(selectTime(this.split.BestSegmentTime) || '');
  }

  @Watch('timesSeconds', {immediate: true})
  updateGold(newVal: Array<number | null>) {
    offload(OffloadWorkerOperation.GOLD_COORDINATES_FROM_SECONDS_ARRAY, newVal).then(r => this.gold = r);
  }

  get currentAttempt(): SegmentHistoryTime | undefined {
    return this.timesWithPositiveIds.find(t => t['@_id'] === this.currentAttemptNumber);
  }

  get goldsMap() {
    let curGold = 999999;

    return this.timesSeconds.map(t => {
      if (t && t < curGold) {
        curGold = t;
        return true;
      }
      return false;
    });
  }

  @Watch('timesWithPositiveIds', {immediate: true})
  updateTimesSeconds(newVal: SegmentHistoryTime[]) {
    offload(OffloadWorkerOperation.SEG_TIME_ARRAY_TO_SECONDS, newVal).then(r => this.timesSeconds = r);
  }

  @Watch('useRealTime')
  updateTimesAfterUseRealTimeChange() {
    this.$nextTick(() => {
      offload(OffloadWorkerOperation.SEG_TIME_ARRAY_TO_SECONDS, this.timesWithPositiveIds)
        .then(r => this.timesSeconds = r);
    });
  }

  get collapseName() {
    return `collapse-subsplits-${this.splitIndex}`;
  }

  get markerColors() {
    let out = [];
    for (let i = 0; i < this.timesWithPositiveIds.length; ++i) {
      if (this.timesWithPositiveIds[i]['@_id'] == this.currentAttempt?.['@_id']) out.push(CUR_ATTEMPT_COLOR);
      else out.push(this.goldsMap[i] ? GOLD_COLOR : LINE_COLOR);
    }
    return out;
  }

  get markerSizes() {
    let out = [];
    for (let i = 0; i < this.timesWithPositiveIds.length; ++i) {
      if (this.timesWithPositiveIds[i]['@_id'] == this.currentAttempt?.['@_id']) out.push(6);
      else out.push(this.goldsMap[i] ? 5 : 3);
    }
    return out;
  }

  get timesWithPositiveIds(): SegmentHistoryTime[] {
    return (this.split.SegmentHistory?.Time || []).filter(t => t['@_id'] > 0);
  }

  get plot_data() {
    const text_val = this.timesWithPositiveIds.map((t) => {
      const time = selectTime(t);
      if (!time) return '';
      return `${formatTime(time)} (attempt ${t['@_id']})`;
    });

    return [
      {
        x: Array.from({length: this.timesWithPositiveIds.length}, (v, k) => k),
        y: this.timesSeconds,
        text: text_val,
        type: 'scatter',
        hoverinfo: 'text',
        mode: 'lines+markers',
        marker: {
          color: this.markerColors,
          size: this.markerSizes
        },
        line: {
          color: LINE_COLOR,
          width: 1
        }
      }
    ];
  }

  formatTime = formatTime;
}
</script>

<style scoped lang="scss">
* {
  color: black;
}

img {
  filter: drop-shadow(0 0 0.5rem rgba(0, 0, 0, 1));
}

.limit-height {
  display: flex;
}

.split-icon-container {
  min-width: 6.5rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  .split-icon {
    object-fit: contain;
    max-width: 100%;
    max-height: 5rem;
    width: auto;
    height: auto;
  }
}

.toggle-collapse {
  position: absolute;
  top: 1rem;
  right: 1rem;
}

.subsplit-container {
  border-left: 0.2rem solid white;
}
</style>
