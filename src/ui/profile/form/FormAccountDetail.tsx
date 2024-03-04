'use client';

import { useAppSelector } from '@/redux/hook';
import { Col, DatePicker, Form, Input, Row, Select } from 'antd';
import React, { useEffect, useState } from 'react';

const FormAccountDetail = () => {
  const { Option } = Select;
  const [form] = Form.useForm();

  const initialValues = {
    name: '',
    email: '',
    phone: '',
  };

  const [uploadedImage, setUploadedImage] = useState<any>(null);

  useEffect(() => {}, []);

  const config = {
    rules: [{ type: 'object' as const, required: true, message: 'Please select time!' }],
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

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <div className="px-16">
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
                <Input placeholder={'Enter your name'} />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                name="email"
                label="E-mail"
                rules={[
                  {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                  },
                  {
                    required: true,
                    message: 'Please input your E-mail!',
                  },
                ]}
              >
                <Input placeholder={'Enter your email'} />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item name="age" label="Age" rules={[{ required: true, message: 'Please input your age!' }]}>
                <Input style={{ width: '100%' }} placeholder={'Enter your age'} />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                name="phone"
                label="Phone Number"
                rules={[{ required: true, message: 'Please input your phone number!' }]}
              >
                <Input addonBefore={prefixSelector} style={{ width: '100%' }} placeholder={'Enter your phone'} />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item name="gender" label="Gender" rules={[{ required: true, message: 'Please select gender!' }]}>
                <Select placeholder="select your gender" allowClear>
                  <Option value="M">Male</Option>
                  <Option value="F">Female</Option>
                  <Option value="O">Other</Option>
                </Select>
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item name="date-picker" label="DatePicker" {...config}>
                <DatePicker className="w-full" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  );
};

export default FormAccountDetail;
