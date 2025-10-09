import {ChangeEvent, InputHTMLAttributes, ReactNode} from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onChange2?: (e: ChangeEvent<HTMLInputElement>) => void;
  value2?: number | string;
  nameValueInRange?: string;
  rounded?: string;
  variant?: 'solid' | 'outline' | 'flat';
  color?: string;
  padding?: string;
  iconCheckbox?: string;
  showValueInRange?: boolean;
  dualRange?: boolean;
  sizeValueRange?: string;
  colorInactiveRange?: string;
  colorPointRange?: string;
  withLabel?: boolean;
  label?: string;
  labelClassName?: string;
  patternSeparator?: string;
}