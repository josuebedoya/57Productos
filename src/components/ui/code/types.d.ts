import {langs} from '@uiw/codemirror-extensions-langs';
import React from "react";

export type IconsControllerProps = {
  label?: string;
  children?: React.ReactNode;
  active: boolean;
  icon: string;
  iconActive:string;
  isDark: boolean;
  className: string;
  fallback?: (e: any) => void;
}

export interface CodeProps {
  children: string;
  onChange: (e: any) => void;
  langsToUse?: string[];
  language?: keyof typeof langs;
  editable?: boolean;
}