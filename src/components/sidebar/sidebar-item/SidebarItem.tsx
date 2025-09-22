'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { SidebarItemProps } from './SidebarItem.types';
import style from './SidebarItem.module.css';

export const SidebarItem = ({ href, text, icon }: SidebarItemProps) => {
  return (
    <>
      <li>
        <Link
          className={`${style.link} ${usePathname() === href ? style.activeLink : ''}`}
          href={href}
        >
          {icon}
          <span className="-mr-1 font-medium">{text}</span>
        </Link>
      </li>
    </>
  );
};
