import { useEffect } from 'react';

import { GetClockDataResult } from '@/utils/getClockData';

interface UseClockRefetchParams {
  clockData: GetClockDataResult;
  refetch: () => void;
}

export default function useClockRefetch({
  clockData,
  refetch,
}: UseClockRefetchParams) {
  useEffect(() => {
    if (!clockData) return;

    const secondsToRefetch = 60 - Math.ceil(clockData?.seconds);
    const millisecondsToRefetch = secondsToRefetch * 1000 + 500;
    const timer = setTimeout(() => refetch(), millisecondsToRefetch);

    return () => {
      clearTimeout(timer);
    };
  }, [clockData, refetch]);
}
