import { Col, Row } from 'antd';
import React from 'react';
import FormShippingAddress from './component/FormShippingAddress';
import YourOrder from './component/YourOrder';
import OrderCheckOut from './component/OrderCheckOut';

const Checkout = () => {
  return (
    <>
      <div className="container mx-auto my-8">
        <Row gutter={[32, 16]}>
          <Col span={16}>
            <OrderCheckOut />
          </Col>
          <Col span={8}>
            <YourOrder />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Checkout;
