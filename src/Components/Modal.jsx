import React, { useRef, useEffect } from 'react';

const Modal = ({ isOpen, onClose = false, classModal, children }) => {
  const modalRef = useRef(null);

  const clickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {

    let waitingTime;

    if (isOpen) {
      //interval to prevent onClose from being executed once at startup
      waitingTime = setInterval(() => {
        window.addEventListener('click', clickOutside);
      }, 200);
    }

    return () => {
      clearTimeout(waitingTime);
      window.removeEventListener('click', clickOutside);
    };

  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className='modal fixed inset-0 bg-black bg-opacity-80 flex justify-center items-start overflow-auto py-14 z-50'>
      <div ref={modalRef} className={`modal-content bg-white p-8 rounded-3xl shadow-modal w-full ${classModal}`}>
        {children}
      </div>
    </div>
  );
};

export { Modal };