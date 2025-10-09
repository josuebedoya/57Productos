import React from 'react';
import Media from "@/components/media/index.js";
import clsx from "clsx";

const Loading = ({className}: { className: string | undefined }) => {
  return (
    <div className='loading'>
      <Media
        src='/assets/images/system/c/icon/load.png'
        imageProps={{
          alt: 'Cargando...',
          className: clsx('animate-spin w-6 h-6 max-w-6', className),
        }}
      />
    </div>
  );
};

export default Loading;