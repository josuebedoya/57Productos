import React, {useState} from 'react';
import Input from "@/components/input/fields/input/index.js";
import Button from "@/components/button/index.js";
import type {NumberControlProps} from "@/components/numberControl/types.js";

const NumberControl: React.FC<NumberControlProps> = (
  {
    inputProps,
    buttonProps
  }
) => {

  const [amount, setAmount] = useState<number>(1);

  const handleAmount = (e: string | number): void => {
    setAmount(e);
  }

  const controllerAmount = (type: 'add' | 'reduce'): void => {
    if (type === 'add') {
      setAmount(prev => prev + 1);
    } else {
      setAmount(prev => prev - 1);
    }
  }

  return (
    <div className='control'>
      <div className="flex align-center">
        <Button
          onClick={() => controllerAmount('reduce')}
          {...buttonProps}
        >
          -</Button>
        <Input
          name='amount-control'
          onChange={e => handleAmount(e.target.value)}
          value={amount}
          minLength={inputProps?.minLength || 1}
          min={inputProps?.min || 1}
          type='TEL'
          {...inputProps}
        />
        <Button
          onClick={() => controllerAmount('add')}
          {...buttonProps}
        >+</Button>
      </div>
    </div>
  );
};

export default NumberControl;