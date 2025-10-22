import React from 'react';
import HeaderModal from "@/components/modal/components/headerModal.js";
import FooterModal from "@/components/modal/components/footerModal.js";
import usePropsHeaderFooter from "@/components/modal/hooks/usePropsHeaderFooter.js";
import type {ComponentModalProps} from "@/components/modal/types.js";
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