'use client';

import {usePathname} from "next/navigation";
import Link from "next/link";
import type {ItemMenuProps} from "@/resources/types";
import {clsx} from "clsx";
import {useEffect, useState} from "react";

const ItemMenu = ({link, label, ...ui}: ItemMenuProps) => {
  const pathname = usePathname();
  const isActive = pathname === link || link === '/';

  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (isOpen) setShow(isOpen);
  }, [isOpen]);

  const handleAnimationEnd = () => {
    if (!isOpen && show) {
      setShow(false);
    }
  };

  return (
    <li
      className={clsx(
        'nav-item relative',
        ui?.classNameItem,
        isActive && ui?.classNameItemActive,
        ui?.className
      )}
      data-active={isActive}
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
      {show && (
        <div
          className={clsx(
            "absolute transition-all duration-300 ease-out z-10",
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          )}
          onAnimationEnd={handleAnimationEnd}
        >
          {ui?.children}
        </div>
      )}
    </li>
  );
};

export default ItemMenu;