import React, {useEffect, useState} from 'react';
import type {StarsProps} from "@/components/stars/types.js";
import {StarIcon, StarLineIcon} from "@/assets/icons.tsx";
import clsx from "clsx";
import {gVar} from "@/utils/gVar.js";

const Stars: React.FC<StarsProps> = (
  {
    quantity = 5,
    readOnly = false,
    onChange,
    classNameStar,
    className,
    color = 'primary',
    colorActive = 'secondary',
    variant = 'solid',
    size = 'md',
  }) => {
  const [starStyles, setStarStyle] = useState<string>('');
  const [activeIndex, setActiveIndex] = useState<number>(0);

  // Handle star styles
  const handleStarStyle = (index: number): string => {
    return gVar([
      "stars.base",
      `text.size.${size}`,
      `text.color.${color}`,
      index <= activeIndex ? `stars.color.${colorActive}` : `text.color.${color}`,
    ]);
  }

  useEffect(() => {
    const starStyle = handleStarStyle(activeIndex);
    setStarStyle(starStyle);
  }, [size, color, activeIndex])

  // Handle click events
  const handleOnchangeActive = (index: number) => {
    if (readOnly) return;
    setActiveIndex(index);
    handleStarStyle(index);
    onChange && onChange(index);
  }

  return (
    <div className='stars'>
      <div className={clsx('flex gap-1 my-1', className)}>
        {[...Array(quantity)]?.map((_, i) => (
          variant === 'outlined' ?
            <StarLineIcon
              key={i}
              id={`${i}`}
              className={clsx(starStyles, classNameStar)}
              aria-label={`Star ${i}`}
              aria-disabled={readOnly}
              aria-checked={i <= activeIndex}
              onClick={() => handleOnchangeActive(i)}
            /> :
            <StarIcon
              key={i}
              id={`${i}`}
              className={clsx(starStyles, classNameStar)}
              aria-label={`Star ${i}`}
              aria-disabled={readOnly}
              aria-checked={i <= activeIndex}
              onClick={() => handleOnchangeActive(i)}
            />
        ))}
      </div>
    </div>
  );
};

export default Stars;