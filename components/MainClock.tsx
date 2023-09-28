'use client';

import { useGetIp } from '@/api/generated/services/default/default';
import useClockRefetch from '@/hooks/useClockRefetch';
import getClockData from '@/utils/getClockData';

export default function MainClock() {
  const { data: currentTime, mutate: refetchCurrentTime } = useGetIp();
  const clockData = getClockData(currentTime);

  useClockRefetch({
    clockData,
    refetch() {
      refetchCurrentTime();
    },
  });

  return (
    <div className="text-center">
      <h1>{clockData?.location}</h1>
      <h2 className="text-3xl font-bold">
        {clockData?.formattedHours}:{clockData?.formattedMinutes}
      </h2>
    </div>
  );
}
