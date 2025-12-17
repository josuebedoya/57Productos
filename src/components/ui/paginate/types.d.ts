import type {ReactPaginateProps} from "react-paginate";
import type {ReactNode} from "react";

export interface PaginationProps extends ReactPaginateProps {
  nextIcon?: string;
  previousIcon?: string;
  variant?: 'outline' | 'solid' | 'flat';
  variantActive?: 'outline' | 'solid' | 'flat';
  color?: string;
  colorActive?: string;
  marginItems?: number | string;
  rounded?: string;
  padding?: string;
}