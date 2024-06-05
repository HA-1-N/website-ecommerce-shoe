'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import styles from './Navbar.module.css';
import clsx from 'clsx';
import MenuNavbar from './MenuNavbar';
import { FaSearch, FaShoppingBag, FaUser } from 'react-icons/fa';
import ModalSearch from '../modal/ModalSearch';
import { getLocalStorageId } from '@/lib/utils/auth.util';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { getCountCartApi } from '@/lib/api/cart.api';
import { getCurrentUserByIdAsync } from '@/redux/feature/auth.slice';

const Navbar = () => {
  const dispatch = useAppDispatch();

  const getCountNumberLogin = useAppSelector((state) => state.auth.countNumberLogin);
  const countCartIncrement = useAppSelector((state) => state.cart.countCartIncrement);
  const currentUser = useAppSelector((state) => state.auth.currentUser);

  const getUserIdLocaleStorage = getLocalStorageId();

  const [isOpenModalSearch, setIsOpenModalSearch] = React.useState(false);
  const [userId, setUserId] = React.useState<string | null>(null);
  const [countCart, setCountCart] = React.useState<number>(0);

  const getUserId = () => {
    // setUserId(getUserIdLocaleStorage);
    setUserId(getUserIdLocaleStorage ? getUserIdLocaleStorage : null);
  };

  const getCurrentUser = () => {
    dispatch(getCurrentUserByIdAsync(Number(getUserIdLocaleStorage)));
  };

  const getCountCart = async () => {
    try {
      const res = await getCountCartApi(Number(getUserIdLocaleStorage));
      setCountCart(Number(res?.data));
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    getCountCart();
  }, [countCartIncrement]);

  useEffect(() => {
    getUserId();
    getCountCart();
    getCurrentUser();
  }, [getCountNumberLogin]);

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

                <Link href={userId ? '/cart' : '/login'}>
                  <div className="text-gray-500 hover:text-black mx-4 text-xl transition duration-300 ease-in-out relative">
                    <FaShoppingBag />
                    <div
                      className="absolute text-white text-xs bg-orange-500 px-1.5 left-2/4"
                      style={{ borderRadius: '50%', top: '-4px' }}
                    >
                      {countCart}
                    </div>
                  </div>
                </Link>
                {userId !== null ? (
                  <Link href="/profile">
                    <div className="text-gray-500 hover:text-black ml-4 text-xl transition duration-300 ease-in-out">
                      <Image src={currentUser?.image} alt="logo_icon" width={30} height={30} />
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
