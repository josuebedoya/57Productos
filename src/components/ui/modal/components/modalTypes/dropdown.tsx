import React, {useEffect, useRef} from 'react';
import type {DropDownProps} from "@ui/modal/types.d.ts";
import Icon from "@ui/icons/index.tsx";
import clsx from "clsx";
import usePositionModal from "@ui/modal/hooks/usePositionModal.tsx";

const Dropdown: React.FC<DropDownProps> = (
  {
    parentId = 'dropdown-modal',
    withButtonClose = true,
    closeIcon = 'MdClose',
    children,
    onClose,
    classNameContainer
  }
) => {
  const refModal = useRef<HTMLDivElement>(null)
  const [position, setPosition] = React.useState<{ x: number; y: number }>({x: 0, y: 0});

  const handleModalClick = (e: any | undefined): void => {
    e.stopPropagation();
  };

  useEffect(() => {
    const pos = usePositionModal(refModal, parentId);
    setPosition(pos);
  }, [refModal.current, parentId]);

  return (
    <div ref={refModal} id={parentId} className='absolute' role='child' onClick={handleModalClick}
         style={{top: `${position.y}px`, left: `${position.x}px`}}>
      <div className={clsx(classNameContainer, 'relative bg-white p-3 shadow-md rounded')}>
        {withButtonClose &&
         <div className="header border-b border-gray-200 text-end text-lg">
           <button className="mb-2 text-Primary hover:text-Secondary duration-200"
                   onClick={onClose}>
             <Icon name={closeIcon}/>
           </button>
         </div>
        }
        <div className="body p-1">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;