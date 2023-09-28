'use client';

import { useState } from 'react';

import MainClock from '@/components/MainClock';
import WorldClockList from '@/components/WorldClockList';
import ClockLocation from '@/types/ClockLocation';
import { GetClockDataResult } from '@/utils/getClockData';

export default function Home() {
  const [mainClockLocation, setMainClockLocation] = useState<ClockLocation>({
    location: 'Jakarta',
    utcOffsetHours: 7,
  });

  const handleChangeMainClock = (clock: GetClockDataResult) => {
    if (clock && clock.utcOffsetHours !== mainClockLocation.utcOffsetHours) {
      setMainClockLocation({
        location: clock.location,
        utcOffsetHours: clock.utcOffsetHours,
      });
    }
  };

  return (
    <main>
      <MainClock onChange={handleChangeMainClock} />
      <WorldClockList mainClockLocation={mainClockLocation} />
    </main>
  );
}
