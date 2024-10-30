import React, { useState, useEffect } from 'react';
import { Divisas } from "./Divisas";

const Money = ( { amount = 0 } ) => {

  const [ convertedAmount, setConvertedAmount ] = useState( amount );

  const foreignExchange = [ 'COP', 'USD', 'EUR', 'GBP', 'JPY', 'hsd', 'hshs', 'hsdg' ];
  let optionsInvalid = []; // The type of currencies not available are stored here

  const [ rates, setRates ] = useState( {
    COP: null,
    USD: null,
    EUR: null,
    GBP: null,
    JPY: null,
  } );
  const [ formate, setFormat ] = useState( 'COP' );

  useEffect( () => {
    setTimeout( () => {
      const convertDivisa = ( { format } ) => {
        const validDivisa = foreignExchange.filter( divisa => divisa in rates );
        console.log( `${ rates[ format ] }` );
        if ( validDivisa.includes( format ) || rates[ format ] !== undefined || rates[ format ] !== null ){
          console.log( `${ convertedAmount }--------Sin Convertir` );
          console.log( `${ rates[ format ] }` );
          console.log( `${ setConvertedAmount( convertedAmount * rates.COP ) }  Convertido` );

          const amountInCOP = convertedAmount / rates.COP;
          const finalAmount = amountInCOP * rates[ format ];
          setConvertedAmount( finalAmount );
        } else{
          setConvertedAmount( 'N/A' );
        }
      };
      console.log( formate );

      convertDivisa( formate );
    }, 2000 );
  }, [ formate ] );

  const moneyFormat = () => {
    return Intl.NumberFormat( 'es-ES', {
      style: 'currency',
      currency: formate,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    } ).format( convertedAmount );
  };

  const optionsValid = foreignExchange.map( ( type, i ) => (
    type in rates ? (
      <option key={ i } value={ type }>
        { type }
      </option>
    ) : (
      optionsInvalid.push( type )
    )
  ) );

  return (
    <>
      <span className='amountMoney flex justify-between gap-1 '>
        <span className="money family-oswald">
          <Divisas setRates={ setRates }/>
          { moneyFormat() }
        </span>
        <select value={ formate } onChange={ ( e ) => setFormat( e.target.value ) } id='select-format'>
          { optionsValid }
        </select>
      </span>
      <div className='invalid-divisas w-auto'>
        {
          optionsValid.length !== 0 ? (
            <>
              <h2>DIVISAS INVALIDAS:</h2>
              <ul>
                {
                  optionsInvalid.map( ( invalid, i ) => (
                    <li key={ i } className='text-red-600 family-oswald'>
                      { invalid }
                    </li>
                  ) )
                }
              </ul>
            </>
          ) : null
        }
      </div>
    </>
  );
};

export { Money };