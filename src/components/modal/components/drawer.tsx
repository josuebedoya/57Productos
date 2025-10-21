import React from 'react';
import {gVar} from "@/utils/gVar.js";
import clsx from "clsx";
import type {ComponentModalProps, PropsSlotFooter, PropsSlotHeader} from "@/components/modal/types.js";
import HeaderModal from "@/components/modal/components/headerModal.tsx";
import FooterModal from "@/components/modal/components/footerModal.js";

const Drawer: React.FC<ComponentModalProps> = (
  {
    position = 'left',
    size = 'sm',
    children,
    headerClassName = 'bg-white',
    headerSticky = true,
    footerSticky = true,
    footerClassName = 'bg-white',
    withFooter = false,
    withHeader = true,
    ...props
  }) => {

  const orientation = ['left', 'right'].includes(position) ? 'side' :
    ['top', 'bottom'].includes(position) ? 'vertical' : 'side';

  const sizeModal = gVar(`modal.drawer.${orientation}.size.${size}`);
  const headerProps = {
    headerClassName,
    headerSticky,
    withHeader,
    titleHeader: props?.titleHeader,
    subtitleHeader: props?.subtitleHeader,
    labelCloseButtonHeader: props?.labelCloseButtonHeader,
    onClickCloseButtonHeader: props?.onClickCloseButtonHeader,
    propsCloseButtonHeader: props?.propsCloseButtonHeader,
    childrenHeader: props?.childrenHeader,
    closeButtonHeaderPosition: props?.closeButtonHeaderPosition
  } as PropsSlotHeader;

  const footerProps = {
    withFooter,
    footerClassName,
    footerSticky,
    childrenFooter: props?.childrenFooter,
    subtitleFooter: props?.subtitleFooter,
    titleFooter: props?.titleFooter,
    onClickActionButtonFooter: props?.onClickActionButtonFooter,
    actionButtonFooter: props?.actionButtonFooter,
    labelActionButtonFooter: props?.labelActionButtonFooter,
    propsActionButtonFooter: props?.propsActionButtonFooter,
    propsCloseButtonFooter: props?.propsCloseButtonFooter,
    labelCloseButtonFooter: props?.labelCloseButtonFooter,
    onClickCloseButtonFooter: props?.onClickCloseButtonFooter
  } as PropsSlotFooter;

  return (
    <div className={clsx('drawer w-full h-full flex', gVar(`modal.drawer.position.${position}`))}>
      <div
        className={clsx('content bg-white flex flex-col overflow-auto relative transition-transform duration-500',
          sizeModal, orientation === 'side' ? 'h-full' : 'w-full')}>
        <HeaderModal {...headerProps}/>
        <div className="body flex-auto p-5">
          {children}
        </div>
        <FooterModal {...footerProps} />
      </div>
    </div>
  );
};

export default Drawer;