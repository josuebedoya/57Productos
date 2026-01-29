import {defaultLanguage} from "@/i18n"
import {AppLayoutProps, ParamsPromise} from "@/resources/types";
import {config} from "@/resources/config";
import {Metadata} from "next";
import {SEO} from "@/resources/SEO";
import RootLayout from "@/layouts/rootLayout";

export async function generateMetadata({params}: ParamsPromise): Promise<Metadata> {
  const {lang} = await params;

  return SEO({
    title: "Inicio",
    description: config.siteDescription,
    keywords: [
      "productos colombianos",
      "comprar productos colombianos",
      "productos importados",
      "tienda de productos colombianos",
      "productos agricolas colombianos",
    ],
    pathname: lang === defaultLanguage ? "/" : `/${lang}`,
    image:
      "https://dev_bspanish_admin.imaginadevs.com/assets/c0aee413-a746-450b-b69e-5c9efdacdca4/in-person-one-to-one-lessons.webp?&format=webp&width=670&height=750",
    lang,
  })
}

const AppLayout = async ({children, params}: AppLayoutProps) => {
  const {lang} = await params;
  return (<RootLayout lang={lang}>{children}</RootLayout>
  )
};

export default AppLayout;