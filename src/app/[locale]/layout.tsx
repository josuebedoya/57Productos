import {ParamsPromise} from "@/resources/types";
import {config} from "@/resources/config";
import {Metadata} from "next";
import {SEO} from "@/resources/SEO";
import RootLayout from "@/layouts/rootLayout";
import {routing} from "@/i18n/routing";

export async function generateMetadata({params}: ParamsPromise): Promise<Metadata> {
  const {locale} = await params;

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
    pathname: locale === routing.defaultLocale ? "/" : `/${locale}`,
    image:
      "https://dev_bspanish_admin.imaginadevs.com/assets/c0aee413-a746-450b-b69e-5c9efdacdca4/in-person-one-to-one-lessons.webp?&format=webp&width=670&height=750",
    locale,
  })
}

const AppLayout = async (
  {
    children,
    params,
  }: LayoutProps<'/[locale]'>) => {
  const {locale} = await params

  return (
    <RootLayout locale={locale}>
      {children}
    </RootLayout>
  )
}

export default AppLayout;