import React from 'react';
import {useSettings} from "@/context/settings.jsx";

const ViewBoundary = ({message}: { message: string }) => {
  const {settings} = useSettings();

  return (
    <div className='p-10 text-red-600 text-lg flex items-center justify-center flex-col'>
      <h2 className='font-bold family-oswald'>!Ups¡ Algo salió mal 😢</h2>
      {settings?.user?.role_id == 0 &&
       <>
         <h3>Error:</h3>
         <p className='bg-gray-600 rounded-lg p-6 text-white max-w-95 w-full'>{message}</p>
       </>}
    </div>
  );
};

export default ViewBoundary;