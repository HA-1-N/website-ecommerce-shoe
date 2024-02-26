/* eslint-disable react/no-unescaped-entities */
import { Col, Row } from 'antd';
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <div className="bg-gray-100 px-16 py-8">
        <Row gutter={[0, 8]}>
          <Col span={4} xs={24} md={12} xl={4} lg={4}>
            <div>
              <h1 className="text-xl font-bold">Social</h1>
              <ul className="mt-8 text-base text-gray-600">
                <li className="flex items-center my-2">
                  <div>
                    <FaInstagram />
                  </div>
                  <p className="ml-3">Instagram</p>
                </li>
                <li className="flex items-center my-2">
                  <div>
                    <FaTwitter />{' '}
                  </div>
                  <p className="ml-3">Twitter</p>
                </li>
                <li className="flex items-center my-2">
                  <div>
                    <FaFacebook />
                  </div>
                  <p className="ml-3">Facebook</p>
                </li>
                <li className="flex items-center my-2">
                  <div>
                    <FaYoutube />
                  </div>
                  <p className="ml-3">Youtube</p>
                </li>
              </ul>
            </div>
          </Col>
          <Col span={4} xs={24} md={12} xl={4} lg={4}>
            {' '}
            <div>
              <h1 className="text-xl font-bold">Contact</h1>
              <ul className="mt-8 text-base">
                <li className="flex items-center my-2">
                  <p className="text-gray-600">Contact Us</p>
                </li>
                <li className="flex items-center my-2">
                  <p className="text-gray-600">abc@gmail.com</p>
                </li>
                <li className="flex items-center my-2">
                  <p className="text-gray-600">example@email.com</p>
                </li>
                <li className="flex items-center my-2">
                  <p className="text-gray-600">Call us: +1 254 568-5479</p>
                </li>
              </ul>
            </div>
          </Col>
          <Col span={4} xs={24} md={12} xl={4} lg={4}>
            <div>
              <h1 className="text-xl font-bold">About</h1>
              <ul className="mt-8 text-base">
                <li className="flex items-center my-2">
                  <p className="text-gray-600">Support Center</p>
                </li>
                <li className="flex items-center my-2">
                  <p className="text-gray-600">Customer Support</p>
                </li>
                <li className="flex items-center my-2">
                  <p className="text-gray-600">About Us</p>
                </li>
                <li className="flex items-center my-2">
                  <p className="text-gray-600">Copyright</p>
                </li>
              </ul>
            </div>
          </Col>
          <Col span={4} xs={24} md={12} xl={4} lg={4}>
            <div>
              <h1 className="text-xl font-bold">Customer Care</h1>
              <ul className="mt-8 text-base">
                <li className="flex items-center my-2">
                  <p className="text-gray-600">FAQ & Helps</p>
                </li>
                <li className="flex items-center my-2">
                  <p className="text-gray-600">Shipping & Delivery</p>
                </li>
                <li className="flex items-center my-2">
                  <p className="text-gray-600">Return & Exchanges</p>
                </li>
              </ul>
            </div>
          </Col>
          <Col span={4} xs={24} md={12} xl={4} lg={4}>
            <div>
              <h1 className="text-xl font-bold">Our Information</h1>
              <ul className="mt-8 text-base">
                <li className="flex items-center my-2">
                  <p className="text-gray-600">Privacy policy update</p>
                </li>
                <li className="flex items-center my-2">
                  <p className="text-gray-600">Terms & conditions</p>
                </li>
                <li className="flex items-center my-2">
                  <p className="text-gray-600">Return Policy</p>
                </li>
                <li className="flex items-center my-2">
                  <p className="text-gray-600">Site Map</p>
                </li>
              </ul>
            </div>
          </Col>
          <Col span={4} xs={24} md={12} xl={4} lg={4}>
            <div>
              <h1 className="text-xl font-bold">Top Categories</h1>
              <ul className="mt-8 text-base">
                <li className="flex items-center my-2">
                  <p className="text-gray-600">Men's Wear</p>
                </li>
                <li className="flex items-center my-2">
                  <p className="text-gray-600">Woman's Wear</p>
                </li>
                <li className="flex items-center my-2">
                  <p className="text-gray-600">Kid's Wear</p>
                </li>
                <li className="flex items-center my-2">
                  <p className="text-gray-600">Sport Wear</p>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Footer;
