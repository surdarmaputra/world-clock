import { useEffect } from 'react';
import { useForm, useFormState } from 'react-hook-form';

import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalProps,
} from '@nextui-org/modal';
import { Select, SelectItem } from '@nextui-org/select';

import { CITY_OPTIONS } from '@/constants';
import ClockConfiguration from '@/types/ClockConfiguration';

interface ClockFormModalProps {
  excludedTimezones?: string[];
  isOpen?: ModalProps['isOpen'];
  onOpenChange?: ModalProps['onOpenChange'];
  onSubmit?: (formData: ClockConfiguration) => void;
}

export default function ClockFormModal({
  excludedTimezones = [],
  isOpen,
  onOpenChange,
  onSubmit,
}: ClockFormModalProps) {
  const { control, handleSubmit, register, reset } =
    useForm<ClockConfiguration>({
      defaultValues: {
        label: '',
        timezone: '',
      },
    });
  const { errors } = useFormState({ control });

  const cityOptions = CITY_OPTIONS.filter(
    (option) => !excludedTimezones.includes(option.value),
  );

  const submitHandler = handleSubmit((formData) => {
    onSubmit?.(formData);
  });

  useEffect(() => {
    if (!isOpen) {
      reset();
    }
  }, [isOpen, reset]);

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Add New Clock
            </ModalHeader>
            <ModalBody>
              <form className="flex flex-col gap-4" onSubmit={submitHandler}>
                <Select
                  autoFocus
                  disableAnimation={true}
                  errorMessage={errors?.timezone?.message}
                  isInvalid={Boolean(errors?.timezone)}
                  label="City"
                  placeholder="Select city"
                  variant="bordered"
                  {...register('timezone', {
                    required: 'Please select any city',
                  })}
                >
                  {cityOptions.map(({ label, value }) => (
                    <SelectItem key={value} value={value}>
                      {label}
                    </SelectItem>
                  ))}
                </Select>
                <Input
                  errorMessage={errors?.label?.message}
                  isInvalid={Boolean(errors?.label)}
                  label={
                    <div>
                      Label{' '}
                      <span className="ml-1 text-default-400">(Optional)</span>
                    </div>
                  }
                  placeholder="Hometown, office or anything..."
                  variant="bordered"
                  {...register('label', {
                    maxLength: {
                      value: 20,
                      message: 'Maximum 20 characters',
                    },
                  })}
                />
              </form>
            </ModalBody>
            <ModalFooter>
              <Button color="default" onPress={onClose} variant="flat">
                Cancel
              </Button>
              <Button color="primary" onPress={() => submitHandler()}>
                Add Clock
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
