import React, {useEffect, useState} from 'react';
import type {TextAreaProps} from "./types.ts";
import {gVar} from "@/utils/gVar.js";
import clsx from "clsx";

const TextArea: React.FC<TextAreaProps> = (
  {
    className = '',
    name,
    label,
    withLabel = false,
    labelClassName = '',
    color = 'primary',
    rounded = 'md',
    variant = 'solid',
    padding = 'md',
    ...rest
  }) => {

  const [textAreaStyles, setTextAreaStyles] = useState('');

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

  return (
    <div className='textarea-container w-full'>
      {(label && withLabel) && (
        <label className={clsx('label', labelClassName)} htmlFor={name}>
          {label}
        </label>
      )}
      <textarea
        className={clsx('textarea', textAreaStyles, className)}
        aria-label={`${name ?? ''}-textarea`}
        name={name}
        {...rest} />
    </div>

  );
};

export default TextArea;