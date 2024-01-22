import CardComponent from '@/components/card/Card';
import { Col, Row } from 'antd';
import React from 'react';

const NewArrivalProduct = () => {
  return (
    <>
      <Row gutter={[16, 8]}>
        <Col className="gutter-row" span={6} xs={24} md={12} xl={6} lg={6}>
          <CardComponent />
        </Col>
        <Col className="gutter-row" span={6} xs={24} md={12} xl={6} lg={6}>
          <CardComponent />
        </Col>
        <Col className="gutter-row" span={6} xs={24} md={12} xl={6} lg={6}>
          <CardComponent />
        </Col>
        <Col className="gutter-row" span={6} xs={24} md={12} xl={6} lg={6}>
          <CardComponent />
        </Col>
        <Col className="gutter-row" span={6} xs={24} md={12} xl={6} lg={6}>
          <CardComponent />
        </Col>
        <Col className="gutter-row" span={6} xs={24} md={12} xl={6} lg={6}>
          <CardComponent />
        </Col>
        <Col className="gutter-row" span={6} xs={24} md={12} xl={6} lg={6}>
          <CardComponent />
        </Col>
        <Col className="gutter-row" span={6} xs={24} md={12} xl={6} lg={6}>
          <CardComponent />
        </Col>
      </Row>
    </>
  );
};

export default NewArrivalProduct;
