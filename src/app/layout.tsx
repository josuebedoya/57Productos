import Head from '@/layouts/head';
import {RootLayoutProps} from "@/resources/types";
import Header from "@/layouts/header";
import Footer from "@/layouts/footer";
import '@/styles/vendor/tailwind.css';
import '@/styles/_main.scss';

const RootLayout = ({children, headProps}: RootLayoutProps) => {
  return (
    <html lang="en">
    <Head {...headProps}/>
    <body className='flex flex-col'>
    <Header/>
    <main>
      {children}
    </main>
    <Footer/>
    </body>
    </html>
  );
}

export default RootLayout;
