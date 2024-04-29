import { SECONDS_IN_MINUTE } from '@src/shared/constants/time/seconds-in-minute';
import { MILLISECONDS_IN_SECOND } from '@src/shared/constants/time/milliseconds-in-second';

export const checkIsTimeElapsed = ({ lastTimeMs, elapseIntervalMinutes }: {
  lastTimeMs: number | undefined,
  elapseIntervalMinutes: number
}): boolean => {
  if (!lastTimeMs) return true;
  
  return Date.now() - lastTimeMs >= elapseIntervalMinutes * SECONDS_IN_MINUTE * MILLISECONDS_IN_SECOND;
};
