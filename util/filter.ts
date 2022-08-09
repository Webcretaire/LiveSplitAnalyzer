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