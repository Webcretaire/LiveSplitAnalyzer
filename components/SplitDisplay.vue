<template>
  <div>
    <b-card class="text-left">
      <div class="limit-height">
        <b-card-img v-if="srcFormattedIcon(split)" :src="srcFormattedIcon(split)" class="split-icon mr-4" block/>
        <div class="mt-auto mb-auto">
          <h3>
            {{ isSubsplit ? split.Name.substring(1) : split.Name }} <small v-if="isSubsplit">(subsplit)</small>
          </h3>
          <p v-if="split.BestSegmentTime">
            <strong>Best time:</strong> {{ bestTimeDisplay }}
            <b-button @click="fixGoldsModal" size="sm" variant="warning" class="ml-2">Fix fake golds</b-button>
          </p>
          <b-button class="toggle-collapse" v-b-toggle="collapseName" variant="outline-dark" pill>
            <font-awesome-icon icon="chevron-left" :rotation="collapseVisible ? 270 : null"/>
          </b-button>
        </div>
      </div>
    </b-card>

    <b-collapse :id="collapseName" class="mt-1" v-model="collapseVisible">
      <b-card class="text-left">
        <Plotly v-if="renderGraph" :data="plot_data()" :layout="layout()" :display-mode-bar="true"/>
      </b-card>
    </b-collapse>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue}                    from 'nuxt-property-decorator';
import {Segment, SegmentHistoryTime, selectTime} from '~/util/splits';
import {formatTime, stringTimeToSeconds}         from '~/util/durations';
import {extractPng}                              from '~/util/pngExtractor';
import {GOLD_COLOR, LINE_COLOR, PB_COLOR}        from '~/util/plot';
import slugify                                   from 'slugify';
// Plotly doesn't seem to have TS types available anywhere so we need to ignore the errors
// @ts-ignore
import {Plotly}                                  from 'vue-plotly';
import {GlobalEventEmitter}                      from '~/util/globalEvents';
import {singleSplitState}                        from '~/util/singleSplit';
import {asArray}                                 from '~/util/util';
import store                                     from '~/util/store'


@Component({components: {'Plotly': Plotly}})
export default class SplitDisplay extends Vue {
  @Prop()
  split!: Segment;

  @Prop({default: false})
  graphYAxisToZero!: boolean;

  @Prop({default: false})
  graphPBHline!: boolean;

  @Prop()
  currentAttemptNumber?: number;

  collapseVisible: boolean = false;

  renderGraph: boolean = true;

  /**
   * For some reason this needs to be a function (a computed property will be cached and never change), and it needs to
   * be an arrow function otherwise we get `_vm.layout is not a function`
   */
  layout = () => {
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

    const t = selectTime(this.PB);
    if (this.graphPBHline && this.currentAttemptNumber && t) {
      l.shapes = [
        {
          type: 'line',
          x0: 0,
          y0: stringTimeToSeconds(t),
          x1: this.timesSeconds.length - 1,
          y1: stringTimeToSeconds(t),
          line: {
            color: PB_COLOR,
            width: 1,
            dash: 'dot'
          }
        }
      ];
    }

    return l;
  };

  get isSubsplit() {
    return this.split.Name.startsWith('-');
  }

  get bestTimeDisplay() {
    let out = '';
    if (store.state.useRealTime)
      out += `${this.formatTime(this.split.BestSegmentTime.RealTime)} (real time)`;
    if (this.split.BestSegmentTime.GameTime)
      if (!store.state.useRealTime)
        out += `${this.formatTime(this.split.BestSegmentTime.GameTime)} (game time) ; `;
    return out;
  }

  get gold() {
    let goldX = 0;
    let goldY = 999999;
    for (let i = 0; i < this.timesSeconds.length; ++i) {
      const t = this.timesSeconds[i];
      if (t && t < goldY) {
        goldX = i;
        goldY = t;
      }
    }
    return {x: goldX, y: goldY};
  }

  get PB(): SegmentHistoryTime | undefined {
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

  get timesSeconds(): Array<number | null> {
    return this.timesWithPositiveIds
      .filter(t => t['@_id'] > 0)
      .map((t) => {
        const time = selectTime(t);
        return time ? stringTimeToSeconds(time) : null;
      });
  }

  get collapseName() {
    return 'collapse-' + slugify(this.split.Name);
  }

  get markerColors() {
    let out = [];
    for (let i = 0; i < this.timesWithPositiveIds.length; ++i) {
      if (this.timesWithPositiveIds[i]['@_id'] == this.PB?.['@_id']) out.push(PB_COLOR);
      else out.push(this.goldsMap[i] ? GOLD_COLOR : LINE_COLOR);
    }
    return out;
  }

  get markerSizes() {
    let out = [];
    for (let i = 0; i < this.timesWithPositiveIds.length; ++i) {
      if (this.timesWithPositiveIds[i]['@_id'] == this.PB?.['@_id']) out.push(6);
      else out.push(this.goldsMap[i] ? 5 : 3);
    }
    return out;
  }

  get timesWithPositiveIds() {
    return asArray(this.split.SegmentHistory.Time).filter(t => t['@_id'] > 0);
  }

  plot_data() {
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

  srcFormattedIcon(split: Segment): String | null {
    const png = extractPng(split.Icon);
    return png ? 'data:image/jpeg;base64,' + btoa(
      new Uint8Array(png)
        .reduce((data, byte) => data + String.fromCharCode(byte), '')
    ) : null;
  }

  fixGoldsModal() {
    GlobalEventEmitter.$emit('openModal', 'ManualGoldUpdateModal');
    singleSplitState.currentSplit = this.split;
    GlobalEventEmitter.$emit('setCurrentSplit', this.split);
  }

  formatTime = formatTime;
};
</script>

<style scoped lang="scss">
* {
  color: black;
}

img {
  filter: drop-shadow(0 0 0.5rem rgba(0, 0, 0, 1));
}

.limit-height {
  max-height: 4rem;
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
