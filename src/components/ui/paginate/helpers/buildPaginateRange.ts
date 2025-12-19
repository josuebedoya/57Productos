type BuildPaginateRangeProps = {
  visiblePages: number;
  currentPage: number;
  itemsPerPage: number;
  totalPages: number;
}

type ResultBuildPaginateRange = {
  lengthPages: number;
  startPage: number;
}

/**
 * @totalPages: quantity total pages
 * @visiblePages: number of visible pages in the pagination
 * @itemsPerPage: items per page
 * @currentPage: current active page
 *
 * @return {lengthPages, startPage}
 */

const buildPaginateRange = (
  {
    totalPages,
    visiblePages,
    itemsPerPage,
    currentPage
  }: BuildPaginateRangeProps): ResultBuildPaginateRange => {

  const totalPagesNum = Math.max(1, Math.ceil((Number(totalPages) || Number(visiblePages)) / Number(itemsPerPage)));

  const half = Math.floor(visiblePages / 2);

  let startPage = currentPage - half;
  let endPage = currentPage + half;

  if (startPage < 1) {
    startPage = 1;
    endPage = Math.min(totalPagesNum, visiblePages);
  }

  if (endPage > totalPagesNum) {
    endPage = totalPagesNum;
    startPage = Math.max(1, totalPagesNum - visiblePages + 1);
  }

  return {
    lengthPages: (endPage - startPage + 1),
    startPage
  }
};

export default buildPaginateRange;