import {useState} from "react";

type Props = {
  animations: { entrance: string, exit: string } & Record<Exclude<string, 'entrance' | 'exit'>, string>;
  timeDelay?: number
  fallback?: () => void
};

const useAnimatingIcon = ({animations, timeDelay = 300, fallback}: Props) => {
  const [animationClass, setAnimationClass] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  const handleAnimating = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setAnimationClass(animations.exit);

    setTimeout(() => {
      fallback && fallback();
      setAnimationClass(animations.entrance);

      // Restart animating state
      setTimeout(() => {
        setIsAnimating(false);
      }, timeDelay);
    }, timeDelay);
  };

  return {animationClass, handleAnimating};
}

export default useAnimatingIcon;