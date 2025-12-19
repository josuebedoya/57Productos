import React, {type ReactNode} from 'react';
import type {MetaProps} from "@/layouts/metas/types.d.ts";
import {Metas} from "@/layouts/metas/metas.tsx";

const MainLayout: React.FC<MetaProps & { children: ReactNode }> = ({children, ...props}) => {
  return (
    <>
      <Metas {...props} />
      <div className='wrapper main-layout'>
        {children}
      </div>
    </>
  );
};

export default MainLayout;