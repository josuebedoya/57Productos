import {useEffect, useState} from "react";
import {gVar} from "@/utils/gVar.js";

type Props = {
  rounded?: string;
  variant?: 'solid' | 'outline' | 'flat';
  color?: string;
  padding?: string;
}

const useInputStyles = ({...props}: Props): Record<string, string> => {
  const [stylesClass, setStylesClass] = useState('');

  // Update style class
  useEffect(() => {
    const stylesClass = gVar([
      'input.base',
      `rounded.${props.rounded}`,
      `input.padding.${props.padding}`,
      `input.variant.${props.variant}.${props.color}`,
    ]);

    setStylesClass(stylesClass);
  }, [props]);

  return {stylesClass};
}

export default useInputStyles;