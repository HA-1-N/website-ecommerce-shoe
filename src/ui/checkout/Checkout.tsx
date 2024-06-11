'use client';

import { Col, Row, notification } from 'antd';
import React from 'react';
import FormShippingAddress from './component/FormShippingAddress';
import YourOrder from './component/YourOrder';
import OrderCheckOut from './component/OrderCheckOut';

type NotificationType = 'success' | 'info' | 'warning' | 'error';

const Checkout = () => {
  const [api, contextHolder] = notification.useNotification();

  const openNotificationCustom = (type: NotificationType, message: string, description: string) => {
    api[type as NotificationType]({
      message,
      description,
    });
  };

  return (
    <>
      {contextHolder}
      <div className="container mx-auto my-8">
        <Row gutter={[32, 16]}>
          <Col span={16}>
            <OrderCheckOut openNotificationCustom={openNotificationCustom} />
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
