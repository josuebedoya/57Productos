import React, {useEffect, useRef, useState} from 'react';
import Input from "@/components/input/fields/input/index.js";
import Button from "@/components/button/index.js";
import type {NumberControlProps} from "@/components/numberControl/types.js";
import clsx from "clsx";

const NumberControl: React.FC<NumberControlProps> = (
  {
    inputProps,
    buttonProps,
    onChange
  }
) => {

  const amountRef = useRef<number>(1);
  const [amount, setAmount] = useState<number>(1);
  const intervalRef = useRef<number | null>(null);

  const handleAmount = (e: string | number): void => {
    const value = Number(e);
    amountRef.current = value;
    setAmount(value);
    onChange && onChange(value);
  }

  const controllerAmount = (type: 'add' | 'reduce'): void | null => {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      const current = amountRef.current;
      const min = Number(inputProps?.min || 1);
      const action = type === 'add' ? 1 : -1;
      const next = Math.max(current + action, min);

      handleAmount(next);
    }, 130);
  }

  const stopController = (): void => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }

  useEffect(() => {
    const handleMouseUp = () => stopController();
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div className='control'>
      <div className="flex align-center">
        <Button
          onMouseDown={() => controllerAmount('reduce')}
          onClick={() => handleAmount(amountRef.current - 1)}
          onMouseUp={stopController}
          onMouseLeave={stopController}
          className={clsx(buttonProps?.className, '!rounded-r-none')}
          {...buttonProps}
        >
          -
        </Button>
        <Input
          name='amount-control'
          onChange={e => handleAmount(e.target.value)}
          value={amount}
          minLength={inputProps?.minLength || 1}
          min={inputProps?.min || 1}
          type='number'
          rounded='none'
          className={clsx(inputProps?.className, 'opacity-70')}
          {...inputProps}
        />
        <Button
          onMouseDown={() => controllerAmount('add')}
          onClick={() => handleAmount(amountRef.current + 1)}
          onMouseUp={stopController}
          onMouseLeave={stopController}
          className={clsx(buttonProps?.className, '!rounded-l-none')}
          {...buttonProps}
        >
          +
        </Button>
      </div>
    </div>
  );
};

export default NumberControl;
