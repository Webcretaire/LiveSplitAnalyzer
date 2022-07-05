import {secondsToFormattedString} from '~/util/durations';

export const LINE_COLOR = '#1f77b4';

export const GOLD_COLOR = '#ffc400';

export const CUR_ATTEMPT_COLOR = '#2db41e';

export const MEDIAN_COLOR = '#141f85';

export interface PlotTicksData {
  tickTexts: string[],
  tickVals: number[]
}

export interface XYRange {
  x: number[],
  y: number[]
}

export const yTicksFromSecondsValues = (numberTimes: number[]): PlotTicksData => {
  const max = Math.max(...numberTimes);
  const min = Math.min(...numberTimes);

  const tickTexts = [];
  const tickVals  = [];

  const increment = (max - min) / 5;
  for (let i = 0; i <= max + 10 * increment; i += increment) {
    const val = increment > 3 ? Math.floor(i) : i;
    tickTexts.push(secondsToFormattedString(val));
    tickVals.push(val);
  }

  return {
    tickTexts: tickTexts,
    tickVals: tickVals
  };
};
