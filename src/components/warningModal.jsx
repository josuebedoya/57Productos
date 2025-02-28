import { useEffect, useState } from "react";

const WarningModal = ({type, timeClose = 5000, children}) => {
  const [show, setShow] = useState(true);

  useEffect( () => {
   const time = setTimeout( () => {
      setShow( false );
    }, timeClose ); // start interval

    return () => clearTimeout(time); // clear time
  }, [] );

  if(!show) return null; // close modal

  return (
   <div className={`modal-${type}  w-full absolute left-50 top-40 flex items-center justify-center`}>
     <div className='w-40 shadow-md bg-white h-36 flex items-center justify-center  rounded-lg '>
       {children}
     </div>
   </div>
  );
};

export { WarningModal };