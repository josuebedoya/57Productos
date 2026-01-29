import '@/styles/vendor/tailwind.css';
import '@/styles/_main.scss';
import {Children} from "@/resources/types";
import {defaultLanguage} from "@/i18n";

const Root = ({children}: Children) => {
  return (
    <html lang={defaultLanguage}>
    <body className='flex flex-col min-h-screen'>{children}</body>
    </html>
  )
};

export default Root;