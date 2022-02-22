<template>
  <div>
    <b-card class="text-left">
      <div class="limit-height">
        <b-card-img :src="srcFormattedIcon(split)" class="split-icon mr-4" block/>
        <div class="mt-auto mb-auto">
          <h3>
            {{ split.Name }}
          </h3>
          <p v-if="split.BestSegmentTime">
            <strong>Best time:</strong> {{ formatTime(split.BestSegmentTime.GameTime) }} (game time) ;
            {{ formatTime(split.BestSegmentTime.RealTime) }} (real time)
          </p>
          <b-button style="position: absolute; top: 1rem; right: 1rem" v-b-toggle="collapseName" variant="outline-dark">
            {{ collapseVisible ? 'Close' : 'Time detail' }}
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
import {Vue, Component, Prop, Watch} from 'nuxt-property-decorator';
import {Segment}                     from '~/util/splits';
import {extractPng}                  from '~/util/pngExtractor';
import slugify                       from 'slugify';
// Plotly doesn't seem to have TS types available anywhere so we need to ignore the errors
// @ts-ignore
import {Plotly}                      from 'vue-plotly';

@Component({components: {'Plotly': Plotly}})
export default class SplitDisplay extends Vue {
  @Prop()
  split!: Segment;

  @Prop()
  graphYAxisToZero!: boolean;

  collapseVisible: boolean = false;

  renderGraph: boolean = true;

  /**
   * For some reason this needs to be a function (a computed property will be cached and never change), and it needs to
   * be an arrow function otherwise we get `_vm.layout is not a function`
   */
  layout = () => ({
    title: 'Time history',
    xaxis: {
      title: 'Attempt number'
    },
    yaxis: {
      title: 'Time (seconds)',
      rangemode: this.graphYAxisToZero ? 'tozero' : 'nonnegative'
    }
  });

  public constructor() {
    super();
    // this.layout = () => ({
    //   title: 'Time history',
    //   xaxis: {
    //     title: 'Attempt number'
    //   },
    //   yaxis: {
    //     title: 'Time (seconds)',
    //     rangemode: this.graphYAxisToZero ? 'tozero' : 'nonnegative'
    //   }
    // });
  }

  get collapseName() {
    return 'collapse-' + slugify(this.split.Name);
  }

  @Watch('graphYAxisToZero')
  onGraphYAxisToZeroChange() {
    this.renderGraph = false;
    this.$nextTick(() => {
      this.renderGraph = true;
    });
  }

  plot_data() {
    const y_val = this.split.SegmentHistory.Time.map((t) => {
      if (typeof (t) == 'string' || !t.GameTime) {
        return null;
      } else {
        const time = t.GameTime.match(/([0-9]+):([0-9]+):([0-9.]+)/);

        if (!time) return ''; // Should not happen but we need to please TS

        const hours   = +time[1];
        const minutes = +time[2];
        const seconds = +time[3];

        return seconds + 60 * minutes + 3600 * hours;
      }
    });

    const text_val = this.split.SegmentHistory.Time.map((t) => {
      if (typeof (t) == 'string' || !t.GameTime) {
        return null;
      } else {
        return t.GameTime;
      }
    });

    return [
      {
        x: Array.from({length: this.split.SegmentHistory.Time.length}, (v, k) => k),
        y: y_val,
        text: text_val,
        type: 'scatter',
        hoverinfo: 'text',
        mode: 'lines+markers',
        marker: {
          size: 4
        },
        line: {
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

  formatTime(time: string) {
    const t = time.match(/([0-9]+):([0-9]+):([0-9.]+)/);

    if (!t) return ''; // Should not happen but we need to please TS

    // t[0] contains the whole string
    const hours   = +t[1];
    const minutes = +t[2];
    const seconds = +t[3];
    let out       = '';
    if (hours)
      out += `${hours}h`;
    if (minutes)
      out += `${minutes}m`;
    out += `${seconds}s`;

    return out;
  }
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
</style>
