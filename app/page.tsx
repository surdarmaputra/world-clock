'use client';

import { useState } from 'react';

import { ClockIcon } from '@heroicons/react/24/outline';

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
      <h1 className="text-center text-xl font-bold flex items-center justify-center mb-8">
        <ClockIcon className="w-8 h-8 mr-2" />
        World Clock
      </h1>
      <MainClock onChange={handleChangeMainClock} />
      <WorldClockList mainClockLocation={mainClockLocation} />
    </main>
  );
}
