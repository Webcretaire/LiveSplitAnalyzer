
export const stringTimeToSeconds = (time: string): number => {
  const t = time.match(/([0-9]+):([0-9]+):([0-9.]+)/);

  if (!t) return 0; // Should not happen but we need to please TS

  const hours   = +t[1];
  const minutes = +t[2];
  const seconds = +t[3];

  return seconds + 60 * minutes + 3600 * hours;
};
export const formatTime = (time: string): string => {
  const t = time.match(/([0-9]+):([0-9]+):([0-9.]+)/);

  if (!t) return ''; // Should not happen but we need to please TS

  // t[0] contains the whole string
  const hours   = +t[1];
  const minutes = +t[2];
  const seconds = +t[3];
  let out       = '';
  if (hours)
    out += `${hours}h`;
  if (minutes)
    out += `${minutes}m`;
  out += `${seconds < 10 ? '0' : ''}${seconds.toFixed(2)}s`;

  return out;
};

export const secondsToFormattedString = (time: number): string => {
  let out         = '';
  let secondsOnly = true;

  if (time > 3600) {
    secondsOnly = false;
    out += `${Math.floor(time / 3600)}h`;
    time        = time % 3600;
  }

  if (time > 60) {
    secondsOnly = false;
    out += `${Math.floor(time / 60)}m`;
    time        = time % 60;
  }

  // Math.abs is mostly here to avoid -0 seconds, just 0 is prettier
  out += `${(!secondsOnly && time < 10) ? '0' : ''}${Math.abs(+time.toFixed(2))}s`;

  return out;
};
