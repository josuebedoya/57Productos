import React from 'react';
import type {PropsSlotFooter} from "@ui/modal/types.js";
import clsx from "clsx";
import Button from "@ui/button/index.js";
import {useTranslation} from "react-i18next";

const FooterModal: React.FC<PropsSlotFooter> = (
  {
    withFooter,
    footerClassName,
    childrenFooter,
    footerSticky,
    subtitleFooter,
    titleFooter,
    propsCloseButtonFooter,
    propsActionButtonFooter,
    labelActionButtonFooter,
    onClickActionButtonFooter,
    onClickCloseButtonFooter,
    labelCloseButtonFooter,
    actionButtonFooter
  }) => {

  const {t} = useTranslation();

  return (

    withFooter &&
    <div
     className={clsx('footer p-5 border-t border-t-gray-300', footerClassName, {'sticky bottom-0 z-10': footerSticky})}>
      <div className="title-section">
        <h4 className='font-semibold mb-2'>
          {titleFooter}
        </h4>
        <p className='font-medium'>
          {subtitleFooter}
        </p>
      </div>
      <div className="slot">
        {childrenFooter}
      </div>
      <div className="control flex justify-end gap-8 mt-5">
        <Button
         variantHover={propsCloseButtonFooter?.variantHover || 'outline'}
         {...propsCloseButtonFooter}
         padding={propsCloseButtonFooter?.padding || 'sm'}
         onClick={onClickCloseButtonFooter}>
          {labelCloseButtonFooter ?? t('components.modal.buttons.close')}
        </Button>
        {
          actionButtonFooter &&
         <Button
          variantHover={propsActionButtonFooter?.variantHover || 'outline'}
          {...propsActionButtonFooter}
          padding={propsActionButtonFooter?.padding || 'sm'}
          onClick={onClickActionButtonFooter}>
           {labelActionButtonFooter ?? t('components.modal.buttons.action')}
         </Button>
        }
      </div>
    </div>
  );
};

export default FooterModal;