import type {ReactNode} from "react";

export interface PaginateProps {
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
  variant?: 'outline' | 'solid' | 'flat';
  variantActive?: 'outline' | 'solid' | 'flat';
  color?: string;
  colorActive?: string;
  rounded?: string;
  padding?: string;
}