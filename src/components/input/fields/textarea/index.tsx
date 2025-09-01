import React, {useEffect, useState} from 'react';
import type {TextAreaProps} from "./types.ts";
import {gVar} from "@/utils/gVar.js";

const TextArea: React.FC<TextAreaProps> = ({className, ...rest}) => {

  const [textAreaStyles, setTextAreaStyles] = useState('');

  const {
    color = 'primary',
    rounded = 'md',
    variant = 'solid',
    padding = 'md',
  } = rest || {};

  // Update style class
  useEffect(() => {
    const selectStyles = gVar([
      'textarea.base',
      `textarea.variant.${variant}.${color}`,
      `rounded.${rounded}`,
      `textarea.padding.${padding}`
    ]);

    setTextAreaStyles(selectStyles);
  }, [rest]);
  useEffect(() => {
    console.info(textAreaStyles)
  }, [textAreaStyles]);

  return (
    <textarea
      className={`${textAreaStyles} ${className}`}
      {...rest} />
  );
};

export default TextArea;