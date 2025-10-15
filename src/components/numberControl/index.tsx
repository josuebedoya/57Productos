import React, {useState} from 'react';
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

  const [amount, setAmount] = useState<number>(1);

  const handleAmount = (e: string | number): void => {
    setAmount(Number(e));
    onChange && onChange(e);
    console.log(e)
  }

  const controllerAmount = (type: 'add' | 'reduce'): void | null => {
    if (type === 'add') {
      handleAmount(amount + 1);
    } else {
      if (amount > (Number(inputProps?.min || 1)))
        handleAmount(amount - 1);
    }
  }

  return (
    <div className='control'>
      <div className="flex align-center">
        <Button
          onClick={() => controllerAmount('reduce')}
          className={clsx(buttonProps?.className, '!rounded-r-none')}
          {...buttonProps}
        >
          -</Button>
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
          onClick={() => controllerAmount('add')}
          className={clsx(buttonProps?.className, '!rounded-l-none')}
          {...buttonProps}
        >+</Button>
      </div>
    </div>
  );
};

export default NumberControl;