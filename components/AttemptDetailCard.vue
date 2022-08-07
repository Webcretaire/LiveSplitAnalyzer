<template>
  <b-card :id="`SingleSplitCard_${attempt['@_id']}`" class="AttemptDetailCard text-left mb-3">
    <div class="limit-height">
      <div class="attempt-icon-container mr-3" v-if="gameCover.length">
        <b-card-img :src="gameCover" :class="attemptIconClass" block/>
      </div>
      <div class="mt-auto mb-auto">
        <h3>
          Attempt #{{ attempt['@_id'] }}
        </h3>
        <p class="m-0">
          <span class="mr-2">
            <strong>Date:</strong> {{ formattedDate[0] }}<sup>{{ formattedDate[1] }}</sup> {{ formattedDate[2] }}
          </span>
        </p>
        <b-button class="toggle-collapse" v-b-toggle="collapseName" variant="outline-dark" pill>
          <font-awesome-icon icon="chevron-left" :rotation="collapseVisible ? 270 : null"/>
        </b-button>
      </div>
    </div>
    <b-collapse :id="collapseName" v-model="collapseVisible" class="pt-1">
      <hr class="mb-3"/>
      <p class="mb-0">
        <strong>Status:</strong> {{ timeInfo }}
      </p>
      <p class="mb-0" v-if="lastFinishedSplit">
        <strong>{{ paceText }}:</strong> {{ lastPace }}
      </p>
    </b-collapse>
  </b-card>
</template>

<script lang="ts">
import {Component, Prop, Vue}                          from 'nuxt-property-decorator';
import {Attempt, Segment, selectTime}                  from '~/util/splits';
import {secondsToFormattedString, stringTimeToSeconds} from '~/util/durations';
import {SegmentNameIndex}                              from '~/util/splitProcessing';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

@Component
export default class AttemptDetailCard extends Vue {
  @Prop()
  attempt!: Attempt;

  @Prop({default: ''})
  gameCover!: string;

  @Prop()
  lastSplit!: SegmentNameIndex | undefined;

  @Prop()
  segments!: Segment[];

  @Prop()
  pb!: number;

  collapseVisible: boolean = false;

  nth(d: number) {
    if (d > 3 && d < 21) return 'th';
    switch (d % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  }

  /**
   * Return format is an array with [day number, appropriate "nth", month + year + time properly formatted]
   */
  get formattedDate() {
    const started = this.attempt['@_started'];
    const regex   = started.match(/(\d+)\/(\d+)\/(\d+) (\d+):(\d+):(\d+)/);
    if (!regex) return '';
    let month, day, year, hour, minutes, seconds;
    [month, day, year, hour, minutes, seconds] = regex.slice(1);
    day = parseInt(day);

    return [`${day}`, this.nth(day), `${months[parseInt(month) - 1]} ${year} at ${parseInt(hour)}h${minutes}`];
  }

  get collapseName() {
    return `collapse-attempt-${this.attempt['@_id']}`;
  }

  get timeInfo() {
    if (this.attempt.RealTime)
      return `Finished run ${this.isPB ? '(PB)' : ''}`;
    else
      return this.lastSplit ? `Reset in ${this.lastSplit.name} (${this.lastSplit.index})` : 'Reset';
  }

  get attemptIconClass() {
    const out = ['attempt-icon'];

    out.push(this.attempt.RealTime ? 'attempt-icon-finished' : 'attempt-icon-reset');

    if (this.isPB) out.push('attempt-icon-PB');

    return out;
  }

  get lastFinishedSplit() {
    const id = this.lastSplit?.index;
    return id ? `${this.segments[id - 1].Name} (${id - 1})` : null;
  }

  get paceText() {
    return this.attempt.RealTime ? 'Final time' : `Pace at ${this.lastFinishedSplit}`;
  }

  get lastPace() {
    if (!this.collapseVisible)
      return '';

    return secondsToFormattedString(
      this.segments.reduce((acc, segment) => {
        const attemptTime = segment.SegmentHistory?.Time.find(time => time['@_id'] === this.attempt['@_id']);
        return attemptTime ? acc + stringTimeToSeconds(selectTime(attemptTime) || '0:0:0.0') : acc;
      }, 0)
    );
  }

  get isPB() {
    const time = selectTime(this.attempt);
    return time && stringTimeToSeconds(time) === this.pb;
  }
};
</script>

<style scoped lang="scss">
* {
  color: black;
}

.attempt-icon-container {
  min-width: 6.5rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  .attempt-icon {
    object-fit: contain;
    max-width: 100%;
    max-height: 5rem;
    width: auto;
    height: auto;
    opacity: 100%;
  }

  .attempt-icon-reset {
    filter: grayscale(100%) drop-shadow(0 0 0.5rem rgba(0, 0, 0, 1));
    opacity: 80%;
  }

  .attempt-icon-PB {
    filter: drop-shadow(0 0 0.6rem #ffc400);
  }
}

.limit-height {
  display: flex;
}

.toggle-collapse {
  position: absolute;
  top: 1rem;
  right: 1rem;
}

img {
  filter: drop-shadow(0 0 0.5rem rgba(0, 0, 0, 1));
}
</style>
