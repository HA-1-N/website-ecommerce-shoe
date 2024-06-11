/* eslint-disable react/jsx-key */
'use client';

import { Steps } from 'antd';
import React, { useState } from 'react';
import FormShippingAddress from './FormShippingAddress';
import { OrderModels } from '@/lib/model/order.model';
import FormShippingMethod from './FormShippingMethod';
import FormPaymentMethod from './FormPaymentMethod';
import FormFinish from './FormFinish';

const OrderCheckOut = ({ openNotificationCustom }: { openNotificationCustom: any }) => {
  const initialValues = {
    name: '',
    address: '',
    prefix: '',
    phone: '',
    city: '',
    country: '',
    shippingMethod: '',
  };

  const [valuesUpload, setValuesUpload] = useState<OrderModels>(initialValues);
  // console.log('valuesUpload', valuesUpload);

  const items = [
    {
      title: 'Shipping Address',
      description: 'Enter your shipping address',
      // disabled: false,
    },
    {
      title: 'Shipping Method',
      description: 'Choose the shipping method that you want',
      disabled:
        valuesUpload?.name &&
        valuesUpload?.address &&
        valuesUpload?.city &&
        valuesUpload?.country &&
        valuesUpload?.phone &&
        valuesUpload?.prefix
          ? false
          : true,
    },
    {
      title: 'Payment Method',
      description: 'Choose the payment method that you want',
      disabled: valuesUpload?.shippingMethod ? false : true,
    },
    {
      title: 'Finish',
      description: 'Finish',
      disabled:
        valuesUpload?.name &&
        valuesUpload?.address &&
        valuesUpload?.city &&
        valuesUpload?.country &&
        valuesUpload?.phone &&
        valuesUpload?.prefix &&
        valuesUpload?.shippingMethod &&
        valuesUpload?.paymentMethod
          ? false
          : true,
    },
  ];

  const [current, setCurrent] = useState(0);
  const onChange = (value: number) => {
    setCurrent(value);
  };

  const forms = [
    <FormShippingAddress
      current={current}
      setCurrent={setCurrent}
      valuesUpload={valuesUpload}
      setValuesUpload={setValuesUpload}
    />,
    <FormShippingMethod
      current={current}
      setCurrent={setCurrent}
      valuesUpload={valuesUpload}
      setValuesUpload={setValuesUpload}
    />,
    <FormPaymentMethod
      current={current}
      setCurrent={setCurrent}
      valuesUpload={valuesUpload}
      setValuesUpload={setValuesUpload}
    />,
    <FormFinish
      valuesUpload={valuesUpload}
      setValuesUpload={setValuesUpload}
      openNotificationCustom={openNotificationCustom}
    />,
  ];

  return (
    <>
      <div>
        <Steps current={current} onChange={onChange} items={items} />
        <div>{forms[current]}</div>
      </div>
    </>
  );
};

export default OrderCheckOut;
