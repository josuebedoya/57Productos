import React from 'react';

const Menu = ({ items, atr }) => {
  return (
    <ul className="flex flex-row space-x-4">
      {items.map((item, index) => (
        <li key={index}>
          <a href={item.url} className={`${atr}`}>
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export { Menu };