import React, { useEffect, useRef, useState } from "react";
import { Pause, TriangleRight } from "@/resources/icons.jsx";

const Spin = ({items = [], classItem = 'w-12 h-12', radio = 100, autoPlay = false, withButton = true, classBtn = '', directionLeft = true,
                speed = 2, playHover = true, pauseHover = false, border = 'border border-Primary', rotateItem = false }) => {

  const [pause, setPause] = useState(false);
  const spinRef = useRef(null);
  const intervalRef = useRef(null);
  const angleRef = useRef(0);
  const itemRefs = useRef([]);

  // Declare ref to  each item
  useEffect(() => {
      itemRefs.current = items.map((_, i) => itemRefs.current[i] ?? React.createRef());
  }, [items]);

  const getPositions = (i) => {
    const angle = (i / items.length) * 360;
    return {
      x: Math.cos((angle * Math.PI) / 180) * radio,
      y: Math.sin((angle * Math.PI) / 180) * radio
    };
  };

  const updateRotation = () => {
    const angle = angleRef.current;

    if (spinRef.current) {
      spinRef.current.style.transform = `rotate(${directionLeft ? '-' : ''}${angle}deg)`;
    }

    if (rotateItem) {
      itemRefs.current.forEach(ref => {
        if (ref?.current) {
          ref.current.style.transform = `rotate(${directionLeft ? '' : '-'}${angle}deg)`;
        }
      });
    }
  };

  const startAnimation = () => {
    setPause(false);

    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        const effectiveSpeed = Math.min(speed, 5);
        angleRef.current = (angleRef.current + effectiveSpeed) % 360;
        updateRotation();
      }, 30);
    }
  };

  const stopAnimation = () => {
    setPause(true);

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    if (autoPlay) {
      setTimeout(() =>{
        startAnimation();
      }, 1000);
    }
    return () => stopAnimation();
  }, []);

  return (
   <div className="w-full h-auto flex justify-center items-center">
     <div
      ref={spinRef}
      onMouseEnter={() => {
        if (playHover && !autoPlay) startAnimation();
        if (pauseHover && autoPlay) stopAnimation();
      }}
      onMouseLeave={() => {
        if (playHover && !autoPlay) stopAnimation();
        if (pauseHover && autoPlay) startAnimation();
      }}
      className={`content-spins relative flex justify-center items-center rounded-full ${border}`}
      style={{ height: `${radio * 2}px`, width: `${radio * 2}px` }}
     >
       {items.map((item, i) => {
         const position = getPositions(i);
         return (
          <div
           key={i}
           className={`item-spin-${i} absolute`}
           style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
          >
            <div className={`hover:scale-105 ${classItem}`}>
              <div ref={itemRefs.current[i]}>
                {item}
              </div>
            </div>
          </div>
         );
       })}

       {withButton && (!playHover || autoPlay) && (
        !pause ? (
         <Pause
          onClick={() => stopAnimation()}
          classIcons={`cursor-pointer text-6xl rounded-full ${classBtn}`}
         />
        ) : (
         <TriangleRight
          onClick={() => startAnimation()}
          classIcons={`cursor-pointer text-6xl rounded-full ${classBtn}`}
         />
        )
       )}
     </div>
   </div>
  );
};

export { Spin };
