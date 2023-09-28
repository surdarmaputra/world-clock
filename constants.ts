export const CITY_OPTIONS: Record<string, string>[] = [
  {
    label: 'Singapore',
    value: 'Asia/Singapore',
  },
  {
    label: 'Tokyo',
    value: 'Asia/Tokyo',
  },
  {
    label: 'Seoul',
    value: 'Asia/Seoul',
  },
  {
    label: 'Melbourne',
    value: 'Australia/Melbourne',
  },
  {
    label: 'Sydney',
    value: 'Australia/Sydney',
  },
  {
    label: 'London',
    value: 'Europe/London',
  },
  {
    label: 'Paris',
    value: 'Europe/Paris',
  },
  {
    label: 'Berlin',
    value: 'Europe/Berlin',
  },
  {
    label: 'New York',
    value: 'America/New_York',
  },
  {
    label: 'Los Angeles',
    value: 'America/Los_Angeles',
  },
].sort((left, right) => {
  if (left.label < right.label) return -1;
  if (left.label > right.label) return 1;
  return 0;
});

export const MAX_WORLD_CLOCK_COUNT = 4;
