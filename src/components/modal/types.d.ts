import React from "react";
import type {ButtonProps} from "@/components/button/types.js";

type PropsSlotHeader = {
  withHeader?: boolean;
  childrenHeader?: React.ReactNode;
  headerSticky?: boolean;
  headerClassName?: string;
  titleHeader?: string;
  subtitleHeader?: string;
  labelCloseButtonHeader?: string;
  onClickCloseButtonHeader?: (e?: any) => void;
  propsCloseButtonHeader?: ButtonProps;
}

type PropsSlotFooter = {
  withFooter?: boolean;
  childrenFooter?: React.ReactNode;
  footerSticky?: boolean;
  footerClassName?: string;
  titleFooter?: string;
  subtitleFooter?: string;
  labelCloseButtonFooter?: string;
  onClickCloseButtonFooter?: (e?: any) => void;
  propsCloseButtonFooter?: ButtonProps;
  actionButtonFooter?: boolean;
  labelActionButtonFooter?: string;
  onClickActionButtonFooter?: (e?: any) => void;
  propsActionButtonFooter?: ButtonProps;
}

type TypeModal = 'alert' | 'drawer' | 'popup';
type PositionDrawer = 'left' | 'right' | 'top' | 'bottom';
type PositionAlert = 'center' | 'top' | 'bottom' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

export interface ContainerModalProps {
  isOpen: boolean;
  children?: React.ReactNode;
  animation?: Record<'entrance' | 'exit', string>;
  withBackground?: boolean;
  className?: string;
  type?: TypeModal;
  animationRefs?: React.RefObject<HTMLElement>[];
}

export interface ComponentModalProps extends PropsSlotFooter, PropsSlotHeader {
  show: boolean;
  position?: TypeModal extends 'drawer'
    ? PositionDrawer
    : TypeModal extends 'alert'
      ? PositionAlert
      : never;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  children?: React.ReactNode;
  animationRefs?: React.RefObject<HTMLElement>[];
  onRefsReady?: (refs: React.RefObject<HTMLElement>[]) => void;
}

export type ModalProps =
  | {
  type: TypeModal;
  withHeader: true;
  headerProps: PropsSlotHeader;
  withFooter: true;
  footerProps: PropsSlotFooter;
  withBackground?: boolean;
  animation?: Record<'entrance' | 'exit', string>;
  isOpen: boolean;
  onClose: () => void;
}
  | {
  type: TypeModal;
  withHeader: true;
  headerProps: PropsSlotHeader;
  withFooter?: false;
  withBackground?: boolean;
  animation?: Record<'entrance' | 'exit', string>;
  isOpen: boolean;
  onClose: () => void;
}
  | {
  type: TypeModal;
  withHeader?: false;
  withFooter: true;
  footerProps: PropsSlotFooter;
  withBackground?: boolean;
  animation?: Record<'entrance' | 'exit', string>;
  isOpen: boolean;
  onClose: () => void;
}
  | {
  type: TypeModal;
  withHeader?: false;
  footerProps: PropsSlotFooter;
  withFooter?: false;
  withBackground?: boolean;
  animation?: Record<'entrance' | 'exit', string>;
  isOpen: boolean;
  onClose: () => void;
};