import React from 'react';
import type {BodyProps} from "./types.ts";
import clsx from "clsx";

const Body: React.FC<BodyProps> = ({children, withLine, positionLine = 'center', colorLine = 'primary', ...props}) => {
  return (
    <div className='body'>
      <div {...props}
           className={clsx(withLine && `inline-block line-body-${positionLine}`, colorLine, props.className)}>
        {children}
      </div>
    </div>
  );
};

export default Body;