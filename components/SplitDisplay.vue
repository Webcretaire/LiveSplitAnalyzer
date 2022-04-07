<template>
  <div>
    <b-card :id="`SingleSplitCard_${splitIndex}`" class="SingleSplitCard text-left">
      <div class="limit-height">
        <b-card-img v-if="srcFormattedIcon(split)" :src="srcFormattedIcon(split)" class="split-icon mr-4" block/>
        <div class="mt-auto mb-auto">
          <h3>
            {{ isSubsplit ? split.Name.substring(1) : split.Name }} <small v-if="isSubsplit">(subsplit)</small>
          </h3>
          <p v-if="split.BestSegmentTime">
            <strong>Best time:</strong> {{ bestTimeDisplay }}
          </p>
          <p>
            <b-button @click="fixGoldsModal" size="sm" variant="warning" class="mr-1">Fix fake golds</b-button>
            <b-button v-if="isNotLastSplit" @click="mergeNextSplit" size="sm" variant="info" class="ml-1"
                      v-b-tooltip.hover :title="mergeSplitTooltip">
              Merge into next split
            </b-button>
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
  </div>
</template>

<script lang="ts">
import {
  Segment,
  SegmentHistoryTime,
  selectTime,
  splitFileIsModified
}                                                  from '~/util/splits';
import {Component, Prop, Vue, Watch}               from 'nuxt-property-decorator';
import {formatTime, stringTimeToSeconds}           from '~/util/durations';
import {extractPng}                                from '~/util/pngExtractor';
import {GOLD_COLOR, LINE_COLOR, CUR_ATTEMPT_COLOR} from '~/util/plot';
import {GlobalEventEmitter}                        from '~/util/globalEvents';
import {singleSplitState}                          from '~/util/singleSplit';
import {asArray, XYCoordinates}                    from '~/util/util';
import {whithLoadAsync}                            from '~/util/loading';
import store                                       from '~/util/store';
import {offload}                                   from '~/util/offloadWorker';
import {OffloadWorkerOperation}                    from '~/util/offloadworkerTypes';
// Plotly doesn't seem to have TS types available anywhere so we need to ignore the errors
// @ts-ignore
import {Plotly}                                    from 'vue-plotly';

@Component({components: {'Plotly': Plotly}})
export default class SplitDisplay extends Vue {
  @Prop()
  split!: Segment;

  @Prop({default: false})
  graphYAxisToZero!: boolean;

  @Prop({default: false})
  graphCurrentAttemptHline!: boolean;

  @Prop()
  currentAttemptNumber?: number;

  @Prop()
  splitIndex!: number;

  segments: Segment[] = store.state.splitFile.Run.Segments.Segment;

  collapseVisible: boolean = false;

  timesSeconds: Array<number | null> = [];

  layout: any = {};

  gold: XYCoordinates = {x: 0, y: 0};

  /**
   * For some reason layout needs to be a data property or a function (a computed property will be cached and never
   * change), and it needs to be an arrow function otherwise we get `_vm.layout is not a function`
   */
  @Watch('gold')
  @Watch('timesWithPositiveIds')
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
  };

  get isSubsplit() {
    return this.split.Name.startsWith('-');
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

  get collapseName() {
    return 'collapse-split-' + this.splitIndex;
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
    return asArray(this.split.SegmentHistory.Time).filter(t => t['@_id'] > 0);
  }

  get isNotLastSplit() {
    return (this.splitIndex != this.segments.length - 1);
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

  get mergeSplitTooltip() {
    return `"${this.split.Name}" will be deleted, and its times merged with "${this.nextSplit.Name}"`;
  }

  srcFormattedIcon(split: Segment): string | null {
    const png = extractPng(split.Icon);
    return png
      ? `data:image/jpeg;base64,${btoa(new Uint8Array(png).reduce((data, byte) => data + String.fromCharCode(byte), ''))}`
      : null;
  }

  fixGoldsModal() {
    GlobalEventEmitter.$emit('openModal', 'ManualGoldUpdateModal');
    singleSplitState.currentSplit = this.split;
    GlobalEventEmitter.$emit('setCurrentSplit', this.split);
  }

  get nextSplit() {
    return store.state.splitFile.Run.Segments.Segment[this.splitIndex + 1];
  }

  doMergeNextSplit(endLoad: Function) {
    // Copy this before splice otherwise the next split name won't refer to the correct split
    const curSplitName  = this.split.Name;
    const nextSplitName = this.nextSplit.Name;

    offload(
      OffloadWorkerOperation.MERGE_SPLIT_INTO_NEXT_ONE,
      store.state.splitFile.Run.Segments.Segment,
      this.splitIndex
    ).then(segments => {
      splitFileIsModified(true);

      const autosplitterSettings = store.state.splitFile.Run.AutoSplitterSettings;
      if (autosplitterSettings?.Splits?.Split)
        autosplitterSettings.Splits.Split.splice(this.splitIndex, 1);
      store.state.splitFile.Run.Segments.Segment = segments;

      this.$bvToast.toast(`Merged ${curSplitName} with ${nextSplitName}`, {
        title: 'Splits merged',
        autoHideDelay: 5000,
        appendToast: false,
        variant: 'success'
      });
      endLoad();
    });
  }

  mergeNextSplit() {
    GlobalEventEmitter.$emit('openConfirm', `Merge "${this.split.Name}" into "${this.nextSplit.Name}"?`, () => {
      whithLoadAsync((endLoad: Function) => this.doMergeNextSplit(endLoad));
    });
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
  max-height: 7rem;
  display: flex;
}

.split-icon {
  object-fit: contain;
  max-width: 100%;
  max-height: 256px;
  width: auto;
  height: auto;
}

.toggle-collapse {
  position: absolute;
  top: 1rem;
  right: 1rem
}

small {
  color: #6b6b6b;
  font-size: 1rem;
}
</style>
