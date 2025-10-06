import * as Icons from "@/assets/icons.tsx";

export type IconsControllerProps = {
  active: boolean;
  icon: keyof typeof Icons;
  iconActive: keyof typeof Icons;
  isDark: boolean;
  className: string;
  fallback?: (e: any) => void;
}