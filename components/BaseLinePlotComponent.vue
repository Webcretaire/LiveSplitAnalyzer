<script lang="ts">
import {
  GOLD_COLOR,
  LINE_COLOR,
  CUR_ATTEMPT_COLOR,
  MEDIAN_COLOR,
  yTicksFromSecondsValues,
  XYRange
}                                                                  from '~/util/plot';
import {formatTime, secondsToFormattedString, stringTimeToSeconds} from '~/util/durations';
import {Component, Prop, Vue, Watch}                               from 'nuxt-property-decorator';
import {SegmentHistoryTime, selectTime, SplitFile}                 from '~/util/splits';
import {XYCoordinates}                                             from '~/util/util';
import store                                                       from '~/util/store';
import {offload}                                                   from '~/util/offloadWorker';
import {OffloadWorkerOperation}                                    from '~/util/offloadworkerTypes';
import {DetailedSegment}                                           from '~/util/splitProcessing';

@Component
export default class BaseLinePlotComponent extends Vue {
  @Prop()
  split!: DetailedSegment;

  @Prop({default: false})
  graphCurrentAttemptHline!: boolean;

  @Prop({default: false})
  graphMedianAttemptHline!: boolean;

  @Prop({default: false})
  cumulateSplits!: boolean;

  @Prop({default: () => []})
  cumulatedSplitTimes!: SegmentHistoryTime[][];

  @Prop()
  currentAttemptNumber?: number;

  @Prop()
  parsedSplits!: SplitFile;

  collapseVisible: boolean = false;

  timesSeconds: Array<number | null> = [];

  layout: any = {};

  gold: XYCoordinates = {x: 0, y: 0};

  plotlyCurrentView: XYRange | null = null;

  get splitIndex() {
    return this.split.Index;
  }

  get useRealTime() {
    return store.state.useRealTime;
  }

  /**
   * For some reason layout needs to be a data property or a function (a computed property will be cached and never
   * change), and it needs to be an arrow function otherwise we get `_vm.layout is not a function`
   */
  @Watch('gold')
  @Watch('timesToPlot')
  @Watch('graphCurrentAttemptHline')
  @Watch('graphMedianAttemptHline')
  @Watch('plotlyCurrentView')
  updateLayout() {
    const numberTimes = this.plotlyCurrentView?.y || this.timesSeconds.filter(t => typeof t === 'number') as number[];

    const ticks = yTicksFromSecondsValues(numberTimes);

    const l: any = {
      title: 'Time history',
      xaxis: {
        title: `Finished number (${this.timesToPlot.length} total)`
      },
      yaxis: {
        rangemode: 'nonnegative',
        tickmode: 'array',
        ticktext: ticks.tickTexts,
        tickvals: ticks.tickVals
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

    if (this.plotlyCurrentView) {
      l.xaxis.range = this.plotlyCurrentView.x;
      l.yaxis.range = this.plotlyCurrentView.y;
    }

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
            shape: 'spline',
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
            shape: 'spline',
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
    return this.cumulateSplits
      ? secondsToFormattedString(this.gold.y)
      : formatTime(selectTime(this.split.BestSegmentTime) || '');
  }

  @Watch('timesSeconds', {immediate: true})
  updateGold(newVal: Array<number | null>) {
    offload(OffloadWorkerOperation.GOLD_COORDINATES_FROM_SECONDS_ARRAY, newVal).then(r => this.gold = r);
  }

  get currentAttempt(): SegmentHistoryTime | undefined {
    return this.timesToPlot.find(t => t['@_id'] === this.currentAttemptNumber);
  }

  get medianAttempt() {
    const sortedTimesSeconds  = [...this.timesSeconds].sort((a, b) => (a || 0) - (b || 0));
    const medianAttemptNumber = Math.round(this.timesSeconds.length / 2) - 1;
    return this.split.SegmentHistory?.Time.find(t => stringTimeToSeconds(selectTime(t) || '0:0:0.0') === sortedTimesSeconds[medianAttemptNumber]);
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

  @Watch('timesToPlot', {immediate: true})
  updateTimesSeconds(newVal: SegmentHistoryTime[]) {
    offload(OffloadWorkerOperation.SEG_TIME_ARRAY_TO_SECONDS, newVal).then(r => this.timesSeconds = r);
  }

  @Watch('useRealTime')
  updateTimesAfterUseRealTimeChange() {
    this.$nextTick(() => {
      offload(OffloadWorkerOperation.SEG_TIME_ARRAY_TO_SECONDS, this.timesToPlot)
        .then(r => this.timesSeconds = r);
    });
  }

  get collapseName() {
    return `collapse-subsplits-${this.splitIndex}`;
  }

  get markerColors() {
    let out = [];
    for (let i = 0; i < this.timesToPlot.length; ++i) {
      if (this.timesToPlot[i]['@_id'] == this.currentAttempt?.['@_id']) out.push(CUR_ATTEMPT_COLOR);
      else if (this.timesToPlot[i]['@_id'] == this.medianAttempt?.['@_id']) out.push(MEDIAN_COLOR);
      else out.push(this.goldsMap[i] ? GOLD_COLOR : LINE_COLOR);
    }
    return out;
  }

  get markerSizes() {
    let out = [];
    for (let i = 0; i < this.timesToPlot.length; ++i) {
      if (this.timesToPlot[i]['@_id'] == this.currentAttempt?.['@_id']) out.push(6);
      else if (this.timesToPlot[i]['@_id'] == this.medianAttempt?.['@_id']) out.push(6);
      else out.push(this.goldsMap[i] ? 5 : 3);
    }
    return out;
  }

  get timesToPlot(): SegmentHistoryTime[] {
    const individualTimes = (this.split.SegmentHistory?.Time || []).filter(t => t['@_id'] > 0);

    if (!this.cumulateSplits) return individualTimes;

    const virtualCurrentSplitIndex = this.split.Subsplits.length
      ? this.split.Subsplits[this.split.Subsplits.length - 1].Index
      : this.split.Index;

    return this.cumulatedSplitTimes[virtualCurrentSplitIndex] || [];
  }

  get plot_data() {
    const text_val = this.timesToPlot.map((t) => {
      const time = selectTime(t);
      if (!time) return '';
      return `${formatTime(time)} (attempt ${t['@_id']})`;
    });

    return [
      {
        x: Array.from({length: this.timesToPlot.length}, (v, k) => k),
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
          shape: 'spline',
          color: LINE_COLOR,
          width: 1
        }
      }
    ];
  }

  onPlotRelayout(event: Record<string, number>) {
    if (event['xaxis.autorange'] && event['yaxis.autorange']) {
      this.plotlyCurrentView = null;
      return;
    }

    if (event['yaxis.range[0]'] && event['yaxis.range[1]'] && event['xaxis.range[0]'] && event['xaxis.range[1]']) {
      this.plotlyCurrentView = {
        x: [event['xaxis.range[0]'], event['xaxis.range[1]']],
        y: [event['yaxis.range[0]'], event['yaxis.range[1]']]
      };
    }
  }

  formatTime = formatTime;
}
</script>
