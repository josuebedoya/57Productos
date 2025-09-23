import type {AnchorHTMLAttributes, HTMLProps, ReactNode} from "react";

interface BaseProps {
  padding?: number | string;
  color?: string;
  variant?: 'outline' | 'solid' | 'flat';
  rounded?: string;
}

export interface PaginateProps extends BaseProps {
  countItems: number;
  query?: string;
  useQuery?: boolean;
  defaultSelected?: number;
  maxPages?: number;
  linkClassName?: string;
  linksSpace?: number | string;
  nextIcon?: ReactNode;
  nextLabel?: string;
  prevIcon?: ReactNode;
  prevLabel?: string;
  variantActive?: 'outline' | 'solid' | 'flat';
  colorActive?: string;
}

export interface PaginateItemProps
  extends HTMLProps <HTMLDivElement>, BaseProps {
  active?: boolean,
  colorActive?: string;
  variantActive?: 'outline' | 'solid' | 'flat';
  space?: number | string;
}

export interface PaginateButtonProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>, BaseProps {
  icon?: ReactNode;
  label?: any;
  directionControl?: string;
}