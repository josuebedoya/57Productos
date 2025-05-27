import { createContext, useState, useContext, useEffect } from 'react';
import { getStorage, setStorage } from "@/utils/storage.js";

const CartContext = createContext();

export const CartProvider = ( { children } ) => {
  const [ cart, setCart ] = useState( [] );

  // Found items from Storage
  useEffect( () => {
    const itemsCart = getStorage( "cart" );

    if ( itemsCart ) setCart( itemsCart );
  }, [] );

  // Add item to cart
  const addCart = ( product ) => {
    if ( !cart.some( item => item.id === product.id ) ) {
      setStorage( 'cart', [ ...cart, product ] ); // Add item to storage
      const newItems = getStorage( "cart" ); // Get new items
      setCart( newItems );

    } else {
      let newItems = cart.map( item => (
       item.id === product.id ?
        { ...item, amount: item.amount + product.amount }
        : item
      ) );

      setStorage( 'cart', newItems ); // Update Amount into Storage
      setCart( newItems );
    }
  };

  // Remove products from cart
  const removeItem = ( id ) => {
    const newItems = cart.filter( item => item.id !== id );
    setStorage( 'cart', newItems ); // Update Storage
    setCart( newItems );
  };

  // Remove all products from cart
  const removeAll = () => {
    setStorage( 'cart', [] ); // Empty Storage cart
    setCart( [] );
  };

  // Increment amount into cart
  const incrementAmount = ( id ) => {
    const newItems = cart.map( item => (
     item.id === id ? { ...item, amount: item.amount + 1 } : item
    ) );

    setStorage( 'cart', newItems ); // Update Storage
    setCart( newItems );
  };
  // Decrement amount into cart
  const decrementAmount = ( id ) => {
    const newItems = cart.map( item => {
      if ( item.amount > 1 ) {
        return item.id === id ? { ...item, amount: item.amount - 1 } : item
      }

      return item;
    } );

    setStorage( 'cart', newItems ); // Update Storage
    setCart( newItems );
  };

  return (
   <CartContext.Provider value={ { cart, addCart, removeItem, removeAll, decrementAmount, incrementAmount } }>
     { children }
   </CartContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
  return useContext( CartContext );
}; // hook to global access