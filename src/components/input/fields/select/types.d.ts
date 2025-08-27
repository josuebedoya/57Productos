import {SelectHTMLAttributes, ChangeEvent} from "react";

interface OptionsProps {
  label?: string;
  value: string | number;
  disabled?: boolean;
  classes?: string;
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  options: OptionsProps[];
  defaultValue?: string | number;
  classes: string
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}
