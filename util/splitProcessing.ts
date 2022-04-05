import {asArray, XYCoordinates}                       from '~/util/util';
import {Attempt, Run, SegmentHistoryTime, selectTime} from '~/util/splits';
import {stringTimeToSeconds}                          from '~/util/durations';

export const segTimeArrayToSeconds = (times: SegmentHistoryTime[]) => times.map((t) => {
  const time = selectTime(t);
  return time ? stringTimeToSeconds(time) : null;
});

export const goldCoordinatesFromSecondsArray = (times: Array<number | null>): XYCoordinates => {
  let goldX = 0;
  let goldY = 999999;
  for (let i = 0; i < times.length; ++i) {
    const t = times[i];
    if (t && t < goldY) {
      goldX = i;
      goldY = t;
    }
  }
  return {x: goldX, y: goldY};
}

export const deleteAttemptBeforeNumber = (run: Run, pb: number, attemptNumber: number) => {
  // Delete attempts from attempt Array
  run.AttemptHistory.Attempt = asArray(run.AttemptHistory.Attempt).filter(
    (attempt: Attempt) => attempt['@_id'] == pb || attempt['@_id'] > attemptNumber
  );

  // Delete individual splits attempts
  run.Segments.Segment = run.Segments.Segment.map(segment => ({
    ...segment,
    SegmentHistory: {
      Time: asArray(segment.SegmentHistory.Time).filter(
        (time: SegmentHistoryTime) => time['@_id'] == pb || time['@_id'] > attemptNumber
      )
    }
  }));

  return run;
};
