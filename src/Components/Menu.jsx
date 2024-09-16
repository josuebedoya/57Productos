import React from 'react';
import { Link } from 'react-router-dom';

const Menu = ({ items, atr }) => {
  return (
    <ul className='flex flex-row space-x-7'>
      {items.map((item, index) => (
        <li key={index}>
          <Link to={item.url} className={`${atr}`}>
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export { Menu };