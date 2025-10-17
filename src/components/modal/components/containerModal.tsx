import React, {useEffect, useState} from 'react';
import type {ContainerModalProps} from '@/components/modal/types.d.ts';
import clsx from 'clsx';
import Body from '@/components/body/index.tsx';
import {gVar} from "@/utils/gVar.js";

const ContainerModal: React.FC<ContainerModalProps> = (
  {
    className,
    isOpen,
    animation,
    withBackground = false,
    children,
    type = 'popup'
  }) => {
  const [show, setShow] = useState<boolean>(isOpen);

  useEffect(() => {
    if (!isOpen) return;

    setShow(true);
  }, [isOpen]);

  const handleAnimationEnd = () => {
    if (!isOpen && show) {
      setShow(false);
    }
  };

  if (!show) return null;
  return (
    <div
      className={clsx(isOpen ? animation?.entrance || 'animate-fade-in' : animation?.exit || 'animate-fade-out', className)}
      onAnimationEnd={handleAnimationEnd}>
      <Body className={clsx(gVar('modal.base'), {'bg-black/70 ': withBackground || type === 'popup'})}>
        <div className='modal w-full h-full bg-transparent'>
          {children}
        </div>
      </Body>
      <style>{`#modal-root{position:absolute; inset:0; width:100%;height:100%;z-index:999999;}
               #modal-root .body .modal *{pointer-events:auto;}
               `}
      </style>
    </div>
  );
};

export default ContainerModal;