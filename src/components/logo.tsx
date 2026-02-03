import React from 'react';
import Link from "next/link";
import Image from "next/image";
import {routing} from "@/i18n/routing";
import {LogoProps} from "@/resources/types";

const Logo = ({locale, ...ui}: LogoProps) => {
  return (
    <Link href={`/${locale ?? routing.defaultLocale}`} className='inline-block decoration-0'>
      <Image
        alt='Logo'
        src='/img/logo-black.png'
        loading='eager'
        width={ui?.width ?? 170}
        height={ui?.height ?? 70}
        className="object-contain max-h-20 max-w-32 sm:max-w-full"
      />
    </Link>
  );
};

export default Logo;