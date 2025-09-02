import {ChangeEvent, InputHTMLAttributes, ReactNode} from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  rounded?: string;
  variant?: 'solid' | 'outline' | 'flat';
  color?: string;
  padding?: string;
  iconCheckbox?: ReactNode;
  showValueInRange?: boolean;
  dualRange?: boolean;
  sizeValueRange?: string;
  colorInactiveRange?: string;
  colorPointRange?: string;
}