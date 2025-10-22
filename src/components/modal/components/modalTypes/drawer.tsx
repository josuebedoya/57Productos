import React from 'react';
import {gVar} from "@/utils/gVar.js";
import clsx from "clsx";
import type {ComponentModalProps} from "@/components/modal/types.js";
import BodyModal from "@/components/modal/components/bodyModal.js";
import defaultPropsModal from '@/components/modal/configs/defaultProps.js';

const Drawer: React.FC<ComponentModalProps> = (
  {
    defaultPropsModal,
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
    children,
    withHeader,
    withFooter,
    footerSticky,
    headerSticky,
    footerClassName,
    headerClassName,
    classNameContainer: 'content ' + configsClass + '' + classNameContainer + '' + orientation === 'side' ? 'h-full' : 'w-full',
    ...props
  };

  return (
    <div className={clsx('drawer w-full h-full flex', gVar(`modal.drawer.position.${position}`))}>
      <BodyModal{...bodyProps}/>
    </div>
  );
};

export default Drawer;