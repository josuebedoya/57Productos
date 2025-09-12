import React, {useEffect, useState} from 'react';
import type {TooltipProps} from "./types.ts";
import {gVar} from "@/utils/gVar.ts";
import {TriangleRight} from "@/assets/icons.tsx";
import getDirection from './config.ts';
import Body from '@/components/body/index.tsx';

const Tooltip: React.FC<TooltipProps> = (
  {
    withArrow = true,
    contentClass = 'text-sm text-Primary',
    content = '',
    className = '',
    position = 'center',
    delayShow = 300,
    spaceY = 2,
    spaceX = 2,
    variant = 'solid',
    color = 'primary',
    children,
    ...props

  }) => {

  const [show, setShow] = useState(false);
  const [bodyClass, setBodyClass] = useState(`group-hover/tooltip:-translate-y-${spaceY}`);
  const [arrowClass, setArrowClass] = useState('-bottom-4 rotate-90');

  // Update position classes on position change
  useEffect(() => {
    const arrowClass = gVar([
      `tooltip.baseArrow`,
      `tooltip.position.arrow.${position}`,
      `text.color.${color}`
    ]);
    const bodyClass = gVar([
      `tooltip.base`,
      `tooltip.position.body.${position}`,
      `delay.${delayShow}`,
      `tooltip.variant.${variant}.${color}`
    ]);

    setBodyClass(bodyClass + ' ' + getDirection(position, spaceX, spaceY));
    setArrowClass(arrowClass)
  }, [position]);

  return (
    <div className={`has-tooltip ${show ? 'group/tooltip' : ''} relative flex items-center justify-center`}>
      <div className={`tooltip ${bodyClass} ${className}`} data-child='tooltip' {...props}>
         <span className='flex justify-center w-full h-full'>
           <TriangleRight className={`arrow-tooltip ${arrowClass}`}/>
        </span>
        <Body className={contentClass}>
          {content}
        </Body>
      </div>
      <Body
        data-parent='tooltip' className={contentClass}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {children}
      </Body>
    </div>
  );
};

export default Tooltip;