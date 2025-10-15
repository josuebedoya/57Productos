import type {InputProps} from "@/components/input/fields/input/types.js";
import type {ButtonProps} from "@/components/button/types.js";

export interface NumberControlProps {
  onChange?: (e?: any) => void;
  inputProps?: InputProps;
  buttonProps?: ButtonProps
}