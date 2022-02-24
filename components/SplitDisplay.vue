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
import {Vue, Component, Prop, Watch}     from 'nuxt-property-decorator';
import {Segment}                         from '~/util/splits';
import {formatTime, stringTimeToSeconds} from '~/util/durations';
import {extractPng}                      from '~/util/pngExtractor';
import slugify                           from 'slugify';
// Plotly doesn't seem to have TS types available anywhere so we need to ignore the errors
// @ts-ignore
import {Plotly}                          from 'vue-plotly';

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

  get collapseName() {
    return 'collapse-' + slugify(this.split.Name);
  }

  @Watch('graphYAxisToZero')
  onGraphYAxisToZeroChange() {
    // This trick is needed because otherwise Vue doesn't detect the data change, so we're forcing the redraw
    this.renderGraph = false;
    this.$nextTick(() => {
      this.renderGraph = true;
    });
  }

  plot_data() {
    const y_val = this.split.SegmentHistory.Time.map((t) => {
      if (!t.GameTime)
        return null;
      else
        return stringTimeToSeconds(t.GameTime) || null;
    });

    const text_val = this.split.SegmentHistory.Time.map((t) => {
      return t.GameTime || null;
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
</style>
