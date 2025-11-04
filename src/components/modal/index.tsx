import React from "react";
import type {ModalProps} from "@/components/modal/types.js";
import ReactDOM from 'react-dom';
import Alert from "@/components/modal/components/modalTypes/alert.js";
import Popup from "@/components/modal/components/modalTypes/popup.js";
import Drawer from "@/components/modal/components/modalTypes/drawer.js";
import ContainerModal from "@/components/modal/components/containerModal.js";
import clsx from "clsx";

const Modal: React.FC<ModalProps> = (
  {
    type = 'popup', withBackground = false, animation, isOpen, onClose, position, ...props
  }) => {
  if (!type) return null;

  // Choose default animation to drawer modal
  const getPosition = (type: string = 'drawer', position: string = 'top'): Record<string, string | null> => {
    switch (type) {
      case 'drawer':
      case 'alert':
        switch (position) {
          case 'top':
          case 'top-left':
          case 'top-right':
            return {entrance: 'animate-fade-up-in', exit: 'animate-fade-down-out'};
          case 'bottom':
          case 'bottom-left':
          case 'bottom-right':
            return {entrance: 'animate-fade-down-in', exit: 'animate-fade-up-out'};
          case 'left':
            return {entrance: 'animate-fade-left-in', exit: 'animate-fade-right-out'};
          case 'right':
            return {entrance: 'animate-fade-right-in', exit: 'animate-fade-left-out'};
          default:
            return {entrance: null, exit: null};
        }
      default:
        return {entrance: null, exit: null};
    }
  }

  // Choose Component to render
  const Component = () => {
    switch (type) {
      case 'alert':
        return <Alert
          {...props}
          onClickCloseButtonHeader={onClose}
          onClickCloseButtonFooter={onClose}
          position={position}
        />;
      case 'drawer':
        return <Drawer
          {...props}
          onClickCloseButtonHeader={onClose}
          onClickCloseButtonFooter={onClose}
          position={position}
        />;
      case 'popup':
        return <Popup {...props}
          onClickCloseButtonHeader={onClose}
          onClickCloseButtonFooter={onClose}
        />;
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
      animation={animation || getPosition(type, position)}
      className={clsx(props?.className)}>
      <Component/> {/* Render Modal type*/}
    </ContainerModal>,
    document.getElementById('modal-root') as HTMLElement
  );
};

export default Modal;