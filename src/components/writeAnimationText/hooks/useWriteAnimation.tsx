import {useEffect, useRef} from "react";

type Props = {
  text: string;
  speed: number;
  delay: number;
  infinite: boolean;
  delayRestart: number;
  onUpdate: (count: number) => void;
};

const useWriteAnimation = (
  {
    text,
    speed,
    delay,
    infinite,
    delayRestart,
    onUpdate
  }: Props): void => {
  const timers = useRef<{
    interval?: ReturnType<typeof setInterval>;
    startTimeout?: ReturnType<typeof setTimeout>;
    restartTimeout?: ReturnType<typeof setTimeout>;
  }>({});

  useEffect(() => {
    if (!text) return;

    const startAnimation = (): void => {
      let index = 0;
      onUpdate(0);

      timers.current.interval = setInterval(() => {
        index++;
        onUpdate(index);

        if (index >= text.length) {
          clearInterval(timers.current.interval);

          if (infinite) {
            timers.current.restartTimeout = setTimeout(
              startAnimation,
              delayRestart
            );
          }
        }
      }, speed);
    };

    timers.current.startTimeout = setTimeout(startAnimation, delay);

    return (): void => {
      clearInterval(timers.current.interval);
      clearTimeout(timers.current.startTimeout);
      clearTimeout(timers.current.restartTimeout);
    };

  }, [text, speed, delay, infinite, delayRestart, onUpdate]);
};

export default useWriteAnimation;
