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

interface ClockFormModalProps {
  isOpen?: ModalProps['isOpen'];
  onOpenChange?: ModalProps['onOpenChange'];
}

export default function ClockFormModal({
  isOpen,
  onOpenChange,
}: ClockFormModalProps) {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Add New Clock
            </ModalHeader>
            <ModalBody>
              <Select
                autoFocus
                isRequired={true}
                label="City"
                placeholder="Select city"
                variant="bordered"
              >
                {CITY_OPTIONS.map(({ label, value }) => (
                  <SelectItem key={value} value={value}>
                    {label}
                  </SelectItem>
                ))}
              </Select>
              <Input
                label="Label"
                placeholder="Hometown, office or anything..."
                variant="bordered"
              />
            </ModalBody>
            <ModalFooter>
              <Button color="default" onPress={onClose} variant="flat">
                Cancel
              </Button>
              <Button color="primary" onPress={onClose}>
                Add Clock
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
