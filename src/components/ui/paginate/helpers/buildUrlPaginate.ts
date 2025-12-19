const buildUrlPaginate = (query: string, label: string): string => {
  if (!query || !label) return '';

  const pQuery = new URLSearchParams(window.location.search)
  pQuery?.set(query, label.toString());

  return `?${pQuery.toString()}`
};

export default buildUrlPaginate;