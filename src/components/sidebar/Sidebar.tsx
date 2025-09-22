import Image from 'next/image';
import Link from 'next/link';

import { CiLogout } from 'react-icons/ci';
import { IoLogoReact } from 'react-icons/io5';

import { SidebarItem } from './sidebar-item';
import { ITEMS } from './Sidebar.data';

import style from './Sidebar.module.css';

export const Sidebar = () => {
  return (
    <aside className={`${style.aside}`}>
      <div>
        <div className="-mx-6 px-6 py-4">
          <Link className="flex items-center" href="#" title="home">
            <IoLogoReact className="mr-2 text-3xl" />
            <span className="text-3xl">Dash</span>
          </Link>
        </div>

        <div className="mt-8 text-center">
          <Image
            src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"
            alt=""
            className={`${style.image}`}
            width={150}
            height={150}
            priority
          />
          <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
            Cynthia J. Watts
          </h5>
          <span className="hidden text-gray-400 lg:block">Admin</span>
        </div>

        <ul className="space-y-2 tracking-wide mt-8">
          {ITEMS.map(item => (
            <SidebarItem key={item.href} {...item} />
          ))}
        </ul>
      </div>

      <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
        <button className={`${style.button}`}>
          <CiLogout />
          <span className="group-hover:text-gray-700">Logout</span>
        </button>
      </div>
    </aside>
  );
};
