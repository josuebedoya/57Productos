import React, {type HTMLAttributes} from 'react';
import {fromEnv} from "@/utils/fromEnv.ts";
import {t} from 'i18next';

const Copyright = (props: HTMLAttributes<HTMLDivElement>) => {

  const date = new Date().toLocaleDateString('es-co', {'year': 'numeric'});
  const label = t('copyright.label');
  const siteName = fromEnv('VITE_APP_NAME', '');

  return (
    <div className='copyright containter'>
      <div {...props}>
        © {date}. {label}
        <em className='name' style={{fontFamily: "inherit"}}> {siteName}</em>
      </div>
    </div>
  );
};

export default Copyright;