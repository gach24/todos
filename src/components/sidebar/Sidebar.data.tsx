import {
  IoCalendarOutline,
  IoCheckboxOutline,
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
];
