'use client';

import ClockConfiguration from '@/types/ClockConfiguration';

export default function saveToStorage(
  key: string,
  value: string | ClockConfiguration[],
) {
  let persistedValue: string;

  if (Array.isArray(value)) {
    persistedValue = JSON.stringify(value);
  } else {
    persistedValue = value;
  }

  window.localStorage.setItem(key, persistedValue);
}
