'use client';

import { Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import CartItem from './CartItem';
import CartSummary from './CartSummary';
import { getCartItemApi } from '@/lib/api/cart.api';
import { getLocalStorageId } from '@/lib/utils/auth.util';
import { CartItemModel } from '@/lib/model/cart.model';
import { useAppSelector } from '@/redux/hook';

const Cart = () => {
  const countCart = useAppSelector((state) => state.cart.countCartIncrement);

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

  useEffect(() => {
    getCartItem();
  }, [countCart]);
  return (
    <>
      <div className="container mx-auto my-8">
        <h1 className="text-2xl font-bold my-8">Your Shopping Cart</h1>
        <Row gutter={[16, 16]}>
          <Col span={18}>
            <CartItem listCartItem={listCartItem} getCartItem={getCartItem} />
          </Col>
          <Col span={6}>
            <CartSummary listCartItem={listCartItem} />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Cart;
