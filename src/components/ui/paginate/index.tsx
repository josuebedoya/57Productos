import React, {useEffect, useState} from 'react';
import ItemPaginate from "@ui/paginate/components/itemPaginate.tsx";
import type {PaginateProps} from "@ui/paginate/types.d.ts";
import {useSearchParams} from "react-router";
import buildPaginateRange from "@ui/paginate/helpers/buildPaginateRange.ts";
import clsx from "clsx";

const Paginate: React.FC<PaginateProps> = (
  {
    query,
    visiblePages,
    totalPages,
    itemsPerPage = 1,
    classNameItem,
    className,
    onClick,
    ...props
  }) => {

  const [searchParams] = useSearchParams();
  const [currentPage, setActivePage] = useState(1);

  useEffect(() => {
    const currentPage = (searchParams.get(query) || '1');
    setActivePage(Number(currentPage));
  }, [query]);

  const {lengthPages, startPage} = buildPaginateRange({itemsPerPage, totalPages, currentPage, visiblePages})

  return (
    <div className='paginate-wrapper'>
      <ul className={clsx("max-w-max max-h-max flex relative", className)}>
        {Array.from(
          {length: lengthPages},
          (_, i) => {
            const page = startPage + i;
            return (
              <ItemPaginate
                key={page}
                label={`${page}`}
                id={`${page}`}
                query={query}
                isActive={page === currentPage}
                className={classNameItem}
                onClick={onClick}
                {...props}
              />
            );
          }
        )}
      </ul>
    </div>
  );
};

export default Paginate;