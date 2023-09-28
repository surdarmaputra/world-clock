import ClockConfiguration from '@/types/ClockConfiguration';

export default function getFromStorage(
  key: string,
): string | ClockConfiguration[] | null {
  if (typeof window === 'undefined') return null;

  const value = window.localStorage.getItem(key);
  if (!value) return value;

  let originalValue;
  try {
    originalValue = JSON.parse(value);
  } catch (error) {
    originalValue = value;
  }

  return originalValue;
}
