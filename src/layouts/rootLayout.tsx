import Header from "@/layouts/header";
import Footer from "@/layouts/footer";
import {RootLayoutProps} from "@/resources/types";
import {routing} from "@/i18n/routing";
import {NextIntlClientProvider} from 'next-intl';

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function RootLayout({children, locale}: RootLayoutProps) {
  return (
    <NextIntlClientProvider>
      <Header locale={locale}/>
      <main className="flex-1f">{children}</main>
      <Footer locale={locale}/>
    </NextIntlClientProvider>
  )
}