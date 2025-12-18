import React from 'react';
import {fromEnv} from "@/utils/fromEnv.js";
import Button from "@ui/button/index.js";
import {useNavigate} from "react-router";

/*
* This Component is to error boundary
*
*  The code F01 is the identifier from fronted
* */

const F01 = async ({message}: { message: string }) => {
  const navigate = useNavigate();
  const envApp = await fromEnv('VITE_APP_ENV', '');

  return (
    <>
      <section className='sm:container max-w-[500px] mx-auto py-10'>
        <div className='text-Primary text-lg text-center font-bold'>
          !Ups, algo ha fallado inesperadamente¡
        </div>
        <div className='text-red-600 text-3xl text-center font-bold family-oswald mt-4'>F01</div>
        <div className="text-left mt-4">
          <Button
            variant='flat'
            color='primary'
            variantHover='flat'
            colorHover='secondary'
            className='font-semibold'
            icon='TiArrowBackOutline'
            onClick={() => navigate('/')}>Volver</Button>
        </div>

        {envApp == 'dev' &&
         <div className='py-5'>
           <h3>Error:</h3>
           <h1 className='font-semibold text-left mb-3'>
             {message}
           </h1>
           <p className='bg-gray-600 rounded-lg p-6 text-white max-w-95 w-full'>{message}</p>
         </div>}
      </section>
    </>
  );
};

export default F01;