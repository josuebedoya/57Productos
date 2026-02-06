import '@/styles/vendor/tailwind.css';
import '@/styles/_main.scss';
import {Children} from "@/resources/types";
import {routing} from "@/i18n/routing";
import {sofiaSans} from "@/resources/font.config";

const Root = ({children}: Children) => {
  return (
    <html lang={routing.defaultLocale} className={sofiaSans.className}>
    <body className='flex flex-col min-h-scree bg-white dark:bg-primary'>{children}</body>
    </html>
  )
};

export default Root;