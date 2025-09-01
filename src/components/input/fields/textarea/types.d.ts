import {ChangeEvent, TextareaHTMLAttributes} from "react";

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  onChange: (e: ChangeEvent<HTMLTextAreaElementElement>) => void;
  rounded?: string;
  variant?: string;
  color?: string;
  padding?: string;
}