import { createContext, useState, useContext, useEffect } from 'react';
import { getExchangeRates } from '@/utils/divisas.jsx';

const FormatMoneyContext = createContext();

const FormatMoneyProvider = ( { children } ) => {

  const [ rates, setRates ] = useState( {} ); // all coins are stored here
  const [ ratesToUse, setRatesToUse ] = useState( [ 'COP', 'CAD', 'dff', 'JPY', 'GBP' ] ); // Define rates to use
  const [ format, setFormat ] = useState( 'COP' ); // Default format

  // Get exchange rates
  useEffect( () => {
    const fetch = async () => {
      setRates( await getExchangeRates( ratesToUse.join( ',' ).trim() ) );
    }
    fetch();
  }, [ ratesToUse ] );

  // add New rate
  const AddNewRate = ( newRate ) => {
    if ( newRate && !ratesToUse.includes( newRate ) ) {
      setRatesToUse( [ ...ratesToUse, newRate ] );
    }
  };

  // Money format
  const formatAmount = ( amount, currency ) => {
    return Intl.NumberFormat( 'es-ES', {
      style: 'currency',
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    } ).format( amount );
  };

  // convert Amount
  const convertAmount = ( amount, toCurrency, base = 'USD' ) => {
    if ( rates && amount != null && !isNaN( amount ) && rates[ base + toCurrency ] ) {
      return amount / rates[ base + toCurrency ];
    }
  };

  const finalAmount = ( amount ) => {
    if ( rates && Object.keys( rates ).length > 0 && amount != null && !isNaN( amount ) ) {
      const converted = convertAmount( amount, format ); // Convert Amount
      return formatAmount( converted, format ); // Formatted Amount && return
    }

    return  formatAmount( 0, format )
  };

  return <FormatMoneyContext.Provider
   value={ { rates, ratesToUse, AddNewRate, setFormat, format, finalAmount } }>
    { children }
  </FormatMoneyContext.Provider>
}
// eslint-disable-next-line react-refresh/only-export-components
export const useFormatMoney = () => {
  return useContext( FormatMoneyContext );
}

export { FormatMoneyProvider };