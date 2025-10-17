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