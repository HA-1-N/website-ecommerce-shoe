'use client';

import CardCartItem from '@/components/card/CardCartItem';
import { getCartItemApi } from '@/lib/api/cart.api';
import { getLocalStorageId } from '@/lib/utils/auth.util';
import React, { useEffect } from 'react';

const CartItem = () => {
  const getIdUser = getLocalStorageId();

  const getCartItem = async () => {
    getCartItemApi(Number(getIdUser))
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCartItem();
  }, []);

  return (
    <>
      <div>
        <CardCartItem />
      </div>
    </>
  );
};

export default CartItem;
