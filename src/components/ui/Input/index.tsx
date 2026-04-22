import type { InputHTMLAttributes } from 'react';
import type { UseFormRegisterReturn } from 'react-hook-form';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  registration?: UseFormRegisterReturn;
};

export function Input({
  label,
  type = 'text',
  registration,
  id,
  ...rest
}: InputProps) {
  const inputId = id ?? registration?.name;

  return (
    <>
      <label htmlFor={inputId}>{label}</label>
      <input id={inputId} type={type} {...registration} {...rest} />
    </>
  );
}
