interface OptionsProps {
  label?: string;
  value: string | number;
  disabled?: boolean;
  classes?: string;
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  options: OptionsProps[];
  value: string | number;
  defaultValue?: string | number;
  classes: string
};
