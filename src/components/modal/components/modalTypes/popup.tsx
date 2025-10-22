import React from 'react';
import {gVar} from "@/utils/gVar.js";
import type {ComponentModalProps} from "@/components/modal/types.js";
import BodyModal from "@/components/modal/components/bodyModal.js";
import defaultPropsModal from '@/components/modal/configs/defaultProps.js';

const Popup: React.FC<ComponentModalProps> = (
  {
    defaultProps,
    size = 'sm',
    children,
    classNameContainer,
    ...props
  }) => {

  const configsClass = gVar([
    `modal.popup.size.${size}`,
    `modal.baseComponent`
  ]);

  const bodyProps = {
    ...defaultPropsModal,
    classNameContainer: 'content ' + configsClass + ' ' + classNameContainer,
    ...props
  };

  return (
    <div className='popup w-full h-full flex justify-center items-center'>
      <BodyModal{...bodyProps}/>
    </div>
  );
};

export default Popup;