const getExt = (src: string): string => {
  const url = new URL(src, window.location.origin);
  const path = url.pathname;
  return path.substring(url.pathname.lastIndexOf(".") + 1);
}

export default getExt;