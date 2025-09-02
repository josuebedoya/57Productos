import React, {useEffect, useState} from 'react';
import type {InputProps} from "@/components/input/fields/input/types.js";
import {gVar} from "@/utils/gVar.js";

const Range: React.FC<InputProps> = ({className = '', ...props}) => {

  const [lineActiveStyles, setLineActiveStyles] = useState('');
  const [lineInactiveStyles, setLineInactiveStyles] = useState('');
  const [pointStyles, setPointStyles] = useState('');
  const [valueStyles, setValueStyles] = useState('');
  const [positionPoint, setPositionPoint] = useState(0);

  const {
    color = 'primary',
    colorInactiveRange = 'primary',
    colorPointRange = 'primary',
    rounded = 'full',
    variant = 'solid',
    sizeValueRange = 'md',
    min = 0,
    max = 100,
    step = 5,
    value = Math.floor((Number(props.max) || 0) / 2)
  } = props || {};

  // Update style class
  useEffect(() => {
    const base = gVar(['input.range.base', `input.range.rounded.${rounded}`]);

    const activeLine = gVar([
      `input.range.variant.${variant}.${color}`,
    ]);

    const inactiveLine = gVar([
      `input.range.variant.${variant}.${colorInactiveRange}`,
      'opacity-50'
    ]);

    const point = gVar([
      `input.range.variant.${variant}.${colorPointRange}`,
    ]);

    const valueStyles = gVar([
      `text.size.${sizeValueRange}`,
      `text.color.${color}`
    ]);

    setLineActiveStyles([base, activeLine].join(' '));
    setLineInactiveStyles([base, inactiveLine].join(' '));
    setPointStyles([base, point].join(' '));

    setValueStyles(valueStyles);
  }, [props]);

  // Update Position points
  useEffect(() => {

    const parts = 100 / Number(max);
    const wB = parts * Number(value) || 0;

    setPositionPoint(wB)

  }, [value]);

  return (
    <div className='range-input flex flex-col justify-center items-center w-full'>
      <div className='relative w-full flex justify-start items-center'>
        <input
          name={props.name ?? 'range'}
          type='range'
          className={`range ${className} w-full h-auto bg-transparent appearance-none`}
          min={min}
          max={max}
          step={step}
          value={value}
          {...props}
        />
        <div
          className={`${lineActiveStyles} h-2 z-10 active-line border-r-0`}
          style={{width: `${positionPoint}%`}}
        />
        <div className={`${lineInactiveStyles} w-full h-2 z-0 inactive-line border-l-0`}/>
        <div
          className={`${pointStyles} w-5 h-5 -translate-x-2.5 z-50 point border-2 min-h-5`}
          style={{left: `${positionPoint}%`}}
        />
      </div>
      <small className={`font-semibold mt-2 ${valueStyles}`}>{props.name} {value}</small>
    </div>
  );
};

export default Range;