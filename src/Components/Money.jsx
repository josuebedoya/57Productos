import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { Divisas } from "./Divisas";

const Money = ( { amount } ) => {

  const [ convertedAmount, setConvertedAmount ] = useState( amount ? +amount : 0 );
  const [ rates, setRates ] = useState( {} ); // all coins are stored here
  const [ format, setFormat ] = useState( 'COP' );
  const exchangeRatesUse = [  //define here what exchange rates are going to be used
    'COP',
    'USD',
    'EUR',
    'GBP',
    'JPY',
    'hsd',
    'hshs',
    'hsdg'
  ];

  /*--  Convert amount to money format  --*/
  const moneyFormat = () => {
    return Intl.NumberFormat( 'es-ES', {
      style: 'currency',
      currency: format,  /*--  Receive Value from format --*/
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    } ).format( convertedAmount );
  };

  useEffect( () => {
    const convertAmount = () => {
      if ( Object.keys( rates ).length > 0 ){
        if ( amount !== null && amount !== undefined && !isNaN( amount ) ){
          const toUSD = amount / rates[ 'COP' ]; // convert amount to USD
          const toFormat = toUSD * rates[ format ]; // convert amount to format
          setConvertedAmount( toFormat );
        } else{
          setConvertedAmount( 'N/A' );
        }
      }
    };
    convertAmount();
  }, [ format, rates, amount ] );

  /*--  Created options, and exclude invalid options  --*/
  const optionsInvalid = exchangeRatesUse.filter( type => !( type in rates ) );
  const optionsValid = exchangeRatesUse.map( ( type, i ) => (
    type in rates ? (
      <option key={ i } value={ type }>
        { type }
      </option>
    ) : null
  ) );

  return (
    <>
      <span className='amountMoney flex justify-between gap-1 '>
        <span className="money family-oswald">
          <Divisas setRates={ setRates }/>
          { moneyFormat() }
        </span>
        <select value={ format } onChange={ ( e ) => setFormat( e.target.value ) } id='select-format'>
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

Money.propTypes = {
  amount: PropTypes.number.isRequired,
}

export { Money };