import Header from "@/layouts/header";
import Footer from "@/layouts/footer";
import {RootLayoutProps} from "@/resources/types";
import {routing} from "@/i18n/routing";
import {NextIntlClientProvider} from 'next-intl';
import {Suspense} from "react";

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

const HeaderFallback = () => (
  <header className='px-1 sm:px-3 px-xl-0 z-modal sticky top-0'>
    <div className='container mx-auto text-center flex items-center justify-between gap-2 sm:gap-5 min-h-[72px]'>
      <div className='py-2 order-1 flex-1 lg:flex-initial flex justify-start' />
      <div className='lg:flex-1 self-center flex justify-center items-center order-3 lg:order-2' />
      <div className='controls flex items-center justify-end px-1 max-h-max order-2 lg:order-3' />
    </div>
  </header>
);

export default async function RootLayout({children, locale}: RootLayoutProps) {
  return (
    <NextIntlClientProvider>
      <Suspense fallback={<HeaderFallback/>}>
        <Header locale={locale}/>
      </Suspense>
      <main className="flex-1f">{children}</main>
      <Footer locale={locale}/>
    </NextIntlClientProvider>
  )
}