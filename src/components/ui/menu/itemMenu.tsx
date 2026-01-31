'use client';

import { usePathname } from "next/navigation";
import Link from "next/link";
import type { ItemMenuProps } from "@/resources/types";
import { clsx } from "clsx";
import { useState } from "react";

const ItemMenu = ({ link, label, ...ui }: ItemMenuProps) => {
  const pathname = usePathname();
  const isActive = pathname === link || link === '/';
  const [ isOpen, setIsOpen ] = useState(false);

  return (
    <li
      className={clsx(
        'nav-item relative',
        ui?.classNameItem,
        isActive && ui?.classNameItemActive,
        ui?.className
      )}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link
        href={link}
        className={clsx(
          'nav-link px-3 py-2 text-inherit',
          ui?.classNameLink,
          isActive && ui?.classNameLinkActive
        )}
      >
        {label}
      </Link>

      <div
        className={clsx(
          "absolute z-10 transition-all duration-500 ease-out pt-3",
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        )}
      >
        {ui?.children}
      </div>
    </li>
  );
};

export default ItemMenu;