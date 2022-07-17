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

  const magneticValues = [
    0.01,
    0.02,
    0.025,
    0.05,
    0.1,
    0.2,
    0.25,
    0.5,
    1,
    2,
    3,
    5,
    10,
    15,
    20,
    30,
    60,
    90,
    2 * 60,
    3 * 60,
    4 * 60,
    5 * 60,
    10 * 60,
    15 * 60,
    30 * 60,
    60 * 60
  ];

  let increment = (max - min) / 10;
  for (let magneticValue of magneticValues) {
    if (increment <= magneticValue) {
      increment = magneticValue;
      break;
    }
  }

  for (let i = 0; i <= max + 10 * increment; i += increment) {
    i = parseFloat(i.toPrecision(8)); // Fix rounding errors
    tickTexts.push(secondsToFormattedString(i));
    tickVals.push(i);
  }

  return {
    tickTexts: tickTexts,
    tickVals: tickVals
  };
};
