import type { ReactNode, ReactElement, ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  icon?: ReactElement;
  iconRight?: boolean;
  classBtn?: string;
  btnText?: boolean;
}