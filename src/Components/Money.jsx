import React, { useState } from 'react';

const Money = ({ amount = 0 }) => {

  const foreignExchange = [ 'COP', 'USD', 'EUR', 'GBP', 'JPY' ];

  const [ format, setFormat ] = useState('COP');

  const moneyFormat = () => {
    return Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: format,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount);
  };

  return (
    <>
      <span className='amountMoney flex justify-between gap-1 '>
        <span className="money family-oswald">
          {moneyFormat()}
        </span>
        <select value={format} onChange={(e) => setFormat(e.target.value)} id='select-format'>
          {
            foreignExchange.map((type, i) => (
              <option key={i} value={type}>
                {type}
              </option>
            ))
          }
        </select>
      </span>

    </>
  );
};

export { Money };