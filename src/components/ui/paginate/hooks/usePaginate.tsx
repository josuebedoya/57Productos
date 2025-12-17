import React, {useCallback, useEffect, useMemo, useRef, useState} from "react";

type UsePaginateReturn = {
  selected: number;
  goToNext: () => void;
  goToBack: () => void;
  handleClick: (page: number) => void;
  maxWidth: React.CSSProperties["maxWidth"];
  position: number;
  pages: number[];
};

export function usePaginate(
  countItems: number,
  defaultSelected = 1,
  _query: any = null,
  maxPages = 10,
  pagesRef?: React.RefObject<(HTMLElement | null)[]>
): UsePaginateReturn {
  const refs = pagesRef ?? useRef<(HTMLDivElement | null)[]>([]);
  const visible = Math.max(1, Math.floor(maxPages));
  const buffer = Math.min(5, Math.max(1, Math.floor(visible / 2)));
  const totalToRender = visible + buffer * 2;

  const [selected, setSelected] = useState(
    Math.min(Math.max(1, defaultSelected), Math.max(1, countItems))
  );
  const [position, setPosition] = useState(0);
  const [maxWidth, setMaxWidth] = useState<React.CSSProperties["maxWidth"]>();

  const sum = (arr: number[]) => arr.reduce((a, b) => a + b, 0);

  const {start, end} = useMemo(() => {
    const half = Math.floor(visible / 2);
    let s = Math.max(1, selected - half - buffer);
    let e = Math.min(countItems, s + totalToRender - 1);
    s = Math.max(1, e - totalToRender + 1);
    return {start: s, end: e};
  }, [selected, countItems, visible, buffer, totalToRender]);

  const pages = useMemo(
    () => (countItems > 0 ? Array.from({length: end - start + 1}, (_, i) => start + i) : []),
    [start, end, countItems]
  );

  const recompute = useCallback(
    (sel: number = selected) => {
      const els = refs.current.filter(Boolean) as HTMLDivElement[];
      if (!els.length) return;

      const widths = els.map((el) => el.offsetWidth);
      const totalWidth = sum(widths);

      const index = pages.indexOf(sel);
      if (index === -1) return;

      // ancho total visible (todas las páginas renderizadas actualmente)
      const containerWidth = sum(widths);

      // posición del centro del elemento seleccionado
      const offsetCenter = sum(widths.slice(0, index)) + (widths[index] || 1) / 2;

      // queremos que ese centro quede justo en el medio del contenedor
      let translateX = containerWidth / 2 - offsetCenter;

      // límites (no dejar huecos en los extremos)
      const maxLeft = -(totalWidth - containerWidth);
      translateX = totalWidth <= containerWidth ? 0 : Math.min(Math.max(translateX, maxLeft), 0);

      setMaxWidth(containerWidth);
      setPosition(Math.round(translateX));
    },
    [refs, pages, selected]
  );

  useEffect(() => {
    const els = refs.current.filter(Boolean) as HTMLDivElement[];
    if (!els.length) {
      setPosition(0);
      setMaxWidth(undefined);
      return;
    }

    const ro = new ResizeObserver(() => recompute());
    els.forEach((el) => ro.observe(el));
    recompute();

    return () => ro.disconnect();
  }, [pages, selected, recompute]);

  const goToNext = useCallback(() => setSelected((p) => Math.min(p + 1, countItems)), [countItems]);
  const goToBack = useCallback(() => setSelected((p) => Math.max(p - 1, 1)), []);
  const handleClick = useCallback(
    (page: number) => {
      setSelected(page);
      requestAnimationFrame(() => recompute(page));
    },
    [recompute]
  );

  return {selected, goToNext, goToBack, handleClick, maxWidth, position, pages};
}