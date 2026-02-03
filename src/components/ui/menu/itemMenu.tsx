'use client';

import {usePathname} from "next/navigation";
import Link from "next/link";
import type {ItemMenuProps} from "@/resources/types";
import {clsx} from "clsx";
import {useState} from "react";
import Icon from "@/components/ui/icon";
import useIsMobile from "@/hooks/useIsMobile";
import {dropdownStyles, linkStyles, liStyles} from "@ui/menu/itemMenu.styles";

const ItemMenu = ({link, label, icon, ...ui}: ItemMenuProps) => {
  const pathname = usePathname();
  const isActive = pathname === link || link === '/';
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  const liClasses = clsx(
    ui?.classNameItem,
    ui?.className,
    isActive && ui?.classNameItemActive,
    liStyles({active: isActive, open: isOpen, hasChildren: !!ui.children})
  );

  const linkClasses = clsx(
    ui?.classNameLink,
    isActive && ui?.classNameLinkActive,
    linkStyles({hasChildren: !!ui.children})
  );

  const dropdownClasses = clsx(
    dropdownStyles({mobile: isMobile, open: isOpen})
  );

  return (
    <li
      className={liClasses}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link
        href={link}
        className={linkClasses}
        onClick={() => isMobile && setIsOpen(!isOpen)}
      >
        {icon && (
          <Icon
            name={icon}
            className={ui?.classNameIcon}
            size="20"
          />
        )}
        {label}
      </Link>

      {ui?.children && (
        <div className={dropdownClasses}>
          {ui?.children}
        </div>
      )}
    </li>
  );
};

export default ItemMenu;