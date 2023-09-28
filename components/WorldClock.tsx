'use client';

import { Card, CardBody } from '@nextui-org/card';

import { useGetTimezoneAreaLocation } from '@/api/generated/services/default/default';
import useClockRefetch from '@/hooks/useClockRefetch';
import getClockData from '@/utils/getClockData';

interface WorldClockProps {
  timezone: string;
}

export default function WorldClock({ timezone }: WorldClockProps) {
  const [area, location] = timezone.split('/');
  const { data: currentTime, mutate: refetchCurrentTime } =
    useGetTimezoneAreaLocation(area, location);

  const clockData = getClockData(currentTime);

  useClockRefetch({
    clockData,
    refetch() {
      refetchCurrentTime();
    },
  });

  return (
    <Card>
      <CardBody className="text-center">
        <h1>{clockData?.location}</h1>
        <h2 className="text-3xl font-bold">
          {clockData?.formattedHours}:{clockData?.formattedMinutes}
        </h2>
      </CardBody>
    </Card>
  );
}
