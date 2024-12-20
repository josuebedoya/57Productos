import { createContext, useState, useContext } from "react";

const CartContext = createContext();

const CartProvider = ( { children } ) => {
  const [ cart, setCart ] = useState( [] );

  const addCart = ( product ) => {
    if ( !cart.some( item => item.id === product.id ) ) {
      setCart( ( prevCart ) => [ ...prevCart, product ] );
    } else {
      let newsItems = cart.map( item => (
       item.id === product.id ?
          { ...item, amount: item.amount + product.amount }
       : item
      ));

      setCart( newsItems );
    }
  };

  const removeItem = ( id ) => {
    const newItems = cart.filter( item => item.id !== id );
    setCart( newItems );
  }; // Remove products from car list

  const removeAll = () => {
    setCart( [] );
  }; // Remove all product from cart

  return (
   <CartContext.Provider value={{ cart, addCart, removeItem, removeAll }}>
     { children }
   </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext( CartContext );
}; // hook to global access

export { CartProvider };