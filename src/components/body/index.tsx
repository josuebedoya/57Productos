import React from 'react';
import type {BodyProps} from "./types.ts";

const Body: React.FC<BodyProps> = ({children, ...props}) => {
  return (
    <div className='body'>
      <div {...props}>
        {children}
      </div>
    </div>
  );
};

export default Body;