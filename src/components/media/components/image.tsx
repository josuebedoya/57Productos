import React from 'react';
import type {ImageProps} from "@/components/media/types.d.ts";

const Image: React.FC<ImageProps> = (
  {
    src,
    alt = 'image-file',
    loading = 'lazy',
    referrerPolicy = 'no-referrer',
    decoding = 'async',
    draggable = false,
    ...props
  }) => {

  return (
    <div className='f-image'>
      <img
        src={src}
        alt={alt}
        loading={loading}
        referrerPolicy={referrerPolicy}
        decoding={decoding}
        draggable={draggable}
        {...props}
      />
    </div>
  );
};

export default Image;