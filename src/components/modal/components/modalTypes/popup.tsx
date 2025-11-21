import React from 'react';
import {gVar} from "@/utils/gVar.js";
import type {ComponentModalProps} from "@ui/modal/types.js";
import BodyModal from "@ui/modal/components/bodyModal.js";
import defaultPropsModal from '@ui/modal/configs/defaultProps.js';

const Popup: React.FC<ComponentModalProps> = (
  {
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
    children,
    ...defaultPropsModal,
    classNameContainer: configsClass + ' ' + (classNameContainer ?? ''),
    ...props
  };

  return (
    <div className='popup w-full h-full flex justify-center items-center'>
      <BodyModal{...bodyProps}/>
    </div>
  );
};

export default Popup;