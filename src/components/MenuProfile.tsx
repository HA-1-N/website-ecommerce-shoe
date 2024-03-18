'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { IoHomeOutline } from 'react-icons/io5';

const dataMenu = [
  {
    icon: <IoHomeOutline />,
    name: 'Home',
    href: '/profile',
  },
  {
    icon: <IoHomeOutline />,
    name: 'Account Detail',
    href: '/profile/account-detail',
  },
  {
    icon: <IoHomeOutline />,
    name: 'Change Password',
    href: '/profile/change-password',
  },

  {
    icon: <IoHomeOutline />,
    name: 'Logout',
    href: '/profile/logout',
  },
];

const MenuProfile = () => {
  const pathname = usePathname();

  const [selected, setSelected] = React.useState<number>(0);

  React.useEffect(() => {
    const index = dataMenu.findIndex((item) => item.href === pathname);
    setSelected(index);
  }, [pathname]);

  const handleSelect = (index: number, href: string) => {
    setSelected(index);
  };

  return (
    <>
      <div>
        <ul>
          {dataMenu.map((item, index) => (
            <li
              key={index}
              onClick={() => handleSelect(index, item?.href)}
              className={clsx(
                {
                  ['bg-gray-200']: selected === index,
                  ['font-bold']: selected === index,
                },
                'p-4 cursor-pointer',
              )}
            >
              <Link href={item?.href} className={clsx({ ['hover:text-black']: selected === index })}>
                <div className="flex items-center space-x-4 text-xl">
                  <span>{item?.icon}</span>
                  <span>{item?.name}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MenuProfile;
