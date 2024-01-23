import { Col, Row } from 'antd';
import React from 'react';

const Footer = () => {
  return (
    <>
      <div className="bg-gray-100 px-16 py-8">
        <Row gutter={[0, 8]}>
          <Col span={4}>
            <div>
              <h1 className="text-xl font-bold">Social</h1>
              <ul className="mt-8">
                <li className="flex align-center">
                  <div>icon</div>
                  <p className="ml-4">abc</p>
                </li>
                <li className="flex align-center">
                  <div>icon</div>
                  <p className="ml-4">abc</p>
                </li>
                <li className="flex align-center">
                  <div>icon</div>
                  <p className="ml-4">abc</p>
                </li>
                <li className="flex align-center">
                  <div>icon</div>
                  <p className="ml-4">abc</p>
                </li>
              </ul>
            </div>
          </Col>
          <Col span={4}></Col>
          <Col span={4}></Col>
          <Col span={4}></Col>
          <Col span={4}></Col>
          <Col span={4}></Col>
        </Row>
      </div>
    </>
  );
};

export default Footer;
