import React from "react";
import type {ButtonProps} from "@ui/button/types.js";

type PropsSlotHeader = {
  withHeader?: boolean;
  childrenHeader?: React.ReactNode;
  headerSticky?: boolean;
  headerClassName?: string;
  titleHeader?: string;
  subtitleHeader?: string;
  labelCloseButtonHeader?: string;
  onClickCloseButtonHeader?: (e?: any) => void;
  closeButtonHeaderPosition?: "left" | "right";
  propsCloseButtonHeader?: ButtonProps;
};

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
};

type TypeModal = "alert" | "drawer" | "popup";

type PositionDrawer = "left" | "right" | "top" | "bottom";
type PositionAlert = | "center" | "top" | "bottom" | "top-left" | "top-right" | "bottom-left" | "bottom-right";
type PositionModal = PositionDrawer | PositionAlert | undefined;

export interface ContainerModalProps {
  isOpen: boolean;
  children?: React.ReactNode;
  animation?: Record<"entrance" | "exit", string | null>;
  withBackground?: boolean;
  className?: string;
  type?: TypeModal;
}

export interface ComponentModalProps extends PropsSlotHeader, PropsSlotFooter {
  position?: PositionModal;
  size?: "sm" | "md" | "lg" | "xl" | "full" | (string);
  children?: React.ReactNode;
  classNameContainer?: string;
}

type CommonModalProps = ComponentModalProps & {
  children?: React.ReactNode;
  className?: string;
  type: TypeModal;
  isOpen: boolean;
  onClose: () => void;
  withBackground?: boolean;
  animation?: Record<"entrance" | "exit", string | null>;
};

export type ModalProps =
  | (CommonModalProps) & {
  withHeader: true;
  withFooter: true;
} | (CommonModalProps) & {
  withHeader: true;
  withFooter?: false;
} | (CommonModalProps) & {
  withHeader?: false;
  withFooter: true;
};