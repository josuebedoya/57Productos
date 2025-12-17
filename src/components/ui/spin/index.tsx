import React, {useEffect, useRef} from 'react';
import type {el, SpinProps} from "@ui/spin/types.d.ts";
import getPosition from "@ui/spin/helpers/getPosition.ts";
import clsx from "clsx";
import {gVar} from "@/utils/gVar.ts";
import Icon from "@ui/icons/index.tsx";
import ItemSpin from "@ui/spin/components/itemSpin.tsx";
import useRotation from "@ui/spin/hooks/useRotation.tsx";

const Spin: React.FC<SpinProps> = (
  {
    items = [],
    radio = 100,
    className,
    controls = {onlyOne: false},
    sizeButtons = 'extraLarge',
    animate = true,
    classNameItem,
    rotateItem = true,
    speed = 2,
    direction = 'right',
    autoPlay = false,
    classNameContainer,
    classNameControls,
    pauseOnHover = true,
  }) => {
  const circleRef = useRef(null);
  const itemRefs = useRef<el[]>([]);

  const {start, stop, paused} = useRotation({
    circleRef,
    itemRefs,
    rotateItem,
    speed,
    direction
  });
  const icons = ['TiMediaPauseOutline', 'LiaCaretRightSolid'];

  const handlerAnimation = (action: number) => {
    if (!animate) return;
    action === 0 ? stop() : start();
  }

  useEffect(() => handlerAnimation(autoPlay ? 1 : 0), [autoPlay]);

  return (
    <div className={clsx('ui-spin', className)}>
      <div className="max-w-max max-h-max relative">
        <ul
          className={clsx('circle-packing', gVar('spin.base'), classNameContainer)}
          style={{width: `${radio * 2}px`, height: `${radio * 2}px`}}
          ref={circleRef}
          onMouseEnter={() => (pauseOnHover && autoPlay) && stop()}
          onMouseLeave={() => (pauseOnHover && autoPlay) && start()}
        >
          {items.map((item: any, i: number) => {
            const position = getPosition(i, radio, items.length);
            return (
              <ItemSpin
                key={i}
                position={{x: position.x || 0, y: position.y || 0}}
                aria-label={`spin-${i}`}
                innerRef={(el: el) => (itemRefs.current[i] = el)}
                className={clsx(classNameItem)}
              >
                {item}
              </ItemSpin>)
          })}
        </ul>
        {(controls && animate && !autoPlay) && (
          <div className={clsx('controls', gVar('spin.controls.base'), classNameControls)}>
            {((controls as Record<string, boolean>)?.onlyOne || typeof controls !== 'object') ? (
              <Icon name={!paused ? icons[0] as string : icons[1] as string}
                    className={gVar(`text.size.${sizeButtons}`)}
                    onClick={() => handlerAnimation(!paused ? 0 : 1)}
              />
            ) : (icons.map((icon, i: number) => (
              <Icon
                key={icon}
                name={icon}
                className={clsx(gVar(`text.size.${sizeButtons}`), {'text-Secondary': (!paused && !i) || (paused && i)})}
                onClick={() => handlerAnimation(i)}
              />
            )))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Spin;