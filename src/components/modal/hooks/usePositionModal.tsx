import React from "react";

export type refEl = React.RefObject<HTMLElement | null>;
type Res = { x: number; y: number; };

const usePositionModal = (el: refEl, parentId: string | number): Res => {
  const parentEl = document.querySelector(`#${parentId}[role='parent']`);
  if (!el.current || !parentEl) return {x: 0, y: 0};

  const anchorRect = parentEl.getBoundingClientRect();
  return {
    x: anchorRect.left + window.scrollX,
    y: anchorRect.bottom + window.scrollY
  };
};

export default usePositionModal;