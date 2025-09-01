import {SelectHTMLAttributes, ChangeEvent, ReactNode} from "react";

interface OptionsProps {
  label: string;
  value: string | number;
  disabled?: boolean;
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  options: OptionsProps[];
  defaultValue?: string | number;
  variant?:string,
  color?:string,
  rounded?:string,
  icon?: ReactNode,
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}
