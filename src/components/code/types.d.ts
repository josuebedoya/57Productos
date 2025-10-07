import * as Icons from "@/assets/icons.tsx";
import {langs} from '@uiw/codemirror-extensions-langs';

export type IconsControllerProps = {
  active: boolean;
  icon: keyof typeof Icons;
  iconActive: keyof typeof Icons;
  isDark: boolean;
  className: string;
  fallback?: (e: any) => void;
}

export interface CodeProps {
  children: string,
  onChange: (e: any) => void,
  language?: keyof typeof langs,
  editable?: boolean
}