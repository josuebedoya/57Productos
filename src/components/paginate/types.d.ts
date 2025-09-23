import type {ReactPaginateProps} from "react-paginate";
import type {ReactNode} from "react";

export interface PaginationProps extends ReactPaginateProps {
  nextIcon?: ReactNode;
  previousIcon?: ReactNode;
  variant?: 'outline' | 'solid' | 'flat';
  variantActive?: 'outline' | 'solid' | 'flat';
  color?: string;
  colorActive?: string;
  marginItems?: number | string;
  rounded?: string;
  padding?: string;
}