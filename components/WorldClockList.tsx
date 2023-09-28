import WorldClock from './WorldClock';

export default function WorldClockList() {
  return (
    <div className="flex gap-8 justify-center">
      <WorldClock timezone="Asia/Singapore" />
      <WorldClock timezone="Asia/Tokyo" />
      <WorldClock timezone="Australia/Melbourne" />
      <WorldClock timezone="America/New_York" />
    </div>
  );
}
