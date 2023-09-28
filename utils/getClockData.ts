import { DateTimeJsonResponse } from '@/api/generated/models';
import Clock from '@/types/Clock';

export type GetClockDataResult = Clock | null;

export default function getClockData(
  timezoneData: DateTimeJsonResponse | undefined | null,
): GetClockDataResult {
  if (!timezoneData) return null;

  const [, location] = timezoneData.timezone.split('/');
  const [, time] = timezoneData.datetime.split('T');
  const [hours, minutes, secondsWithOffset] = time.split(':');
  const [seconds] = secondsWithOffset.includes('-')
    ? secondsWithOffset.split('-')
    : secondsWithOffset.split('+');
  const formattedHours = `0${hours}`.slice(-2);
  const formattedMinutes = `0${minutes}`.slice(-2);
  const utcOffsetHours = (timezoneData.raw_offset || 0) / 3600;

  return {
    abbreviation: timezoneData.abbreviation,
    formattedHours,
    formattedMinutes,
    hours: Number(hours),
    location: location.replace('_', ' '),
    minutes: Number(minutes),
    seconds: Number(seconds),
    utcOffsetHours,
  };
}
