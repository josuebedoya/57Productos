import React from 'react';
import {array} from "prop-types";

const Skeleton: React.FC = () => {
  return (<div className='flex justify-between items-center gap-3 md:gap-5 h-full'>
      {[...Array(4)].map((_, i) => (
        <div key={i} className="w-3/4 max-w-md bg-white rounded-lg shadow-md p-6 basis-1/2">
          <div className="h-6 bg-gray-300 rounded w-1/2 mb-4"></div>
          <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6 mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-2/3"></div>
        </div>
      ))}
    </div>
  );
};

export default Skeleton;