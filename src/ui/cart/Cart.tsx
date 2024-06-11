'use client';

import { Col, Row, notification } from 'antd';
import React, { useEffect, useState } from 'react';
import CartItem from './CartItem';
import CartSummary from './CartSummary';
import { getCartItemApi } from '@/lib/api/cart.api';
import { getLocalStorageId } from '@/lib/utils/auth.util';
import { CartItemModel } from '@/lib/model/cart.model';
import { useAppSelector } from '@/redux/hook';

type NotificationType = 'success' | 'info' | 'warning' | 'error';

const Cart = () => {
  const countCart = useAppSelector((state) => state.cart.countCartIncrement);

  const [api, contextHolder] = notification.useNotification();

  const [listCartItem, setListCartItem] = useState<CartItemModel[]>([]);

  const getIdUser = getLocalStorageId();

  const getCartItem = async () => {
    getCartItemApi(Number(getIdUser))
      .then((res) => {
        setListCartItem(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const openNotificationCustom = (type: NotificationType, message: string, description: string) => {
    api[type as NotificationType]({
      message,
      description,
    });
  };

  useEffect(() => {
    getCartItem();
  }, [countCart]);
  return (
    <>
      {contextHolder}
      <div className="container mx-auto my-8">
        <h1 className="text-2xl font-bold my-8">Your Shopping Cart</h1>
        <Row gutter={[16, 16]}>
          <Col span={18}>
            <CartItem
              openNotificationCustom={openNotificationCustom}
              listCartItem={listCartItem}
              getCartItem={getCartItem}
            />
          </Col>
          <Col span={6}>
            <CartSummary listCartItem={listCartItem} openNotificationCustom={openNotificationCustom} />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Cart;
