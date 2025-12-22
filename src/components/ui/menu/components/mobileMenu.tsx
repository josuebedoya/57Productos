import React, {useState} from 'react';
import Icon from "@ui/icons/index.tsx";
import Modal from "@ui/modal/index.tsx";
import ItemMenu from "@ui/menu/components/itemMenu.tsx";
import type {MenuMobileProps} from "@ui/menu/types.d.ts";

const MobileMenu: React.FC<MenuMobileProps> = (
  {
    items,
    iconMenuOpen = 'FaBars',
    modalProps
  }) => {

  const [isOpen, setIsOpen] = useState(false);

  const handlerClick = () => {
    setIsOpen(prev => !prev);
  }

  return (
    <div className='menu-list-mobile'>
      <div className="open" onClick={handlerClick}>
        <Icon name={iconMenuOpen}/>
      </div>
      <Modal
        {...modalProps}
        type='drawer'
        size={modalProps?.size ?? 'lg'}
        position={modalProps?.position ?? 'left'}
        withHeader={true}
        withFooter={false}
        isOpen={isOpen}
        onClose={handlerClick}
      >
        {
          items.map(item => (
            <>
              <ItemMenu {...item}/>
              {
                item.subItems &&
                item.subItems.map((subItem) => (
                  <ItemMenu {...subItem}/>
                ))
              }
            </>
          ))
        }
      </Modal>
    </div>
  );
};

export default MobileMenu;