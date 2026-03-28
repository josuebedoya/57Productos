'use client';

import {useTheme} from "@/contexts/ThemeContext";
import Icon from "@ui/icon";

const Theme = () => {
  const {dark, setDark} = useTheme();
  return (
    <div
      className='w-12 h-12 rounded-full  dark:bg-white bg-primary flex items-center
      justify-center absolute right-2 bottom-[20%] cursor-pointer shadow-md shadow-primary
      dark:shadow-white transition-all duration-300 opacity-30 hover:opacity-100 hover:-translate-y-2'
      onClick={() => setDark(!dark)}
    >
      <Icon name={dark ? 'sun' : 'moon'} className='text-white dark:text-primary'/>
    </div>
  );
};

export default Theme;