'use client';

import { Button, Col, DatePicker, Form, Input, Row, Select, Space, Upload } from 'antd';
import React from 'react';
import { InboxOutlined, UploadOutlined } from '@ant-design/icons';

const { Option } = Select;

const FormRegister = () => {
  const [form] = Form.useForm();

  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    age: '',
    phone: '',
    dateOfBirth: '',
    roleIds: '',
    prefix: '+84',
  };

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

  const normFile = (e: any) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  return (
    <>
      <div className="flex items-center justify-center my-12">
        <div className="border-solid border border-gray-200 w-3/5">
          <h1 className="text-center text-3xl font-bold my-8">Register</h1>
          <div className="my-4 px-16">
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
                    <Input />
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
                    <Input />
                  </Form.Item>
                </Col>

                <Col span={12}>
                  <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your password!',
                      },
                    ]}
                    hasFeedback
                  >
                    <Input.Password />
                  </Form.Item>
                </Col>

                <Col span={12}>
                  <Form.Item
                    name="confirm"
                    label="Confirm Password"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                      {
                        required: true,
                        message: 'Please confirm your password!',
                      },
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (!value || getFieldValue('password') === value) {
                            return Promise.resolve();
                          }
                          return Promise.reject(new Error('The new password that you entered do not match!'));
                        },
                      }),
                    ]}
                  >
                    <Input.Password />
                  </Form.Item>
                </Col>

                <Col span={12}>
                  <Form.Item name="age" label="Age" rules={[{ required: true, message: 'Please input your age!' }]}>
                    <Input style={{ width: '100%' }} />
                  </Form.Item>
                </Col>

                <Col span={12}>
                  <Form.Item
                    name="phone"
                    label="Phone Number"
                    rules={[{ required: true, message: 'Please input your phone number!' }]}
                  >
                    <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                  </Form.Item>
                </Col>

                <Col span={12}>
                  <Form.Item
                    name="gender"
                    label="Gender"
                    rules={[{ required: true, message: 'Please select gender!' }]}
                  >
                    <Select placeholder="select your gender" allowClear>
                      <Option value="male">Male</Option>
                      <Option value="female">Female</Option>
                      <Option value="other">Other</Option>
                    </Select>
                  </Form.Item>
                </Col>

                <Col span={12}>
                  <Form.Item name="date-picker" label="DatePicker" {...config}>
                    <DatePicker className="w-full" />
                  </Form.Item>
                </Col>

                <Col span={24}>
                  <Form.Item label="Dragger">
                    <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
                      <Upload.Dragger name="files" action="/upload.do">
                        <p className="ant-upload-drag-icon">
                          <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                        <p className="ant-upload-hint">Support for a single or bulk upload.</p>
                      </Upload.Dragger>
                    </Form.Item>
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item wrapperCol={{ span: 24, offset: 6 }}>
                <Space>
                  <Button type="default" htmlType="submit">
                    Submit
                  </Button>
                  <Button htmlType="reset">reset</Button>
                </Space>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormRegister;
