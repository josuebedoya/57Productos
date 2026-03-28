'use client';

import Link from "next/link";
import Image from "next/image";
import {routing} from "@/i18n/routing";
import {LogoProps} from "@/resources/types";
import {useTheme} from "@/contexts/ThemeContext";

const Logo = ({locale, ...ui}: LogoProps) => {
  const {dark} = useTheme();

  return (
    <Link href={`/${locale ?? routing.defaultLocale}`} className='inline-block decoration-0'>
      <Image
        alt='Logo'
        src={dark ? '/img/logo-white.png' : '/img/logo-black.png'}
        loading='eager'
        width={ui?.width ?? 170}
        height={ui?.height ?? 70}
        className="object-contain max-h-[70px] max-w-32 sm:max-w-full"
      />
    </Link>
  );
};

export default Logo;