import { DateTimeJsonResponse } from '@/api/generated/models';
import { getGetTimezoneAreaLocationMock } from '@/api/generated/services/default/default.msw';

import getClockData, { GetClockDataResult } from '../getClockData';

const mockTimezoneData: DateTimeJsonResponse = getGetTimezoneAreaLocationMock();

test('returns null for undefined timezoneData', () => {
  const result: GetClockDataResult = getClockData(undefined);
  expect(result).toBeNull();
});

test('returns null for null timezoneData', () => {
  const result: GetClockDataResult = getClockData(null);
  expect(result).toBeNull();
});

test('returns Clock data for valid timezoneData', () => {
  const result: GetClockDataResult = getClockData(mockTimezoneData);
  expect(result).toEqual({
    abbreviation: 'BST',
    formattedHours: '09',
    formattedMinutes: '34',
    hours: 9,
    location: 'London',
    minutes: 34,
    seconds: 10.911408,
    utcOffsetHours: 1,
  });
});
