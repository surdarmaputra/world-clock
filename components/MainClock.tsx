'use client';

import { useGetIp } from '@/api/generated/services/default/default';
import useClockRefetch from '@/hooks/useClockRefetch';
import getClockData, { GetClockDataResult } from '@/utils/getClockData';

interface MainClockProps {
  onChange?: (clock: GetClockDataResult) => void;
}

export default function MainClock({ onChange }: MainClockProps) {
  const { data: currentTime, mutate: refetchCurrentTime } = useGetIp();
  const clockData = getClockData(currentTime);

  onChange?.(clockData);

  useClockRefetch({
    clockData,
    refetch() {
      refetchCurrentTime();
    },
  });

  return (
    <div className="text-center mb-10 p-16">
      <h1>{clockData?.location}</h1>
      <h2 className="text-3xl font-bold">
        {clockData?.formattedHours}:{clockData?.formattedMinutes}
      </h2>
    </div>
  );
}
