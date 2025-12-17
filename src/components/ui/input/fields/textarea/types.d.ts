import {ChangeEvent, TextareaHTMLAttributes} from "react";

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  onChange: (e: ChangeEvent<HTMLTextAreaElementElement>) => void;
  name: string;
  withLabel?: boolean;
  label?: string;
  labelClassName?: string;
  rounded?: string;
  variant?: string;
  color?: string;
  padding?: string;
}