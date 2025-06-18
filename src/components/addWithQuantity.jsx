import { useEffect, useState } from 'react';
import { Button } from './button.jsx';
import { AddCircleIcon, CartIcon, RemoveCircleIcon } from '@/assets/icons.jsx';
import { Input } from './input.jsx';

const AddWithQuantity = ( { functionAdd, handleAmount } ) => {
  const [ changeIconBtnAdd, setChangeIconBtnAdd ] = useState( false );
  const [ changeIconBtnRemove, setChangeIconBtnRemove ] = useState( false );
  const [ amount, setAmount ] = useState( 1 );
  const [ intervalId, setIntervalId ] = useState( null );

  const incrementAmount = () => {
    const id = setInterval( () => {
      setAmount( ( prevAmount ) => prevAmount + 1 );
    }, 65 ); // incrementa cada 65 ms
    setIntervalId( id );
  };

  const decrementAmount = () => {
    const id = setInterval( () => {
      setAmount( ( prevAmount ) => Math.max( 0, prevAmount - 1 ) );
    }, 65 ); // Decrementa cada 65 ms
    setIntervalId( id );
  };

  const stopChangingAmount = () => {
    clearInterval( intervalId );
  };

  const onChangeAmount = ( e ) => {
    setAmount( Number( e.value ) );
  }

  useEffect( () => {
    handleAmount( amount );
  }, [ amount ] );

  return (
   <>
     <div className='btn-add-amount  flex justify-between items-center text-'>
       <div className='flex justify-between items-center mr-5'>
         <Button
          classBtn='btn-reduce bg-transparent border-0 shadow-none hover:border-0 text-4xl p-0'
          onMouseEnter={ () => setChangeIconBtnRemove( true ) }
          onMouseLeave={ () => {
            setChangeIconBtnRemove( false );
            stopChangingAmount();
          } }
          onMouseDown={ decrementAmount }
          onMouseUp={ stopChangingAmount }
         >
           <RemoveCircleIcon classIcons={ !changeIconBtnRemove ? 'text-Primary' : 'textSecondary duration-150' }/>

         </Button>
         <Input value={ amount } type='number' onChange={ onChangeAmount } minLength={ 0 } classContent='input-amount'/>
         <Button
          classBtn='btn-increase bg-transparent border-0 shadow-none hover:border-0 text-4xl p-0'
          onMouseEnter={ () => setChangeIconBtnAdd( true ) }
          onMouseLeave={ () => {
            setChangeIconBtnAdd( false );
            stopChangingAmount();
          } }
          onMouseDown={ incrementAmount }
          onMouseUp={ stopChangingAmount }
         >
           <AddCircleIcon classIcons={ !changeIconBtnAdd ? 'text-Primary' : 'textSecondary duration-150' }/>
         </Button>
       </div>
       <div>
         <Button classBtn='btn-add px-4' icon={ <CartIcon/> } onClick={ () => {
           functionAdd();
           setAmount( 1 )
         } }>
           Añadir
         </Button>
       </div>
     </div>
   </>
  );
};

export { AddWithQuantity };