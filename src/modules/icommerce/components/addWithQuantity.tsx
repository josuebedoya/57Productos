import {useState} from 'react';
import Button from '../../../components/button/index.tsx';
import NumberControl from "@/components/numberControl/index.js";
import type {InputProps} from "@/components/input/fields/input/types.js";

type Props = {
  functionAdd: () => void;
  onChange?: (e?: number) => void;
}

const AddWithQuantity = ({functionAdd, onChange}: Props) => {
  const [amount, setAmount] = useState(1);

  // Handle change amount
  const onChangeAmount = (e: number) => {
    setAmount(Number(e));
    onChange && onChange(e);
  }

  return (
    <>
      <div className='btn-add-amount  flex justify-between items-center gap-3'>
        <NumberControl
          value={amount}
          onChange={onChangeAmount}
          inputProps={{
            padding: 'sm',
            variant: 'solid',
            color: 'primary',
            rounded: 'lg',
            className: '!appearance-none w-24 text-center font-bold text-lg max-h-10 h-9'
          } as InputProps}
          buttonProps={{
            variant: 'flat',
            variantHover: 'outline',
            color: 'primary',
            colorHover: 'primary',
            className: 'btn-reduce p-0 font-bold max-h-9 duration-500 mx-1',
            size: 'xl',
            padding: 'sm'
          }}
        />
        <Button
          className='btn-add-to-cart font-bold max-h-10 gap-3 duration-500'
          padding='sm'
          variant='flat'
          color='primary'
          colorHover='primary'
          variantHover='outline'
          rounded='md'
          icon='AiOutlineShoppingCart'
          onClick={() => {
            functionAdd();
            onChangeAmount(1);
          }}>Añadir</Button>
      </div>
    </>
  );
};

export default AddWithQuantity;