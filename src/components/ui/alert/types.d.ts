import type {IconProps} from "@ui/icons/types.d.ts";
import React from "react";
import type {HTMLAttributes} from "react";

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  icon?: string;
  iconProps?: IconProps;
}