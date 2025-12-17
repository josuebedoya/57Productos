import React, {useState} from "react";
import clsx from "clsx";
import useWriteAnimation from "@/components/writeAnimationText/hooks/useWriteAnimation.tsx";
import type {WriteAnimationTextProps} from "@/components/writeAnimationText/types.d.ts";

const WriteAnimationText: React.FC<WriteAnimationTextProps> = (
  {
    text,
    speed = 50,
    className,
    activeClassName,
    animationIn = 'animate-fade-up-in',
    writer = 'word',
    infinite = false,
    delay = 0,
    delayRestart = 1000,
    ...props
  }) => {
  const [visibleCount, setVisibleCount] = useState<number>(0);
  if (!text) return;

  useWriteAnimation({
    text,
    speed,
    delay,
    infinite,
    delayRestart,
    onUpdate: setVisibleCount
  });
  return (
    <div
      className={clsx("write-animation-text flex", className)}
      {...props}
    >
      {text.split(writer === "word" ? " " : "")
        .map((value: string, index: number) => (
          <span
            key={`${writer}-${index}`}
            className={clsx(
              "item",
              index < visibleCount && ["visible", activeClassName, animationIn],
              index >= visibleCount && "opacity-0"
            )}
            aria-label={`Animate item ${index + 1}`}
          >
        {writer === "word" ? `${value}\u00A0` : value?.trim() ? value : '\u00A0'}
      </span>
        ))}
    </div>
  );
};

export default WriteAnimationText;
