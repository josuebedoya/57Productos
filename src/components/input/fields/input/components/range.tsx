import React, {useEffect, useState} from 'react';
import type {InputProps} from "@ui/input/fields/input/types.js";
import {gVar} from "@/utils/gVar.js";
import clsx from "clsx";

const Range: React.FC<InputProps> = ({className = '', ...props}) => {

  const {
    name = 'range',
    label,
    withLabel,
    labelClassName,
    color = 'primary',
    colorInactiveRange = 'primary',
    colorPointRange = 'primary',
    rounded = 'full',
    variant = 'solid',
    sizeValueRange = 'md',
    dualRange = false,
    showValueInRange = false,
    onChange2 = (e: any) => console.log(e.target.value2),
    min = 0,
    max = 100,
    step = 5
  } = props || {};

  const [lineActiveStyles, setLineActiveStyles] = useState('');
  const [lineInactiveStyles, setLineInactiveStyles] = useState('');
  const [pointStyles, setPointStyles] = useState('');
  const [valueStyles, setValueStyles] = useState('');

  const [positionPointMin, setPositionPointMin] = useState(0);
  const [positionPointMax, setPositionPointMax] = useState(100);

  const [rangeValue, setRangeValueMin] = useState(dualRange ? min : Math.floor((Number(min) + Number(max)) / 2));
  const [rangeValue2, setRangeValueMax] = useState(dualRange ? max : 0);

  // Update style class
  useEffect(() => {
    const base = gVar(['input.range.base', `input.range.rounded.${rounded}`]);
    const activeLine = gVar(`input.range.variant.${variant}.${color}`);
    const point = gVar(`input.range.variant.${variant}.${colorPointRange}`);
    const inactiveLine = gVar(`input.range.variant.${variant}.${colorInactiveRange}`);
    const valueStyles = gVar([
      `text.size.${sizeValueRange}`,
      `text.color.${color}`
    ]);

    setLineActiveStyles([base, activeLine].join(' '));
    setLineInactiveStyles([base, inactiveLine].join(' '));
    setPointStyles([base, point].join(' '));
    setValueStyles(valueStyles);
  }, [rounded, color, variant, colorInactiveRange, colorPointRange, sizeValueRange]);

  // Update Position points
  useEffect(() => {

    const parts = 100 / Number(max);
    const wB = parts * Number(rangeValue) || 0;
    const wB2 = parts * Number(rangeValue2) || 0;

    setPositionPointMin(wB)
    setPositionPointMax(wB2)

  }, [rangeValue2, rangeValue, dualRange, max, min]);

  const handleValueMin = (e: any) => {
    const maximum = Number(rangeValue2);
    const newValue = e.target.value;
    const current = Number(rangeValue);

    const value = newValue < maximum ? newValue : current;
    setRangeValueMin(value);
  }

  const handleValueMax = (e: any) => {
    const minium = Number(rangeValue);
    const newValue = e.target.value;
    const current = Number(rangeValue2);

    const value = newValue > minium ? newValue : current;
    setRangeValueMax(value);
  }

  return (
    <div className='range-container w-full'>
      {(label && withLabel) && (
        <label className={`label ${labelClassName}`} htmlFor={name}>
          {label}
        </label>
      )}
      <div className='range-input flex flex-col justify-center items-center w-full'>
        <div className='controller relative w-full flex items-center'>

          <div className='lines'>
            {/* Inactive Line */}
            <div className={clsx(lineInactiveStyles, 'w-full h-2 z-0 rounded opacity-50 -top-1')}
                 aria-label='inactive-line'/>

            {/* Active Line */}
            {dualRange ? (
              <div
                className={clsx(lineInactiveStyles, 'h-2 z-10 absolute rounded -top-1')}
                aria-label='active-line'
                style={{
                  left: `${Math.min(positionPointMin, positionPointMax)}%`,
                  width: `${Math.abs(positionPointMin - positionPointMax)}%`,
                }}
              />
            ) : (
              <div
                className={clsx(lineActiveStyles, 'h-2 z-10 absolute rounded')}
                aria-label='active-line'
                style={{
                  width: `${positionPointMin}%`,
                }}
              />
            )}
          </div>
          <div className="inputs">
            {/* First input */}
            <input
              {...props}

              id='min'
              aria-label='input-minium'
              name={name}
              type='range'
              className={clsx('range', className, 'w-full h-0 bg-transparent appearance-none absolute inset-0 z-20 pointer-events-none')}
              min={min}
              max={max}
              step={step}
              value={rangeValue}
              onChange={(e: any) => handleValueMin(e)}
            />

            {/* Second input (WHEN IS DUAL RANGE) */}
            {dualRange && (
              <input
                {...props}

                id='max'
                aria-label='input-maximum'
                name={`${name}-2`}
                type='range'
                className={clsx('range', className, 'w-full h-0 bg-transparent appearance-none absolute inset-0 z-20 pointer-events-none')}
                min={min}
                max={max}
                step={step}
                value={rangeValue2}
                onChange={(e: any) => {
                  handleValueMax(e)
                  onChange2(e);
                }}

              />
            )}
          </div>

          <div className="points">
            {/* First Point */}
            <div
              className={clsx(pointStyles, 'w-5 h-5 z-40 point border-2 absolute top-1/2 -translate-y-1/2 -translate-x-1/2')}
              aria-label='point-minium'
              style={{left: `${positionPointMin}%`}}
            />

            {/* Second Point (WHEN IS DUAL RANGE) */}
            {dualRange && (
              <div
                className={clsx(pointStyles, 'w-5 h-5 z-40 point border-2 absolute top-1/2 -translate-y-1/2 -translate-x-1/2')}
                aria-label='point-maxium'
                style={{left: `${positionPointMax}%`}}
              />
            )}
          </div>
        </div>

        {/* Values */}
        {showValueInRange && (
          <div className='values flex gap-4 justify-center items-center mt-5'>
            <div className='min'>
              <small className={clsx(valueStyles, 'value font-semibold')}>{rangeValue}</small>
              <span className='name'>{props.nameValueInRange}</span>
            </div>
            {dualRange && (
              <>
                <span className='separator'>-</span>
                <div className='max'>
                  <small className={clsx(valueStyles, 'value font-semibold')}>{rangeValue2}</small>
                  <span className='name'>{props.nameValueInRange}</span>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Range;