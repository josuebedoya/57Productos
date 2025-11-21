import React from 'react';
import type {DocumentProps} from "@ui/media/types.js";

const Document: React.FC<DocumentProps> = (
  {
    className = 'w-full max-w-full',
    src,
    width = '100%',
    height = 700,
    typeFile = 'text',
    ...props
  }
) => {
  // Microsoft Office Document Route
  const baseSrcOffice = `https://view.officeapps.live.com/op/view.aspx?src=`;
  const isOffice = typeFile === 'officedocument';
  const newSrc = isOffice ? `${baseSrcOffice}${src}` : src;

  return (
    <div className='f-document h-full w-full'>
      <iframe
        src={newSrc}
        className={`iframe ${className} ${isOffice ? 'office' : 'google'}-document`}
        frameBorder="0"
        height={height}
        width={width}
        title={`Document - ${isOffice ? 'Microsoft Office' : 'Google Docs'}`}
        style={{aspectRatio: '1/1'}}
        {...props}
      />
    </div>
  );
};

export default Document;