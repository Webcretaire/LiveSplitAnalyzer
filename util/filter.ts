export const FILTER_GLOBAL = -1;

export const FILTER_DEFAULT_INDEX = -2;

export interface Filter {
  details: FilterDetails | null,
  timeMin: number,
  timeMax: number,
  attempts: number[]
}

export interface FilterDetails {
  label?: string,
  index?: number
}