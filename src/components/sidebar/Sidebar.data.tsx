import {
  IoBasketOutline,
  IoCalendarOutline,
  IoCheckboxOutline,
  IoCodeWorkingOutline,
  IoListOutline,
} from 'react-icons/io5';

export const ITEMS = [
  {
    href: '/dashboard',
    text: 'Dashboard',
    icon: <IoCalendarOutline size={23} />,
  },
  {
    href: '/dashboard/rest-todos',
    text: 'Rest todos',
    icon: <IoCheckboxOutline size={23} />,
  },
  {
    href: '/dashboard/server-todos',
    text: 'Server actions',
    icon: <IoListOutline size={23} />,
  },
  {
    href: '/dashboard/cookies',
    text: 'Cookies',
    icon: <IoCodeWorkingOutline size={23} />,
  },
  {
    href: '/dashboard/products',
    text: 'Products',
    icon: <IoBasketOutline size={23} />,
  },
];
