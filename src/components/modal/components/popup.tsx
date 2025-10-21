import React from 'react';
import {gVar} from "@/utils/gVar.js";
import clsx from "clsx";
import HeaderModal from "@/components/modal/components/headerModal.js";
import FooterModal from "@/components/modal/components/footerModal.js";
import type {ComponentModalProps, PropsSlotFooter, PropsSlotHeader} from "@/components/modal/types.js";

const Popup: React.FC<ComponentModalProps> = (
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
    classNameContainer,
    ...props
  }) => {

  const baseModal = gVar(`modal.baseComponent`);
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
  const sizeModal = gVar(`modal.popup.size.${size}`);

  return (
    <div className='popup w-full h-full flex justify-center items-center'>
      <div className={clsx('content', baseModal, sizeModal, classNameContainer)}>
        <HeaderModal {...headerProps}/>
        <div className="body flex-auto p-5">
          {children}
        </div>
        <FooterModal {...footerProps} />
      </div>
    </div>
  );
};

export default Popup;