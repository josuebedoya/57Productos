import type {InputProps} from "@ui/input/fields/input/types.js";
import type {ButtonProps} from "@ui/button/types.js";

export interface NumberControlProps {
  onChange?: (e?: any) => void;
  value?: number;
  inputProps?: InputProps;
  buttonProps?: ButtonProps;
  className?: string;
}