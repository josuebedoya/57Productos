import type {LiHTMLAttributes} from "react";

type ItemMenuProps = LiHTMLAttributes<HTMLLIElement> & {
  label?: string;
  link: string;
  icon?: string;
  classNameActive?: string | undefined;
  target?: '_self' | '_blank' | '_parent' | '_top';
}

export interface MenuProps {
  items: ItemMenuProps[];
  orientation?: 'horizontal' | 'vertical';
  onSelect?: (item?: ItemMenuProps) => void;
  classNameItem?: string | undefined;
  classNameItemActive?: string | undefined;
  className?: string | undefined;
}