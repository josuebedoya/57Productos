import type {ReactNode, HTMLAttributes} from "react";

export interface TooltipProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  content: any;
  position?: 'top' | 'bottom' | 'left' | 'right' | 'center' | 'corner-1' | 'corner-2' | 'corner-3' | 'corner-4';
  spaceY?: number;
  spaceX?: number;
  tooltipClass?: string;
  contentClass?: string;
  withArrow?: boolean;
  dark?: boolean;
  delayShow?: number | string;
  variant?: 'solid' | 'outline';
  color?: string;
}