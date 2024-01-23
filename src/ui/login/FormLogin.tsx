/* eslint-disable react/no-unescaped-entities */
'use client';

import { Button, Checkbox, Form, Input } from 'antd';
import Link from 'next/link';
import React from 'react';
import styles from './FormLogin.module.css';
import clsx from 'clsx';

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const FormLogin = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <div className="flex items-center justify-center my-12">
        <div className="border-solid border border-gray-200 w-2/5">
          <h1 className="text-center text-3xl font-bold my-8">Login</h1>
          <div className="my-4 ">
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              style={{ maxWidth: 600 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              //   layout="vertical"
            >
              <Form.Item<FieldType>
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input size="large" placeholder="Enter username" />
              </Form.Item>

              <Form.Item<FieldType>
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input.Password size="large" placeholder="Enter password" />
              </Form.Item>

              <Form.Item<FieldType> name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button htmlType="submit" className="w-full">
                  Login
                </Button>
              </Form.Item>
            </Form>
          </div>

          <div className="text-center my-8">
            <div className="flex items-center justify-evenly">
              <Link href={'#'}>
                <span
                  className={clsx(
                    styles.forgotPass,
                    'hover:text-orange-300 hover:decoration-orange-300 transition duration-300 ease-out hover:ease-in ',
                  )}
                >
                  Forgot Password
                </span>{' '}
              </Link>
              <div>
                <span>
                  Don't have account?{' '}
                  <Link href={'/register'}>
                    <span className="text-sky-500">Register</span>
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormLogin;
