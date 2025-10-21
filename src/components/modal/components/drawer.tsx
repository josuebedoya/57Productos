import React from 'react';
import {gVar} from "@/utils/gVar.js";
import clsx from "clsx";
import type {ComponentModalProps, PropsSlotFooter, PropsSlotHeader} from "@/components/modal/types.js";
import HeaderModal from "@/components/modal/components/headerModal.tsx";
import FooterModal from "@/components/modal/components/footerModal.js";
import usePropsHeaderFooter from "@/components/modal/hooks/usePropsHeaderFooter.js";

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
    classNameContainer,
    ...props
  }) => {

  const orientation = ['left', 'right'].includes(position) ? 'side' :
    ['top', 'bottom'].includes(position) ? 'vertical' : 'side';

  const sizeModal = gVar(`modal.drawer.${orientation}.size.${size}`);
  const baseModal = gVar(`modal.baseComponent`);
  const {headerProps, footerProps} = usePropsHeaderFooter({
    withHeader,
    withFooter,
    footerSticky,
    headerSticky,
    footerClassName,
    headerClassName,
    ...props
  });

  return (
    <div className={clsx('drawer w-full h-full flex', gVar(`modal.drawer.position.${position}`))}>
      <div
        className={clsx('content ', baseModal, sizeModal, classNameContainer, orientation === 'side' ? 'h-full' : 'w-full')}>
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