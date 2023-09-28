export default interface Clock {
  abbreviation: string;
  formattedHours: string;
  formattedMinutes: string;
  hours: number;
  location: string;
  minutes: number;
  seconds: number;
}
