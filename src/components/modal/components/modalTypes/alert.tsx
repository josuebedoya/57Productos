import React from 'react';
import {gVar} from "@/utils/gVar.js";
import clsx from "clsx";
import type {ComponentModalProps} from "@/components/modal/types.js";
import BodyModal from "@/components/modal/components/bodyModal.js";
import defaultPropsModal from "@/components/modal/configs/defaultProps.js";

const Alert: React.FC<ComponentModalProps> = (
  {
    position = 'top-right',
    children,
    classNameContainer,
    ...props
  }
) => {

  const configsClass = gVar(`modal.baseComponent`);

  const bodyProps = {
    ...defaultPropsModal,
    children,
    classNameContainer: configsClass + ' ' + classNameContainer + ' max-w-max max-h-max',
    ...props
  };

  return (
    <div className={clsx('alert w-full h-full flex', gVar(`modal.alert.position.${position}`))}>
      <BodyModal{...bodyProps}/>
    </div>
  );
};

export default Alert;