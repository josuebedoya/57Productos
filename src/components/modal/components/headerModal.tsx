import React from 'react';
import clsx from "clsx";
import Button from "@ui/button/index.js";
import type {PropsSlotHeader} from "@ui/modal/types.js";

const HeaderModal: React.FC<PropsSlotHeader> = (
  {
    headerClassName,
    headerSticky = true,
    titleHeader,
    subtitleHeader,
    labelCloseButtonHeader,
    childrenHeader,
    propsCloseButtonHeader,
    withHeader = true,
    onClickCloseButtonHeader,
    closeButtonHeaderPosition = 'right',
  }) => {
  return (
    <div
      className={clsx('header p-5 border-b border-b-gray-300', headerClassName, {'sticky top-0 z-10': headerSticky})}>
      <div className={clsx('control flex', closeButtonHeaderPosition === 'right' ? 'justify-end' : 'justify-start')}>
        <Button
          variant={propsCloseButtonHeader?.variant || 'flat'}
          {...propsCloseButtonHeader}
          icon={propsCloseButtonHeader?.icon || 'IoMdClose'}
          padding={propsCloseButtonHeader?.padding || '0'}
          onClick={onClickCloseButtonHeader}>
          {labelCloseButtonHeader}
        </Button>
      </div>

      {withHeader && <>
        <div className="title-section">
          <h4 className='font-semibold mb-2'>
            {titleHeader}
          </h4>
          <p className='font-medium'>
            {subtitleHeader}
          </p>
        </div>
        <div className="slot">
          {childrenHeader}
        </div>
      </>}
    </div>
  );
};

export default HeaderModal;