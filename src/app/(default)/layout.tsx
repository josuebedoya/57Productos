import {defaultLanguage} from "@/i18n"
import RootLayout from "@/layouts/rootLayout";
import {Children} from "@/resources/types";
import {config} from "@/resources/config";
import {Metadata} from "next";
import {SEO} from "@/resources/SEO";

export const metadata: Metadata = SEO(
  {
    title: 'Inicio',
    description: config.siteDescription,
    keywords: ['productos colombianos', 'comprar productos colombianos', 'productos importados', 'tienda de productos colombianos', 'productos agricolas colombianos'],
    pathname: '/',
    image: 'https://dev_bspanish_admin.imaginadevs.com/assets/c0aee413-a746-450b-b69e-5c9efdacdca4/in-person-one-to-one-lessons.webp?&format=webp&width=670&height=750',
  }
)

const AppLayout = ({children}: Children) => {
  return <RootLayout lang={defaultLanguage}>{children}</RootLayout>
}

export default AppLayout;