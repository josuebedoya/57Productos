import  { useEffect, useState } from "react";
import { BoxOpen } from "@/resources/icons.jsx";

const WarningModal = ({type, timeClose = 5000, isFloating, bgColor = 'bg-Secondary', itemClass, children}) => {
  const [show, setShow] = useState(true);

  useEffect( () => {
   const time = setTimeout( () => {
      setShow( false );
    }, timeClose ); // start interval

    return () => clearTimeout(time); // clear time
  }, [ timeClose ] );

  // Render view Normal
  if( !isFloating ) {
    return( <div className={`text-white ${ bgColor } ${ itemClass ? itemClass : '' } flex items-center  gap-4 max-w-max px-6 py-3 text-15 tracking-wide mx-auto`}>
      <span>  {children } </span>
      <BoxOpen classIcons='icon text-lg animate-shaking'/>
    </div>);
  }

// if are floating modal
  if ( !show ) return null; // close modal

  // Render view Floating
  return (
   <div className={`modal-${type}  w-full absolute left-50 top-40 flex items-center justify-center`}>
     <div className='w-40 shadow-md bg-white h-36 flex items-center justify-center  rounded-lg '>
       {children}
     </div>
   </div>
  );
};

export { WarningModal };