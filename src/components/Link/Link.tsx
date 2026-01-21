import type { AnchorHTMLAttributes, ReactNode } from 'react';
import styles from './Link.module.scss';

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
}

export function Link({ children, variant = 'primary', ...props }: LinkProps) {
  return (
    <a className={`${styles.link} ${styles[variant]}`} {...props}>
      {children}
    </a>
  );
}
