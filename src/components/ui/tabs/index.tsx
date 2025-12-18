import React, {useState} from 'react';
import type {TabsProps} from "@ui/tabs/types.js";
import clsx from "clsx";
import Icon from "@ui/icons/index.js";

const Tabs: React.FC<TabsProps> = (
  {
    items,
    defaultActiveIndex = 0,
    classNameWrapper,
    classNameHeader,
    classNameItemHeader,
    classNameItemHeaderActive,
    classNameBody,
    classNameItemBody,
    ...props
  }) => {

  const [activeIndex, setActiveIndex] = useState<number>(defaultActiveIndex);

  const handlerTabChange = (index: number) => {
    setActiveIndex(index);
  }

  const activeItem = items?.find((_, i) => i === activeIndex);

  return (
    <div className={clsx('tabs-wrapper', classNameWrapper)}>
      <div className="tabs-conten" {...props}>
        <div className={clsx('tabs-header flex gap-2', classNameHeader)}>
          {
            items?.map(({label, iconLabel}, i) => (
              <div
                key={i}
                className={clsx('tab-header cursor-pointer', classNameItemHeader, i === activeIndex && ['active', classNameItemHeaderActive])}
                data-active={i === activeIndex}
                onClick={() => handlerTabChange(i)}
              >
                {iconLabel && <Icon name={iconLabel}/>}
                <div className='label'>{label}</div>
              </div>
            ))
          }
        </div>
        <div className={clsx('tabs-body transition-[height] duration-500', classNameBody)}>
          {activeItem && (
            <div className={clsx('tab-body', classNameItemBody, 'active')}
                 aria-hidden={false}> {activeItem.content} </div>)
          }
        </div>
      </div>
    </div>
  );
};

export default Tabs;