import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { MenuBarsIcon, AngleRightIcon } from '../Resources/Icons';

const Menu = ({ items, atr, menuH, withMenuBars, openMenu, target = '_self' }) => {

  const [ openMenuBars, setOpenMenuBars ] = useState(false);

  const handleOpenModal = () => {
    setOpenMenuBars(!openMenuBars);
    if (openMenu) {
      openMenu();
    }
  };

  return (
    <div className='navbar menu'>
      <ul className={`menu-nav ${menuH && withMenuBars ? 'hidden lg:flex flex-row space-x-7'
        : withMenuBars ? 'hidden lg:block'
          : menuH ? 'flex flex-row space-x-7'
            : 'block'}`
      }>
        {
          items.map((item, index) => (
            <li key={index} className='menu-item'>
              <Link to={item.url} className={`item-link ${atr}`} onClick={handleOpenModal} target={target && item.target}>
                {item.name}
              </Link>
            </li>
          ))
        }
      </ul >
      {
        withMenuBars ?
          <span className='block lg:hidden text-2xl' onClick={handleOpenModal}>
            <MenuBarsIcon classIcons='cursor-pointer' />
          </span> : null
      }
      {
        withMenuBars && openMenuBars ? (
          <div className='modal-menu lg:hidden absolute w-full h-full min-h-screen min-w-full bg-black/70 left-0 top-0 z-modal flex justify-start items-center'>
            <div className='menu-nav-mobile left-0 top-0 h-screen min-h-full w-64 p-4 bg-white z-modal overflow-y-auto overflow-x-hidden'>
              <ul className='menu-nav block lg:hidden'>
                {
                  items.map((item, index) => (
                    <li key={index} className='menu-item'>
                      <Link to={item.url} className={`item-link ${atr}`} onClick={handleOpenModal}  target={target && item.target}>
                        {item.name}
                      </Link>
                    </li>
                  ))
                }
              </ul >
            </div>
            <div className='close-menu h-screen w-5 bg-transparent flex items-center relative left-5'>
              <span onClick={handleOpenModal}>
                <AngleRightIcon classIcons='text-white cursor-pointer text-xl hover:scale-125 duration-200' />
              </span>
            </div>
          </div>
        ) : null
      }
    </div >
  );
};

export { Menu };