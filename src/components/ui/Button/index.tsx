import type { ButtonHTMLAttributes } from 'react';

import styles from './styles.module.css';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: React.ReactNode;
  color?: 'green' | 'red';
};

export function Button({ icon, color = 'green', ...rest }: ButtonProps) {
  return (
    <button className={`${styles.button} ${color ? styles[color] : ''}`} {...rest}>
      {icon}
    </button>
  );
}
