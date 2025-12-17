import React from 'react';
import HeaderModal from "@ui/modal/components/headerModal.js";
import FooterModal from "@ui/modal/components/footerModal.js";
import usePropsHeaderFooter from "@ui/modal/hooks/usePropsHeaderFooter.js";
import type {ComponentModalProps} from "@ui/modal/types.js";
import clsx from "clsx";

const BodyModal: React.FC<ComponentModalProps> = ({children, ...props}) => {

  const {headerProps, footerProps} = usePropsHeaderFooter({...props});

  return (
    <div className={clsx('content', props?.classNameContainer)}>
      <HeaderModal {...headerProps}/>
      <div className="body flex-auto p-5">
        {children}
      </div>
      <FooterModal {...footerProps} />
    </div>
  );
};

export default BodyModal;