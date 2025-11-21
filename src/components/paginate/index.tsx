import React, {useEffect, useState} from 'react';
import ReactPaginate from "react-paginate";
import type {PaginationProps} from "./types.d.ts";
import {gVar} from "@/utils/gVar.js";
import Icon from "@ui/icons/index.js";

const Pagination: React.FC<PaginationProps> = (
  {
    pageRangeDisplayed = 2,
    breakLabel = '...',
    nextLabel = '',
    previousLabel = '',
    nextIcon = 'IoIosArrowForward',
    previousIcon = 'IoIosArrowBack',
    previousClassName = '',
    nextClassName = '',
    breakLinkClassName = '',
    activeClassName = '',
    pageLinkClassName = '',
    nextLinkClassName = '',
    previousLinkClassName = '',
    marginItems = 1,
    rounded = 'full',
    padding = 2,
    variant = 'solid',
    variantActive = 'solid',
    color = 'primary',
    colorActive = 'secondary',
    ...props
  }) => {

  const baseClassesItems = gVar(`pagination.base.items`);

  const [classLink, setClassLink] = useState('');
  const [classLinkActive, setClassLinkActive] = useState('');

  useEffect(() => {
    const baseClasses = gVar([
      `margin.inl.${marginItems}`,
      `rounded.${rounded}`,
      `padding.${padding}`,
    ]);

    const classesLink = gVar([
      `pagination.variant.${variant}.${color}`,
    ]);

    const classesLinkActive = gVar(`pagination.variant.${variantActive}.active.${colorActive}`);

    setClassLink([classesLink, baseClassesItems, baseClasses].join(' '));
    setClassLinkActive(classesLinkActive);
  }, [marginItems, rounded, variant, color, colorActive, variantActive]);

  return (
    <div className='pagination m-1 cursor-text'>
      <ReactPaginate
        renderOnZeroPageCount={null}
        pageRangeDisplayed={pageRangeDisplayed}
        marginPagesDisplayed={3}

        breakLabel={breakLabel}
        previousAriaLabel={previousLabel}
        nextAriaLabel={nextLabel}
        nextLabel={<>{nextLabel} <Icon name={previousIcon}/> </>}
        previousLabel={<><Icon name={previousIcon}/> {previousLabel}</>}

        containerClassName='flex justify-between items-center max-w-max relative overflow-y-hidden'
        disabledClassName={`disabled`}
        breakClassName={'mx-2'}
        previousClassName={`${baseClassesItems} ${previousClassName}`}
        nextClassName={`${baseClassesItems} ${nextClassName}`}
        breakLinkClassName={`flex items-center justify-center ${gVar(`text.color.${color}`)} ${breakLinkClassName}`}
        activeClassName={`active ${activeClassName}`}
        pageLinkClassName={`link ${classLink} ${pageLinkClassName}`}
        activeLinkClassName={`active [&:is(.active)]:cursor-text ${classLinkActive}`}
        nextLinkClassName={`next ${classLink} ${nextLinkClassName} ml-1`}
        previousLinkClassName={`prev ${classLink} ${previousLinkClassName} mr-1`}
        {...props}
      />
    </div>
  );
};

export default Pagination;