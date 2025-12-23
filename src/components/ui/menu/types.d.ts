import type {LiHTMLAttributes} from "react";
import type {ModalProps} from "@ui/modal/types.d.ts";

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
  isMobile?: boolean;

}

export type MapMenuProps = {
  items: ItemMenuProps[];
  onSelect?: ((item?: ItemMenuProps) => void) | undefined;
  classNameItem?: string | undefined;
  classNameItemActive?: string | undefined;
  isMobile?: boolean;
  level?: number;
  animateInDropdown?: string;
}

export type MenuMobileProps = {
  items: ItemMenuProps[];
  iconMenuOpen?: string | undefined;
  modalProps?: ModalProps | undefined;
}

export interface MenuProps {
  items: ItemMenuProps[];
  orientation?: 'horizontal' | 'vertical';
  onSelect?: ((item?: ItemMenuProps) => void) | undefined;
  classNameItem?: string | undefined;
  classNameItemActive?: string | undefined;
  className?: string | undefined;
  animateInDropdown?: string;
  iconMenuOpen?: string | undefined;
  modalProps?: ModalProps | undefined;
  classNameIconOPen?: string | undefined;
}