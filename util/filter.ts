export const Global = -1;

export const placeholderIndex = -2;

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