import React from 'react';
import Media from "@/components/media/index.js";

const Loading = () => {
  return (
    <div className='loading'>
      <Media
        src='/assets/images/system/c/icon/load.png'
        imageProps={{
          alt: 'Cargando...',
          className: 'animate-spin w-6 h-6',
        }}
      />
    </div>
  );
};

export default Loading;