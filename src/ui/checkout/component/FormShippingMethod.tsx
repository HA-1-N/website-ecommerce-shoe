import React, { useEffect, useState } from 'react';
import { ShippingMethodModel } from '../../../lib/model/shipping-method';
import { filterShippingMethod } from '@/lib/api/shipping-method.api';
import { Button, Form, Radio, Space } from 'antd';
import { OrderModels } from '@/lib/model/order.model';
import ShippingMethodCustom from '@/components/ShippingMethodCustom';

interface FormShippingMethodProps {
  current: number;
  setCurrent: (value: number) => void;
  valuesUpload: OrderModels;
  setValuesUpload: (value: OrderModels) => void;
}

const FormShippingMethod = (props: FormShippingMethodProps) => {
  const { current, setCurrent, valuesUpload, setValuesUpload } = props;

  const initialValues = {
    shippingMethod: valuesUpload?.shippingMethod,
  };

  const [shippingMethodDetails, setShippingMethodDetails] = useState<ShippingMethodModel[]>([]);

  const getShippingMethod = async () => {
    // Call API to get shipping method

    const data = {
      method: '',
      price: 0,
    };

    const params = {
      page: 0,
      size: 10000,
    };

    try {
      const res = await filterShippingMethod(data, params);
      setShippingMethodDetails(res?.data);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    getShippingMethod();
  }, []);

  const onFinish = (values: any) => {
    console.log('values', values);
    if (values) {
      // Call API to update shipping method
      setCurrent(current + 1);
      setValuesUpload({ ...valuesUpload, ...values });
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <div className="py-16">
        <Form
          name="basic"
          labelCol={{ span: 12 }}
          wrapperCol={{ span: 32 }}
          style={{ maxWidth: '100%' }}
          initialValues={initialValues}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          colon={false}
          layout="vertical"
          //   form={form}
        >
          <Form.Item
            name="shippingMethod"
            label={<p className="text-2xl font-bold">Shipping Method</p>}
            rules={[{ required: true, message: 'Please pick an shipping method!' }]}
          >
            <Radio.Group>
              {shippingMethodDetails.map((item) => (
                <Radio value={item.method} key={item.id} className="w-full my-4">
                  <ShippingMethodCustom key={item?.id} method={item?.method} price={item?.price} />
                </Radio>
              ))}
            </Radio.Group>
          </Form.Item>

          <Form.Item>
            <Space>
              <Button type="default" htmlType="submit">
                Continue payment
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default FormShippingMethod;
