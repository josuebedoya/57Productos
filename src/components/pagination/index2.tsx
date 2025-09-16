import React, {useEffect, useState} from 'react';
import type {PaginateProps} from "@/components/pagination/pa.js";
import Pagination from "@/components/pagination/index.js";
import {Link} from "react-router";
import {gVar} from "@/utils/gVar.js";
import {AngleLeftIcon, AngleRightIcon} from "@/assets/icons.js";
import {usePaginate} from "@/components/pagination/usePaginate.js";

const Paginate: React.FC<PaginateProps> = (
  {
    countItems,
    query = 'pg',
    useQuery = false,
    maxPages = 9,
    defaultSelected = 19,
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
    colorActive = 'secondary',
  }
): React.ReactElement => {

  const {
    selected,
    goToBack,
    goToNext,
    fixSelected
  } = usePaginate(countItems, defaultSelected, query, maxPages);

  // Styles
  const baseClassesItems = gVar(`pagination.base.items`);
  const [classLink, setClassLink] = useState('');
  const [classLinkActive, setClassLinkActive] = useState('');
  useEffect(() => {
    const baseClasses = gVar([
      `margin.inl.${linksSpace}`,
      `rounded.${rounded}`,
      `padding.${padding}`,
    ]);

    const classesLink = gVar([
      `pagination.variant.${variant}.${color}`,
    ]);

    const classesLinkActive = gVar(`pagination.variant.${variantActive}.active.${colorActive}`) + ' active';

    setClassLink([classesLink, baseClassesItems, baseClasses].join(' '));
    setClassLinkActive(classesLinkActive);
  }, [linksSpace, rounded, variant, color, colorActive, variantActive]);

  return (
    <div className='paginate'>
      <Pagination pageCount={100}/>
      <div className='flex items-center justify-center'>
        <div className='prev' aria-label='prev' aria-disabled={selected == 0}>
          <a
            className={`link ${classLink} ${linkClassName}`}
            onClick={goToBack}
            aria-disabled={selected <= 1}
          >
            {prevLabel}{prevIcon}
          </a>
        </div>
        <div className='pages'>
          <ul className='flex flex-row gap-0.5 overflow-y-hidden overflow-x-visible'>
            {
              countItems && [...Array(maxPages)].map((_: any, i: number): React.ReactElement => (
                <>
                  <li aria-label={`Page ${i + 1}`} className={(i + 1) == selected && 'active'} key={i}>
                    <Link
                      to={`?${query}=${i + 1}`}
                      on
                      className={`link ${classLink} ${(i + 1) === selected && classLinkActive} ${linkClassName}`}
                      onClick={() => fixSelected(i + 1)}
                    >
                  <span>
                     {i + 1}
                  </span>
                    </Link>
                  </li>
                </>
              ))
            }
          </ul>
        </div>
        <div className='next' aria-label='next' aria-disabled={selected == countItems}>
          <a
            className={`link ${classLink} ${linkClassName}`}
            onClick={goToNext}
            aria-disabled={selected >= countItems}
          >
            {nextLabel}{nextIcon}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Paginate;