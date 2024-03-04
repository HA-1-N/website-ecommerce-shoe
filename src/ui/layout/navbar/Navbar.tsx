'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './Navbar.module.css';
import clsx from 'clsx';
import MenuNavbar from './MenuNavbar';
import { FaSearch, FaShoppingBag, FaUser } from 'react-icons/fa';
import ModalSearch from '../modal/ModalSearch';
import { getLocalStorageId } from '@/lib/utils/auth.util';

const Navbar = () => {
  const [isOpenModalSearch, setIsOpenModalSearch] = React.useState(false);

  const getUserId = getLocalStorageId();

  const handleOpenModalSearch = () => {
    setIsOpenModalSearch(true);
    document.body.classList.add('overflow-hidden');
  };

  const handleCloseModalSearch = () => {
    setIsOpenModalSearch(false);
    document.body.classList.remove('overflow-hidden');
  };

  return (
    <>
      {isOpenModalSearch && <ModalSearch handleClose={handleCloseModalSearch} />}
      <div className={clsx(styles.boxContainer, 'w-full h-16 sm:h-20 lg:h-24')}>
        <div className="container mx-auto">
          <div className="flex justify-between items-center h-16 sm:h-20 lg:h-24">
            <div className="flex justify-between items-center">
              <Link href="/">
                <span className="text-2xl font-bold text-slate-500">Shop Shoe</span>
              </Link>
            </div>

            <div className="block max-[1024px]:hidden">
              <MenuNavbar />
            </div>

            <div className="flex justify-between items-center">
              <div className="flex justify-between items-center">
                <div
                  className="text-gray-500 hover:text-black mx-4 text-xl transition duration-300 ease-in-out cursor-pointer"
                  onClick={handleOpenModalSearch}
                >
                  <FaSearch />
                </div>

                <Link href="/register">
                  <div className="text-gray-500 hover:text-black mx-4 text-xl transition duration-300 ease-in-out">
                    <FaShoppingBag />
                  </div>
                </Link>
                {getUserId !== null ? (
                  <Link href="/profile">
                    <div className="text-gray-500 hover:text-black ml-4 text-xl transition duration-300 ease-in-out">
                      {/* <Image /> */}
                      abc
                    </div>
                  </Link>
                ) : (
                  <Link href="/login">
                    <div className="text-gray-500 hover:text-black ml-4 text-xl transition duration-300 ease-in-out">
                      <FaUser />
                    </div>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
