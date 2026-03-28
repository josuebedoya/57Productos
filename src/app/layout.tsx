import '@/styles/vendor/tailwind.css';
import '@/styles/_main.scss';
import {Children} from "@/resources/types";
import {routing} from "@/i18n/routing";
import {sofiaSans} from "@/resources/font.config";
import {ThemeProvider} from "@/contexts/ThemeContext";

const Root = ({children}: Children) => {
  return (
    <html lang={routing.defaultLocale} className={sofiaSans.className}>
    <body className='flex flex-col min-h-scree bg-white dark:bg-primary transition-colors duration-300'>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </body>
    </html>
  )
};

export default Root;