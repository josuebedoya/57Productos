import React, {type LiHTMLAttributes} from "react";

type controls = {
  onlyOne: boolean,
}

type configRotation = {
  rotateItem?: boolean;
  speed?: number;
  direction?: 'left' | 'right';
}

export type el = React.RefObject<HTMLElement | null>;

export interface ItemSpinProps extends LiHTMLAttributes<HTMLLIElement> {
  children: React.ReactNode;
  position: { x: number; y: number; };
  innerRef?: (el: el) => void;
}

export interface SpinProps extends configRotation {
  items: any[];
  radio: number;
  className?: string;
  classNameContainer?: string;
  controls?: boolean | controls;
  sizeButtons?: 'sm' | 'md' | 'lg' | 'xl' | 'extraLarge';
  animate?: boolean;
  classNameItem?: string;
  autoPlay?: boolean;
  classNameControls?: string;
  pauseOnHover?: boolean;
}

export interface UseRotationProps extends configRotation {
  circleRef: el;
  itemRefs: React.RefObject<el[]>;
}