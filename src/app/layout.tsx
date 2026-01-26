import Head from '@/layouts/head';
import {RootLayoutProps} from "@/resources/types";

const RootLayout = ({children, headProps}: RootLayoutProps) => {
  return (
    <html lang="en">
    <Head {...headProps}/>
    <body>
    {children}
    </body>
    </html>
  );
}

export default RootLayout;
