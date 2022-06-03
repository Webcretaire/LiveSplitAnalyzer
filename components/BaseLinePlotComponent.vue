<script lang="ts">
import {Component, Prop, Vue, Watch}                             from 'nuxt-property-decorator';
import {SegmentHistoryTime, selectTime}                          from '~/util/splits';
import {formatTime, stringTimeToSeconds}                         from '~/util/durations';
import {GOLD_COLOR, LINE_COLOR, CUR_ATTEMPT_COLOR, MEDIAN_COLOR} from '~/util/plot';
import {XYCoordinates}                                           from '~/util/util';
import store                                                     from '~/util/store';
import {offload}                                                 from '~/util/offloadWorker';
import {OffloadWorkerOperation}                                  from '~/util/offloadworkerTypes';
import {DetailedSegment}                                         from '~/util/splitProcessing';

@Component
export default class BaseLinePlotComponent extends Vue {
  @Prop()
  split!: DetailedSegment;

  @Prop({default: false})
  graphYAxisToZero!: boolean;

  @Prop({default: false})
  graphCurrentAttemptHline!: boolean;

  @Prop({default: false})
  graphMedianAttemptHline!: boolean;

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
  @Watch('graphMedianAttemptHline')
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
      l.shapes.push(
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
      );
    }

    const m = selectTime(this.medianAttempt);
    if (this.graphMedianAttemptHline && m) {
      l.shapes.push(
        {
          type: 'line',
          x0: 0,
          y0: stringTimeToSeconds(m),
          x1: this.timesSeconds.length - 1,
          y1: stringTimeToSeconds(m),
          line: {
            color: MEDIAN_COLOR,
            width: 1,
            dash: 'dot'
          }
        }
      );
    }
    
    this.layout = l;
  }

  get bestTimeDisplay() {
    return formatTime(selectTime(this.split.BestSegmentTime) || '');
  } 
  
  @Watch('timesSeconds', {immediate: true})
  updateGold(newVal: Array<number | null>) {
    offload(OffloadWorkerOperation.GOLD_COORDINATES_FROM_SECONDS_ARRAY, newVal).then(r => this.gold = r);
  }

  get currentAttempt(): SegmentHistoryTime | undefined {
    return this.timesWithPositiveIds.find(t => t['@_id'] === this.currentAttemptNumber);
  }

  get medianAttempt() {
    const sortedTimesSeconds = [...this.timesSeconds].sort((a, b) => (a || 0) - (b || 0));
    const medianAttemptNumber = Math.round(this.timesSeconds.length / 2) - 1;
    return this.split.SegmentHistory?.Time.find(t => stringTimeToSeconds(selectTime(t) || "0:0:0.0") === sortedTimesSeconds[medianAttemptNumber]);
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
      else if (this.timesWithPositiveIds[i]['@_id'] == this.medianAttempt?.['@_id']) out.push(MEDIAN_COLOR);
      else out.push(this.goldsMap[i] ? GOLD_COLOR : LINE_COLOR);
    }
    return out;
  }

  get markerSizes() {
    let out = [];
    for (let i = 0; i < this.timesWithPositiveIds.length; ++i) {
      if (this.timesWithPositiveIds[i]['@_id'] == this.currentAttempt?.['@_id']) out.push(6);
      else if (this.timesWithPositiveIds[i]['@_id'] == this.medianAttempt?.['@_id']) out.push(6);
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