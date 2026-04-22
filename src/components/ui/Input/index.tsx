import type { InputHTMLAttributes } from 'react';
import type { UseFormRegisterReturn } from 'react-hook-form';
import styles from './styles.module.css';

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
      <label htmlFor={inputId} className={styles.label}>{label}</label>
      <input id={inputId} type={type} className={styles.input} {...registration} {...rest} />
    </>
  );
}
