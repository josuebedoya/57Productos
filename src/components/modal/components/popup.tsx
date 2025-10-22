import React from 'react';
import {gVar} from "@/utils/gVar.js";
import type {ComponentModalProps} from "@/components/modal/types.js";
import BodyModal from "@/components/modal/components/bodyModal.js";

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

  const configsClass = gVar([
    `modal.popup.size.${size}`,
    `modal.baseComponent`
  ]);

  const bodyProps = {
    children,
    withHeader,
    withFooter,
    footerSticky,
    headerSticky,
    footerClassName,
    headerClassName,
    classNameContainer: 'content ' + configsClass + '' + classNameContainer,
    ...props
  };

  return (
    <div className='popup w-full h-full flex justify-center items-center'>
      <BodyModal{...bodyProps}/>
    </div>
  );
};

export default Popup;