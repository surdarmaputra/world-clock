'use client';

import { Spinner } from '@nextui-org/spinner';

import { useGetIp } from '@/api/generated/services/default/default';
import useClockRefetch from '@/hooks/useClockRefetch';
import getClockData, { GetClockDataResult } from '@/utils/getClockData';

interface MainClockProps {
  onChange?: (clock: GetClockDataResult) => void;
}

export default function MainClock({ onChange }: MainClockProps) {
  const {
    data: currentTime,
    isLoading: isLoadingCurrentTime,
    mutate: refetchCurrentTime,
  } = useGetIp();
  const clockData = getClockData(currentTime);
  const isSpinnerVisible = isLoadingCurrentTime || !clockData;

  onChange?.(clockData);

  useClockRefetch({
    clockData,
    refetch() {
      refetchCurrentTime();
    },
  });

  return (
    <div className="text-center mb-10 p-16">
      {isSpinnerVisible ? (
        <Spinner size="lg" />
      ) : (
        <>
          <h1 className="text-2xl mb-1">{clockData?.location}</h1>
          <h2 className="text-6xl font-bold">
            {clockData?.formattedHours}:{clockData?.formattedMinutes}
          </h2>
        </>
      )}
    </div>
  );
}
