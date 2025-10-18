import type {ModalProps} from "@/components/modal/types.js";
import React, {useLayoutEffect, useState} from "react";
import ReactDOM from 'react-dom';
import Alert from "@/components/modal/components/alert.js";
import Popup from "@/components/modal/components/popup.js";
import Drawer from "@/components/modal/components/drawer.js";
import ContainerModal from "@/components/modal/components/containerModal.js";

const Modal: React.FC<ModalProps> = (
  {
    type = 'popup', withBackground = false, animation, isOpen, onClose, ...props
  }) => {
  if (!type) return null;

  // Choose Component to render
  const Component = () => {
    switch (type) {
      case 'alert':
        return <Alert {...props}/>;
      case 'drawer':
        return <Drawer
          {...props}
          show={isOpen}
          onClickCloseButtonHeader={onClose}
          onClickCloseButtonFooter={onClose}
        />;
      case 'popup':
        return <Popup {...props}/>;
      default:
        return null;
    }
  };

  if (!Component) return null;
  return ReactDOM.createPortal(
    <ContainerModal
      isOpen={isOpen}
      type={type}
      withBackground={type === 'popup' || withBackground}
      animation={animation as Record<'entrance' | 'exit', string>}>
      <Component/> {/* Render Modal type*/}
    </ContainerModal>,
    document.getElementById('modal-root') as HTMLElement
  );
};

export default Modal;