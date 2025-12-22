import useUrl from "@/hooks/useUrl.tsx";

const getActiveItem = (url: string): boolean => {
  const {pathname} = useUrl();

  const partsUrl = url.split('/').filter(Boolean);

  return partsUrl.includes(url) || pathname === url;
}

export default getActiveItem;