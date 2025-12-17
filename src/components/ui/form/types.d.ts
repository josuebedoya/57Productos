import React, {FormHTMLAttributes} from "react";
import type {InputProps} from "@ui/input/fields/input/types.js";
import type {SelectProps} from "@ui/input/fields/select/types.js";
import type {TextAreaProps} from "@ui/input/fields/textarea/types.js";
import type {ButtonProps} from "@ui/button/types.js";

type FieldProps =
  | ({ type: "input" } & InputProps)
  | ({ type: "select" } & SelectProps)
  | ({ type: "textarea" } & TextAreaProps);

type BaseProps = FormHTMLAttributes<HTMLFormElement> & {
  action: () => void;
  withButton?: boolean;
  buttonProps?: Record<string, ButtonProps>;
  buttonPosition?: 'left' | 'center' | 'right';
}

type WithChildren = BaseProps & {
  children: React.ReactNode;
  fields?: never;
};

type WithFields = BaseProps & {
  children?: never;
  fields: Record<string, FieldProps>;
};

export type FormProps = WithChildren | WithFields;