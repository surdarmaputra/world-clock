import { Select as BaseSelect, SelectProps } from '@nextui-org/select';

export default function Select({
  autoFocus,
  errorMessage,
  isInvalid,
  label,
  placeholder,
  variant,
  value,
  onChange,
  children,
  name,
}: SelectProps) {
  return (
    <BaseSelect
      autoFocus={autoFocus}
      errorMessage={errorMessage}
      isInvalid={isInvalid}
      label={label}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      variant={variant}
    >
      {children}
    </BaseSelect>
  );
}
