import React from 'react';
import {array} from "prop-types";
import Media from "@/components/media/index.js";

const Skeleton: React.FC = () => {
  return (
    <div className='skeleton container mx-auto px-5 py-8 lg:py-16 grayscale'>
      <div className="flex gap-10">
        <div className="h-48 w-1/4 bg-white rounded-lg shadow-md p-5 animate-pulse flex">
          <Media
            src={''}
            imageProps={{alt: 'skeleton', className: 'h-full'}}/>
          <div className='w-3/4'>
            <div className="h-4 bg-gray-300 rounded w-5/6 mb-2 animate-pulse "></div>
            <div className="h-4 bg-gray-300 rounded w-5/3 mb-2 animate-pulse"></div>
            <div className="h-4 bg-gray-300 rounded w-1/3 animate-pulse"></div>
          </div>
        </div>
        <div className="h-48 w-3/4 bg-white rounded-lg shadow-md p-10">
          <div className='w-3/4'>
            <div className="h-4 bg-gray-300 rounded w-5/6 mb-2 animate-pulse"></div>
            <div className="h-4 bg-gray-300 rounded w-5/3 mb-2 animate-pulse"></div>
            <div className="h-4 bg-gray-300 rounded w-1/3 animate-pulse"></div>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-4 gap-8 py-5'>
        {[...Array(2)].map((_, i) => (
          <div key={i} className="bg-white rounded-lg shadow-md p-6 col-span-2 h-[15vw]">
            <div className="h-6 bg-gray-300 rounded w-1/2 mb-4 animate-pulse"></div>
            <div className="h-4 bg-gray-300 rounded w-full mb-2 animate-pulse"></div>
            <div className="h-4 bg-gray-300 rounded w-5/6 mb-2 animate-pulse"></div>
            <div className="h-4 bg-gray-300 rounded w-5/3 mb-2 animate-pulse"></div>
            <div className="h-4 bg-gray-300 rounded w-1/3 animate-pulse"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skeleton;