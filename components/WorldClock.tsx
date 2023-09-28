'use client';

import { XCircleIcon } from '@heroicons/react/24/outline';
import { Card, CardBody } from '@nextui-org/card';
import { Chip } from '@nextui-org/chip';

import { useGetTimezoneAreaLocation } from '@/api/generated/services/default/default';
import useClockRefetch from '@/hooks/useClockRefetch';
import ClockLocation from '@/types/ClockLocation';
import getClockData from '@/utils/getClockData';

interface WorldClockProps {
  label?: string;
  mainClockLocation: ClockLocation;
  onRemove?: () => void;
  timezone: string;
}

export default function WorldClock({
  label,
  mainClockLocation,
  onRemove,
  timezone,
}: WorldClockProps) {
  const [area, location] = timezone.split('/');
  const { data: currentTime, mutate: refetchCurrentTime } =
    useGetTimezoneAreaLocation(area, location);

  const clockData = getClockData(currentTime);
  const timeDiffHours =
    (clockData?.utcOffsetHours || 0) - mainClockLocation.utcOffsetHours;
  const timeDiffConjunction = timeDiffHours >= 0 ? 'ahead' : 'behind';
  const displayedTimeDiff = `${Math.abs(
    timeDiffHours,
  )} hours ${timeDiffConjunction} ${mainClockLocation.location}`;

  useClockRefetch({
    clockData,
    refetch() {
      refetchCurrentTime();
    },
  });

  return (
    <Card className="w-44 h-56 transition hover:-translate-y-1 group shadow-2xl border-default-50 border-1 shadow-default-200 overflow-visible">
      <CardBody className="text-center flex flex-col justify-between">
        {clockData ? (
          <>
            <h1 className="h-10">
              <div>{clockData.location}</div>
              <div className="text-sm text-default-400">{label}</div>
            </h1>
            <h2 className="text-3xl font-bold my-6">
              {clockData.formattedHours}:{clockData.formattedMinutes}
            </h2>
            <div className="mb-1">
              <Chip
                className="border-1 px-2 text-default-500"
                color="default"
                size="sm"
                variant="bordered"
              >
                {clockData.abbreviation}
              </Chip>
            </div>
            <div className="text-xs text-default-400">{displayedTimeDiff}</div>
          </>
        ) : (
          <div>loading</div>
        )}
      </CardBody>
      <XCircleIcon
        className="text-danger-500 absolute -right-1 -top-1 cursor-pointer z-10 w-6 h-6 opacity-0 group-hover:opacity-100 transition"
        onClick={() => onRemove?.()}
      />
    </Card>
  );
}
