import React from 'react';
import {gVar} from "@/utils/gVar.js";
import clsx from "clsx";
import type {ComponentModalProps} from "@ui/modal/types.js";
import BodyModal from "@ui/modal/components/bodyModal.js";
import defaultPropsModal from '@ui/modal/configs/defaultProps.js';

const Drawer: React.FC<ComponentModalProps> = (
  {
    size = 'sm',
    position = 'left',
    children,
    classNameContainer,
    ...props
  }) => {

  const orientation = ['left', 'right'].includes(position) ? 'side' :
    ['top', 'bottom'].includes(position) ? 'vertical' : 'side';

  const configsClass = gVar([
    `modal.drawer.${orientation}.size.${size}`,
    `modal.baseComponent`
  ]);

  const bodyProps = {
    ...defaultPropsModal,
    children,
    classNameContainer: configsClass + ' ' + classNameContainer + ' ' + orientation === 'side' ? 'h-full' : 'w-full',
    ...props
  };

  return (
    <div className={clsx('drawer w-full h-full flex', gVar(`modal.drawer.position.${position}`))}>
      <BodyModal{...bodyProps}/>
    </div>
  );
};

export default Drawer;