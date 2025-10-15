import type {ReactNode, ButtonHTMLAttributes} from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  icon?: string;
  iconRight?: boolean;
  classes?: string;
  padding?: string;
  size?: string;
  variant?: string;
  variantHover?: string;
  color?: string;
  colorHover?: string;
  rounded?: string;
  noStyles?: boolean;
}