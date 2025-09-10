import React, {FormHTMLAttributes} from "react";
import type {InputProps} from "@/components/input/fields/input/types.js";
import type {SelectProps} from "@/components/input/fields/select/types.js";
import type {TextAreaProps} from "@/components/input/fields/textarea/types.js";
import type {ButtonProps} from "@/components/button/types.js";

type FieldProps =
  | ({ type: "input" } & InputProps)
  | ({ type: "select" } & SelectProps)
  | ({ type: "textarea" } & TextAreaProps);

export interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  action: () => void;
  fields: Record<string, FieldProps>;
  buttonProps?: Record<string, ButtonProps>;
  buttonPosition?: 'left' | 'center' | 'right';
}