export const FILTER_GLOBAL = -1;

export const FILTER_DEFAULT_INDEX = -2;

export interface Filter {
  details?: FilterDetails,
  timeMin?: number,
  timeMax?: number,
  active?: boolean,
  attempts?: number[]
}

export interface FilterDetails {
  label?: string,
  index?: number
}