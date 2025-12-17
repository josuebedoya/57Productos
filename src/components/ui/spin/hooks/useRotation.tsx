import {useRef, useState} from "react";
import type {UseRotationProps, el} from "@ui/spin/types.d.ts";

const useRotation = ({circleRef, rotateItem, itemRefs, speed, direction = 'left'}: UseRotationProps) => {
  const angleRef = useRef<number>(0);
  const intervalRef = useRef<number | null>(null);
  const [paused, setPaused] = useState<boolean>(true);

  const rotate = (el: el, left: boolean) => {
    if (el || !paused) {
      const vAngle = (angleRef.current % 360);
      const angle = left ? -vAngle : vAngle;
      el.style.transform = `rotate(${angle}deg)`;
    }
  };

  const rotation = () => {
    const left = direction === 'left';

    if (circleRef?.current) rotate(circleRef.current, left);

    if (rotateItem) {
      itemRefs?.current.forEach((el: el) => {
          if (el) rotate(el, !left);
        }
      );
    }
  }

  const start = () => {
    setPaused(false);

    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        const maxSpeed = Math.min(speed, 8);
        angleRef.current += maxSpeed;
        rotation();
      }, 30);

    }
  };

  const stop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setPaused(true);
  }

  return {rotation, start, stop, paused};
}

export default useRotation;