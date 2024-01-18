import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './Navbar.module.css';
import clsx from 'clsx';
import MenuNavbar from './MenuNavbar';

const Navbar = () => {
  return (
    <>
      <div className={clsx(styles.boxContainer, 'w-full h-16 sm:h-20 lg:h-24')}>
        <div className="container">
          <div className="flex justify-between items-center h-16 sm:h-20 lg:h-24">
            <div className="flex justify-between items-center">
              <Link href="/">
                <span className="text-2xl font-bold text-slate-500">Shop Shoe</span>
              </Link>
            </div>

            <div className="block">
              <MenuNavbar />
            </div>

            <div className="flex justify-between items-center">
              <div className="flex justify-between items-center">
                <Link href="/login">
                  <span className="text-gray-500 hover:text-black ml-4">Đăng nhập</span>
                </Link>
                <Link href="/register">
                  <span className="text-gray-500 hover:text-black ml-4">Đăng ký</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
