import type { Metadata } from 'next';
import Header from "@/layouts/header";
import Footer from "@/layouts/footer";
import '@/styles/vendor/tailwind.css';
import '@/styles/_main.scss';
import { SEO } from '@/resources/SEO';
import { config } from '@/resources/config';

// Exporta la metadata directamente aquí
export const metadata: Metadata = SEO(
  {
    title: 'Inicio',
    description: config.siteDescription,
    image: undefined,
  }
)

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className='flex flex-col'>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
