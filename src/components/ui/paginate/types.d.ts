import type {HTMLAttributes} from "react";

type CommonProps = {
  variant?: 'outline' | 'solid' | 'flat';
  variantActive?: 'outline' | 'solid' | 'flat';
  color?: string;
  colorActive?: string;
  rounded?: string;
  padding?: string | number;
  space?: 1 | 2 | 3 | 4 | 5;
}

type ItemPaginateProps = HTMLAttributes<HTMLLiElement> & CommonProps & {
  label: string;
  query: string;
  isActive?: boolean;
}

export interface PaginateProps extends CommonProps {
  query: string;
  visiblePages: number;
  totalPages: number;
  itemsPerPage?: number;
  classNameItem?: string;
  className?: string;
  onClick?: (page?: any) => void;
}