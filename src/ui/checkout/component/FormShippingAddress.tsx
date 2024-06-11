'use client';

import { OrderModels } from '@/lib/model/order.model';
import { Button, Col, Form, Input, Row, Select, Space } from 'antd';
import React from 'react';

const { Option } = Select;

interface FormShippingAddressProps {
  current: number;
  setCurrent: (value: number) => void;
  valuesUpload: OrderModels;
  setValuesUpload: (value: OrderModels) => void;
}

const FormShippingAddress = (props: FormShippingAddressProps) => {
  const { current, setCurrent, valuesUpload, setValuesUpload } = props;

  const initialValues = {
    name: valuesUpload?.name,
    address: valuesUpload?.address,
    country: valuesUpload?.country,
    city: valuesUpload?.city,
    phone: valuesUpload?.phone,
    prefix: '+84',
  };

  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('values', values);

    if (values) {
      setCurrent(current + 1);
      setValuesUpload(values);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="84">+84</Option>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  return (
    <>
      <div>
        <h1 className="text-2xl font-bold my-8">Shipping address</h1>
        <div>
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
            form={form}
          >
            <Row gutter={[32, 8]}>
              <Col xs={24} md={24} sm={24} lg={12}>
                <Form.Item
                  name="name"
                  label="Name"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your name!',
                    },
                  ]}
                >
                  <Input size="large" placeholder={'Enter your name'} />
                </Form.Item>
              </Col>

              <Col xs={24} md={24} sm={24} lg={12}>
                <Form.Item
                  name="address"
                  label="Address"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your address!',
                    },
                  ]}
                >
                  <Input size="large" placeholder={'Enter your address'} />
                </Form.Item>
              </Col>

              <Col xs={24} md={24} sm={24} lg={12}>
                <Form.Item
                  name="city"
                  label="City"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your city!',
                    },
                  ]}
                >
                  <Input size="large" placeholder={'Enter your city'} />
                </Form.Item>
              </Col>

              <Col xs={24} md={24} sm={24} lg={12}>
                <Form.Item
                  name="country"
                  label="Country"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your country!',
                    },
                  ]}
                >
                  <Input size="large" placeholder={'Enter your address'} />
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item
                  name="phone"
                  label="Phone Number"
                  rules={[{ required: true, message: 'Please input your phone number!' }]}
                >
                  <Input
                    size="large"
                    addonBefore={prefixSelector}
                    style={{ width: '100%' }}
                    placeholder={'Enter your phone'}
                  />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item>
              <Space>
                <Button type="default" htmlType="submit">
                  Continue payment
                </Button>
              </Space>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default FormShippingAddress;
