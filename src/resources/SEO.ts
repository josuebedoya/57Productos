import type {Metadata} from 'next';
import type {SEOProps} from './types';
import {config} from './config';
import {ENV} from './ENV';
import {routing} from "@/i18n/routing";

const {siteName, siteDescription} = config;
const siteUrl = ENV('NEXT_PUBLIC_SITE_URL');

export function SEO(
  {
    title,
    description,
    image,
    pathname = '/',
    keywords = [],
    locale
  }: SEOProps): Metadata {
  const ttle = title || siteName;
  const dsc = description || siteDescription;
  const img = image || '/img/favicon.png';
  const url = `${siteUrl}${pathname}`;
  const lng = locale || routing.defaultLocale;

  return {
    title: `${ttle} | ${siteName}`,
    description: dsc,
    keywords,
    alternates: {
      canonical: url,
    },
    icons: {
      icon: '/img/favicon.png',
    },
    openGraph: {
      title: ttle,
      description: dsc,
      url: url,
      siteName: siteName,
      images: [
        {
          url: img,
          width: 1200,
          height: 630,
          alt: ttle,
        },
      ],
      locale: lng,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: ttle,
      description: dsc,
      images: [img],
    },
  };
}