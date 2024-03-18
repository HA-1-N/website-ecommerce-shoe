'use client';

import { logoutApi } from '@/lib/api/auth.api';
import { clearStorage, getLocalStorageRefreshToken } from '@/lib/utils/auth.util';
import { setIncrementCount } from '@/redux/feature/auth.slice';
import { setCountCart } from '@/redux/feature/cart.slice';
import { useAppDispatch } from '@/redux/hook';
import { useRouter } from 'next/navigation';
import React from 'react';

const Logout = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const getRefreshToken = getLocalStorageRefreshToken();

  const handleClickLogout = async () => {
    const params = {
      refreshToken: getRefreshToken,
    };

    try {
      const res = await logoutApi(params.refreshToken);
      if (res) {
        clearStorage();
        router.push('/login');
        dispatch(setIncrementCount());
        dispatch(setCountCart());
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <div className="flex justify-center items-center">
          <button className="px-8 py-4 bg-black text-white text-lg" onClick={handleClickLogout}>
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Logout;
