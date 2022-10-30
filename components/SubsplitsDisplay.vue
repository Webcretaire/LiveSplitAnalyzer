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
              <span class="mr-2">
                <strong>Best {{ cumulateSplits ? 'pace' : 'time' }}:</strong> {{ bestTimeDisplay }}
              </span>
            </p>
            <b-button class="toggle-collapse" v-b-toggle="collapseName" variant="outline-dark" pill>
              <font-awesome-icon icon="chevron-left" :rotation="collapseVisible ? 270 : null"/>
            </b-button>
          </div>
        </div>
      </b-card>

      <b-collapse :id="collapseName" class="mt-1" v-model="collapseVisible">
        <b-card class="text-left">
          <Plotly :data="plot_data" :layout="layout" :display-mode-bar="true" @relayout="onPlotRelayout"/>
        </b-card>
      </b-collapse>

      <div class="pl-4 mt-3 subsplit-container">
        <div class="ml-2 mr-4 subsplit-collapser-hitbox" @click="subsplitsVisible = !subsplitsVisible">
          <div class="subsplit-collapser"></div>
        </div>
        <b-collapse :visible="subsplitsVisible" class="w-100">
          <split-display :split="subsplit"
                         v-for="(subsplit, i) in split.Subsplits"
                         :key="`split-${subsplit.Index}-${subsplit.Name}`"
                         ref="splitAccess"
                         :graph-current-attempt-hline="graphCurrentAttemptHline"
                         :graph-median-attempt-hline="graphMedianAttemptHline"
                         :cumulate-splits="cumulateSplits"
                         :cumulated-split-times="cumulatedSplitTimes"
                         :bar-plot="barPlot"
                         :scatter-type="scatterType"
                         :current-attempt-number="currentAttemptNumber"
                         :plot-by-date="plotByDate"
                         :segments-holder="segmentsHolder"
                         :parsed-splits="parsedSplits"
                         :class="i === split.Subsplits.length - 1 ? '' : 'mb-3'"/>
        </b-collapse>
      </div>
    </div>
    <div v-else>
      <split-display :split="split"
                     ref="splitAccess"
                     :graph-current-attempt-hline="graphCurrentAttemptHline"
                     :graph-median-attempt-hline="graphMedianAttemptHline"
                     :current-attempt-number="currentAttemptNumber"
                     :cumulate-splits="cumulateSplits"
                     :cumulated-split-times="cumulatedSplitTimes"
                     :bar-plot="barPlot"
                     :scatter-type="scatterType"
                     :plot-by-date="plotByDate"
                     :segments-holder="segmentsHolder"
                     :parsed-splits="parsedSplits"
                     class="mb-3"/>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, mixins} from 'nuxt-property-decorator';
import {Segments}                from '~/util/splits';
import {asArray}                 from '~/util/util';
import BaseLinePlotComponent     from '~/components/BaseLinePlotComponent.vue';
// Plotly doesn't seem to have TS types available anywhere so we need to ignore the errors
// @ts-ignore
import {Plotly}                  from 'vue-plotly';
import SplitDisplay              from './SplitDisplay.vue';

@Component({components: {'Plotly': Plotly}})
export default class SubsplitsDisplay extends mixins(BaseLinePlotComponent) {
  @Prop()
  segmentsHolder!: Segments;

  @Prop()
  cumulateSplits!: boolean;

  @Prop()
  plotByDate!: boolean;

  subsplitsVisible: boolean = true;

  $refs!: {
    splitAccess: SplitDisplay | SplitDisplay[];
  };

  foldSplit() {
    this.collapseVisible = false;

    const splitAccess = asArray(this.$refs.splitAccess);
    splitAccess.forEach((split: SplitDisplay) => split.foldSplit());
  }

  unfoldSplit() {
    this.collapseVisible = true;

    const splitAccess = asArray(this.$refs.splitAccess);
    splitAccess.forEach((split: SplitDisplay) => split.unfoldSplit());
  }
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
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;

  .subsplit-collapser-hitbox {
    width: 1rem;
    cursor: pointer;
    min-height: 2rem;
  }

  .subsplit-collapser {
    width: 0.3rem;
    background-color: white;
    transition: all 100ms;
    height: 100%;
    margin: auto;
    border-radius: 0.15rem;

    &:hover {
      filter: drop-shadow(0 0 0.2rem white);
    }
  }
}
</style>
