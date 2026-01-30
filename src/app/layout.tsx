import '@/styles/vendor/tailwind.css';
import '@/styles/_main.scss';
import {Children} from "@/resources/types";
import {routing} from "@/i18n/routing";

const Root = ({children}: Children) => {
  return (
    <html lang={routing.defaultLocale}>
    <body className='flex flex-col min-h-screen'>{children}</body>
    </html>
  )
};

export default Root;