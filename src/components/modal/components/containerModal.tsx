import React, {useEffect, useState} from 'react';
import type {ContainerModalProps} from '@ui/modal/types.d.ts';
import clsx from 'clsx';
import Body from '@ui/body/index.tsx';
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
      setTimeout(() => {
        setShow(false);
      }, 500);
    }
  };

  if (!show) return null;
  return (
    <div
      className={clsx('overflow-hidden w-full h-full max-w-full max-h-full rounded-none z-modal fixed', {'bg-black/70 ': withBackground || type === 'popup'},
        isOpen ? 'animate-fade-in' : 'animate-fade-out')}
    >
      <div
        className={clsx(isOpen ? animation?.entrance || 'animate-fade-in' : animation?.exit || 'animate-fade-out', className,
          'w-full h-full')}
        onAnimationEnd={handleAnimationEnd}>
        <Body className={clsx(gVar('modal.base'))}>
          <div className='modal w-full h-full bg-transparent'>
            {children}
          </div>
        </Body>
        <style>{`#modal-root{position:absolute; inset:0; width:100%;height:100%;z-index:999999;}
               #modal-root .body .modal *{pointer-events:auto;}
               `}
        </style>
      </div>
    </div>
  );
};

export default ContainerModal;