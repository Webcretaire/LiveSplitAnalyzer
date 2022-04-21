<template>
  <collapsible-card id="RunOverviewCard" class="text-center" :title="run.GameName + ' - ' + run.CategoryName" starts-open>
    <p>{{ run.AttemptCount }} attempts</p>
    <p class="m-0"><strong>Finished runs:</strong> {{ finishedRuns }}</p>
    <p class="m-0"><strong>Number of PBs:</strong> {{ PBs.length }}</p>
    <p class="m-0"><strong>Reset rate:</strong>
      {{ (100 - (finishedRuns / run.AttemptCount) * 100).toFixed(1) }}%
    </p>
    <p v-for="m in runMetadata" class="m-0" v-if="m">
      <strong>{{ m['@_name'] }}:</strong> {{ m['#text'] }}
    </p>
  </collapsible-card>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'nuxt-property-decorator';
import {Run, selectTime}      from '~/util/splits';
import {stringTimeToSeconds}  from '~/util/durations';

@Component
export default class RunOverview extends Vue {
  @Prop()
  run!: Run;

  get finishedRuns() {
    return this.run.AttemptHistory.Attempt.filter(a => selectTime(a)).length;
  }

  get PBs() {
    let curPB = 999999;

    return this.run.AttemptHistory.Attempt.filter(a => {
      const t = selectTime(a);
      if (!t) return false;
      const time = stringTimeToSeconds(t);
      if (time && time < curPB) {
        curPB = time;
        return true;
      }
      return false;
    });
  }

  get runMetadata() {
    return this.run.Metadata.Variables?.Variable;
  }

  visible: boolean = true;
}
</script>
