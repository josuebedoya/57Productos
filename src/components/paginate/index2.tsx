import React, {useRef} from 'react';
import type {PaginateProps} from "@/components/pagination/type.js";
import {AngleLeftIcon, AngleRightIcon} from "@/assets/icons.tsx";
import {usePaginate} from "@/components/pagination/hooks/usePaginate.js";
import PaginateItem from "@/components/pagination/components/paginateItem.tsx";
import PaginateButton from "@/components/pagination/components/paginateButton.js";
import clsx from "clsx";

const Paginate: React.FC<PaginateProps> = (
  {
    countItems,
    query = 'pg',
    maxPages = 10,
    defaultSelected = 2,
    linksSpace = 1,
    linkClassName = '',
    nextIcon = <AngleRightIcon/>,
    prevLabel,
    prevIcon = <AngleLeftIcon/>,
    nextLabel,
    rounded = 'full',
    padding = 2,
    variant = 'solid',
    variantActive = 'solid',
    color = 'primary',
    colorActive = 'secondary'
  }
): React.ReactElement => {

  const pagesRef = useRef<(HTMLDivElement)[]>([]);

  const itemProps = {
    variant,
    padding,
    variantActive,
    color,
    colorActive,
    rounded,
    space: linksSpace
  }
  const buttonProps = {
    variant,
    padding,
    color,
    rounded
  }

  const {
    selected,
    goToBack,
    goToNext,
    handleClick,
    maxWidth,
    position
  } = usePaginate(countItems, defaultSelected, query, maxPages, pagesRef);

  return (
    <div className='paginate'>
      <div className='flex items-center justify-center'>
        <PaginateButton
          icon={prevIcon}
          label={prevLabel}
          onClick={goToBack}
          className={linkClassName}
          aria-disabled={selected <= 1}
          directionControl='prev'
          {...buttonProps}
        />

        <div className='pages overflow-hidden mx-10 bg-gray-300' aria-label='pages'>
          <div className='container transition-transform duration-500'
               style={{width: maxWidth ?? undefined}}
          >
            <ul className='flex flex-row transition-all duration-300'
                style={{transform: `translateX(${position}px)`}}
            >
              {countItems && [...Array(maxPages)].map((page, i) => (
                <PaginateItem
                  key={page}
                  ref={(el: HTMLDivElement) => (pagesRef.current[i] = el)}
                  label={page}
                  {...itemProps}
                  active={page === selected}
                  onClick={(): void => handleClick(page)}
                  className={clsx("use", linkClassName)}
                />
              ))}
            </ul>
          </div>
        </div>

        <PaginateButton
          icon={nextIcon}
          label={nextLabel}
          onClick={goToNext}
          className={linkClassName}
          aria-disabled={selected >= countItems}
          directionControl='next'
          {...buttonProps}
        />
      </div>
    </div>
  );
};

export default Paginate;