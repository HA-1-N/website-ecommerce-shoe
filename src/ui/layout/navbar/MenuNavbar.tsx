import clsx from 'clsx';
import React from 'react';
import styles from './MenuNavbar.module.css';
import Link from 'next/link';

const MenuNavbar = () => {
  return (
    <>
      <div className="flex justify-between items-center relative">
        <Link href={'/'} className={clsx(styles.itemNav, 'block px-2')}>
          <span className={clsx('text-gray-500 hover:text-black cursor-pointer')}>Home</span>
        </Link>

        <div className={clsx(styles.itemNav, 'ml-4 cursor-pointer relative p-2')}>
          <span className="text-gray-500 hover:text-black ">Products</span>
          <div className={clsx(styles.listContainer)}>
            <ul className={clsx(styles.listItem, 'absolute bg-white shadow-md rounded-md mt-2 z-10')}>
              <li className={clsx(styles.itemChild, 'py-2 px-4 hover:bg-gray-300')}>
                <Link href={'/products/search'} className={clsx(styles.itemLink, 'text-gray-500')}>
                  All Product
                </Link>
              </li>
              {/* <li className={clsx(styles.itemChild, 'py-2 px-4 hover:bg-gray-300')}>
                <Link href={'#'} className={clsx(styles.itemLink, 'text-gray-500')}>
                  New Arrival
                </Link>
              </li>
              <li className={clsx(styles.itemChild, 'py-2 px-4 hover:bg-gray-300')}>
                <Link href={'#'} className={clsx(styles.itemLink, 'text-gray-500')}>
                  Top Seller
                </Link>
              </li>
              <li className={clsx(styles.itemChild, 'py-2 px-4 hover:bg-gray-300')}>
                <Link href={'#'} className={clsx(styles.itemLink, 'text-gray-500')}>
                  Trending
                </Link>
              </li> */}
            </ul>
          </div>
        </div>

        <div className={clsx(styles.itemNav, 'ml-4 cursor-pointer relative p-2')}>
          <span className="text-gray-500 hover:text-black ">Category</span>
          <div className={clsx(styles.listContainer)}>
            <ul className={clsx(styles.listItem, 'absolute bg-white shadow-md rounded-md mt-2 z-10')}>
              <li className={clsx(styles.itemChild, 'py-2 px-4 hover:bg-gray-300')}>
                <Link href={'#'} className={clsx(styles.itemLink, 'text-gray-500')}>
                  All Category
                </Link>
              </li>
              <li className={clsx(styles.itemChild, 'py-2 px-4 hover:bg-gray-300')}>
                <Link href={'#'} className={clsx(styles.itemLink, 'text-gray-500')}>
                  Street
                </Link>
              </li>
              <li className={clsx(styles.itemChild, 'py-2 px-4 hover:bg-gray-300')}>
                <Link href={'#'} className={clsx(styles.itemLink, 'text-gray-500')}>
                  Sedal
                </Link>
              </li>
              <li className={clsx(styles.itemChild, 'py-2 px-4 hover:bg-gray-300')}>
                <Link href={'#'} className={clsx(styles.itemLink, 'text-gray-500')}>
                  Sport
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={clsx(styles.itemNav, 'ml-4 cursor-pointer relative p-2')}>
          <span className="text-gray-500 hover:text-black ">Brands</span>
          <div className={clsx(styles.listContainer)}>
            <ul className={clsx(styles.listItem, 'absolute bg-white shadow-md rounded-md mt-2 z-10')}>
              <li className={clsx(styles.itemChild, 'py-2 px-4 hover:bg-gray-300')}>
                <Link href={'#'} className={clsx(styles.itemLink, 'text-gray-500')}>
                  All brands
                </Link>
              </li>
              <li className={clsx(styles.itemChild, 'py-2 px-4 hover:bg-gray-300')}>
                <Link href={'#'} className={clsx(styles.itemLink, 'text-gray-500')}>
                  Nike
                </Link>
              </li>
              <li className={clsx(styles.itemChild, 'py-2 px-4 hover:bg-gray-300')}>
                <Link href={'#'} className={clsx(styles.itemLink, 'text-gray-500')}>
                  Adidas
                </Link>
              </li>
              <li className={clsx(styles.itemChild, 'py-2 px-4 hover:bg-gray-300')}>
                <Link href={'#'} className={clsx(styles.itemLink, 'text-gray-500')}>
                  Puma
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuNavbar;
