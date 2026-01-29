import Header from "@/layouts/header";
import Footer from "@/layouts/footer";
import {RootLayoutProps} from "@/resources/types";
import {languages} from "@/i18n";

export async function generateStaticParams() {
  return languages.map((lang) => ({lang}));
}

export default function RootLayout({children, lang}: RootLayoutProps) {
  return (
    <>
      <Header lang={lang}/>
      <main className="flex-1f">{children}</main>
      <Footer lang={lang}/>
    </>
  )
}