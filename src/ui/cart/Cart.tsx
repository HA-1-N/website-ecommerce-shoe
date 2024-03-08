import { Col, Row } from 'antd';
import React from 'react';
import CartItem from './CartItem';
import CartSummary from './CartSummary';

const Cart = () => {
  return (
    <>
      <div className="container mx-auto my-8">
        <h1 className="text-2xl font-bold my-8">Your Shopping Cart</h1>
        <Row gutter={[16, 16]}>
          <Col span={18}>
            <CartItem />
          </Col>
          <Col span={6}>
            <CartSummary />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Cart;
