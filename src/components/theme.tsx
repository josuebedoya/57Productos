'use client';

import useDarkMode from "@/hooks/useDarkMode";
import Icon from "@ui/icon";

const Theme = () => {
  const [dark, setDark] = useDarkMode();
  return (
    <div
      className='w-12 h-12 rounded-full  dark:bg-white bg-primary flex items-center
      justify-center absolute right-2 bottom-[20%] cursor-pointer shadow-md shadow-primary
      dark:shadow-white transition-all duration-300 opacity-30 hover:opacity-100'
      onClick={() => setDark(!dark)}
    >
      <Icon name='sun' className='text-white dark:text-primary'/>
    </div>
  );
};

export default Theme;