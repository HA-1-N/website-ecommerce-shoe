'use client';

import CardCartItem from '@/components/card/CardCartItem';
import { removeCartItemApi } from '@/lib/api/cart.api';
import { CartItemModel } from '@/lib/model/cart.model';
import { getLocalStorageId } from '@/lib/utils/auth.util';
import { setCountCart } from '@/redux/feature/cart.slice';
import { useAppDispatch } from '@/redux/hook';
import { useState } from 'react';

interface CartItemProps {
  listCartItem: CartItemModel[];
  getCartItem: () => Promise<void>;
  openNotificationCustom: (
    type: 'success' | 'info' | 'warning' | 'error',
    message: string,
    description: string,
  ) => void;
}

const CartItem = (props: CartItemProps) => {
  const { listCartItem, getCartItem, openNotificationCustom } = props;

  // console.log('listCartItem', listCartItem);
  const userId = getLocalStorageId();

  const dispatch = useAppDispatch();

  const inCrementCountCart = () => {
    dispatch(setCountCart());
  };

  const handleDeleteCartItem = async (cartItemId?: number | null) => {
    if (!cartItemId) return;

    try {
      const res = await removeCartItemApi({ cartItemId });
      if (res) {
        getCartItem();
        inCrementCountCart();
        openNotificationCustom('success', 'Remove item success', '');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        {listCartItem?.map((item: CartItemModel, index: number) => (
          <CardCartItem
            cartItemId={item?.id}
            productName={item?.product?.name}
            key={index}
            productCode={item?.product?.id}
            color={item?.color?.name}
            size={item?.size?.name}
            price={item?.product?.price}
            quantity={item?.quantity}
            imageSrc={item?.productImage?.image}
            onRemove={() => handleDeleteCartItem(item?.id)}
            inCrementCountCart={inCrementCountCart}
            userId={userId}
            openNotificationCustom={openNotificationCustom}
          />
        ))}
      </div>
    </>
  );
};

export default CartItem;
