import { useState } from 'react';

import { PlusCircleIcon } from '@heroicons/react/24/outline';
import { Button } from '@nextui-org/button';
import { useDisclosure } from '@nextui-org/modal';
import { Tooltip } from '@nextui-org/tooltip';

import { MAX_WORLD_CLOCK_COUNT } from '@/constants';
import ClockConfiguration from '@/types/ClockConfiguration';
import ClockLocation from '@/types/ClockLocation';

import ClockFormModal from './ClockFormModal';
import WorldClock from './WorldClock';

interface WorldClockListProps {
  mainClockLocation: ClockLocation;
}

export default function WorldClockList({
  mainClockLocation,
}: WorldClockListProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [displayedClocks, setDisplayedClocks] = useState<ClockConfiguration[]>([
    {
      timezone: 'Asia/Singapore',
    },
    {
      timezone: 'Asia/Tokyo',
      label: 'Next trip',
    },
    {
      timezone: 'Australia/Melbourne',
    },
    {
      timezone: 'America/New_York',
    },
  ]);
  const isAddButtonVisible: boolean =
    displayedClocks.length < MAX_WORLD_CLOCK_COUNT;

  const handleRemoveClock = (removedTimezone: string) => {
    setDisplayedClocks((clocks) =>
      clocks.filter((clock) => clock.timezone !== removedTimezone),
    );
  };

  return (
    <div className="flex gap-6 justify-center flex-col sm:flex-row">
      {displayedClocks.map(({ label, timezone }) => (
        <WorldClock
          key={timezone}
          label={label}
          mainClockLocation={mainClockLocation}
          onRemove={() => handleRemoveClock(timezone)}
          timezone={timezone}
        />
      ))}

      {isAddButtonVisible && (
        <Tooltip
          color="foreground"
          content="Add world clock"
          placement="bottom"
          showArrow={true}
        >
          <Button
            className="w-44 h-56 border-default-400 border-dashed border-1"
            disableRipple={true}
            onPress={onOpen}
            variant="bordered"
          >
            <PlusCircleIcon className="text-default-400" />
          </Button>
        </Tooltip>
      )}

      <ClockFormModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </div>
  );
}
