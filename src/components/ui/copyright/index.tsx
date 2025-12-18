import React, {type HTMLAttributes} from 'react';
import {fromEnv} from "@/utils/fromEnv.ts";
import {useTranslation} from "react-i18next";

const Copyright = async (props: HTMLAttributes<HTMLDivElement>) => {
  const {t} = useTranslation();

  const date = new Date().toLocaleDateString('es-co', {'year': 'numeric'});
  const label = t('copyright.label');
  const siteName = await fromEnv('VITE_APP_NAME', '');

  return (
    <div className='copyright containter'>
      <div {...props}>
        © {date}. {label}
        <em className='name font-semibold' style={{fontFamily: "inherit"}}> {siteName}</em>
      </div>
    </div>
  );
};

export default Copyright;