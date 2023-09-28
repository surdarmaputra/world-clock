import { useState } from 'react';

import { PlusCircleIcon } from '@heroicons/react/24/outline';
import { Button } from '@nextui-org/button';
import { useDisclosure } from '@nextui-org/modal';
import { Tooltip } from '@nextui-org/tooltip';

import {
  DISPLAYED_CLOCKS_STORAGE_KEY,
  MAX_WORLD_CLOCK_COUNT,
} from '@/constants';
import ClockConfiguration from '@/types/ClockConfiguration';
import ClockLocation from '@/types/ClockLocation';
import getFromStorage from '@/utils/getFromStorage';
import saveToStorage from '@/utils/saveToStorage';

import ClockFormModal from './ClockFormModal';
import WorldClock from './WorldClock';

interface WorldClockListProps {
  mainClockLocation: ClockLocation;
}

export default function WorldClockList({
  mainClockLocation,
}: WorldClockListProps) {
  const {
    isOpen: isOpenForm,
    onOpen: onOpenForm,
    onOpenChange: onOpenChangeForm,
  } = useDisclosure();
  const persistedClocks =
    (getFromStorage(DISPLAYED_CLOCKS_STORAGE_KEY) as ClockConfiguration[]) ||
    [];
  const [displayedClocks, setDisplayedClocks] =
    useState<ClockConfiguration[]>(persistedClocks);
  const displayedTimezones: string[] = displayedClocks.map(
    ({ timezone }) => timezone,
  );
  const isAddButtonVisible: boolean =
    displayedClocks.length < MAX_WORLD_CLOCK_COUNT;

  const handleRemoveClock = (removedTimezone: string) => {
    const updatedClocks = displayedClocks.filter(
      (clock) => clock.timezone !== removedTimezone,
    );
    setDisplayedClocks(updatedClocks);
    saveToStorage(DISPLAYED_CLOCKS_STORAGE_KEY, updatedClocks);
  };

  const handleSubmitClockForm = (formData: ClockConfiguration) => {
    const updatedClocks = [
      ...displayedClocks,
      {
        timezone: formData.timezone,
        label: formData.label,
      },
    ];
    setDisplayedClocks(updatedClocks);
    saveToStorage(DISPLAYED_CLOCKS_STORAGE_KEY, updatedClocks);
    onOpenChangeForm();
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
            className="w-full sm:w-44 h-60 border-default-400 border-dashed border-1"
            disableRipple={true}
            onPress={onOpenForm}
            variant="bordered"
          >
            <PlusCircleIcon className="text-default-400" />
          </Button>
        </Tooltip>
      )}

      <ClockFormModal
        excludedTimezones={displayedTimezones}
        isOpen={isOpenForm}
        onOpenChange={onOpenChangeForm}
        onSubmit={handleSubmitClockForm}
      />
    </div>
  );
}
