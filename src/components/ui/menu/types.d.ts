import type {LiHTMLAttributes} from "react";

type ItemMenuProps = LiHTMLAttributes<HTMLAnchorElement> & {
  label?: string;
  link: string;
  icon?: string;
  classNameActive?: string | undefined;
  target?: '_self' | '_blank' | '_parent' | '_top';
  subItems?: ItemMenuProps[];
}

export type RepeaterMenuProps = MenuProps & {
  level?: number;
}

export interface MenuProps {
  items: ItemMenuProps[];
  orientation?: 'horizontal' | 'vertical';
  onSelect?: ((item?: ItemMenuProps) => void) | undefined;
  classNameItem?: string | undefined;
  classNameItemActive?: string | undefined;
  className?: string | undefined;
  animateInDropdown?: string;
}