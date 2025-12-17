import React from "react";
import type {ModalProps} from "@ui/modal/types.js";
import ReactDOM from 'react-dom';
import Alert from "@ui/modal/components/modalTypes/alert.js";
import Popup from "@ui/modal/components/modalTypes/popup.js";
import Drawer from "@ui/modal/components/modalTypes/drawer.js";
import Dropdown from "@ui/modal/components/modalTypes/dropdown.js";
import ContainerModal from "@ui/modal/components/containerModal.js";
import getAnimationModal  from "@ui/modal/helpers/getAnimationModal.ts";
import clsx from "clsx";

const Modal: React.FC<ModalProps> = (
  {
    type = 'popup', withBackground = false, animation, isOpen, onClose, position, ...props
  }) => {
  if (!type) return null;

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
      case 'dropdown':
        return <Dropdown {...props}
          onClose={onClose}
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
      animation={animation || getAnimationModal(type, position)}
      className={clsx(props?.className)}>
      <Component/>
    </ContainerModal>,
    document.getElementById('modal-root') as HTMLElement
  );
};

export default Modal;