import ReactPaginate from "react-paginate";
import { AngleRightIcon, AngleLeftIcon } from "@/resources/icons.jsx";
import { useState } from "react";

const Pagination = ( {
                       items, itemsPerPage, nextPage, prevPage, iconPrev, iconNext,
                       classLink = 'text-base', activeClass = 'text-Secondary font-bold', classDots = 'text-Secondary',
                       labelPrev = '', labelNext = ''} ) => {

   const pageCount = Math.ceil( items.length / itemsPerPage );
   const [ selected, setSelected ] = useState( 1 );

   const handlePage = ( event ) => {
     let currentSelected = event.selected;
     event.selected > selected
      ? nextPage( currentSelected + 1 )
      : prevPage( currentSelected + 1 );

     setSelected( currentSelected );
   };

   return (
    <div className='pagination'>
      <ReactPaginate
       breakLabel="..."
       nextLabel={<>{labelNext} {iconNext || <AngleRightIcon />}</>}
       previousLabel={<>{iconPrev || <AngleLeftIcon />} {labelPrev}</>}
       nextLinkClassName='flex items-center justify-center'
       previousLinkClassName='flex items-center justify-center'
       onPageChange={ handlePage }
       pageRangeDisplayed={ 4 }
       pageCount={ pageCount }
       renderOnZeroPageCount={ null }
       activeClassName={ `active ${ activeClass }` }
       pageLinkClassName={ `link ${ classLink }` }
       containerClassName='flex gap-4'
       previousClassName='flex items-center justify-center'
       nextClassName='flex items-center justify-center'
       breakLinkClassName={`${classDots} flex items-center justify-center`}
      />
    </div>
   );
 };

export { Pagination };