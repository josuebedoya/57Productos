import React, {useState} from "react";
import clsx from "clsx";
import type {RepeaterMenuProps} from "@ui/menu/types.d.ts";
import Icon from "@ui/icons/index.tsx";
import Modal from "@ui/modal/index.tsx";
import MapMenu from "@ui/menu/components/mapMenu.tsx";

const RepeaterMenu: React.FC<RepeaterMenuProps> = (
  {
    items,
    onSelect,
    className,
    classNameItemActive,
    classNameItem,
    orientation = "horizontal",
    level = 0,
    animateInDropdown = 'animate-fade-right-in',
    isMobile = false,
    iconMenuOpen = 'FaBars',
    modalProps,
  }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handlerClick = () => {
    setIsOpen(prev => !prev);
  }

  const mapMenuProps = {
    items,
    classNameItem,
    classNameItemActive,
    isMobile,
    onSelect,
    animateInDropdown,
    level,
  };

  return (
    <ul
      className={clsx(
        "flex",
        {
          "menu-list": !isMobile,
          "menu-list-mobile": isMobile,
          "flex-row relative": level === 0 && orientation === "horizontal" && !isMobile,
          "flex-col": level > 0 || orientation === "vertical" || isMobile,
        },
        className,
      )}
    >
      {
        isMobile && (
          <div className="open" onClick={handlerClick}>
            <Icon name={iconMenuOpen}/>
          </div>
        )
      }
      {
        isMobile && isOpen ? (
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
            <MapMenu {...mapMenuProps}/>
          </Modal>
        ) : !isMobile && (<MapMenu {...mapMenuProps}/>)
      }
    </ul>
  );
};

export default RepeaterMenu;
