const WarningModal = ({type, children}) => {
  return (
   <div className={`modal-${type}  w-full absolute left-50 top-40 flex items-center justify-center`}>
     <div className='w-40 shadow-md bg-white h-36 flex items-center justify-center  rounded-lg '>
       {children}
       text
     </div>
   </div>
  );
};

export { WarningModal };