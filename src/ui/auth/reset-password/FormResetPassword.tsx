'use client';

import { useEmail } from '@/context/EmailContext';
import { resetPasswordApi } from '@/lib/api/auth.api';
import { getMsgErrorApi } from '@/lib/utils/form.util';
import { Button, Form, Input, notification } from 'antd';
import { useRouter } from 'next/navigation';
import React from 'react';

type NotificationType = 'success' | 'info' | 'warning' | 'error';

const FormResetPassword = () => {
  const initialValues = {
    password: '',
    confirm: '',
  };

  const router = useRouter();

  const [api, contextHolder] = notification.useNotification();

  const { email } = useEmail();
  // console.log('email', email);

  const onFinish = async (values: any) => {
    console.log('Success:', values);
    const newValues = {
      email: email ? email : '',
      password: values.password,
    };

    try {
      const res = await resetPasswordApi(newValues);
      if (res) {
        openNotification('success', res?.data, 'Success');
        router.push('/login');
      }
    } catch (error) {
      openNotification('error', getMsgErrorApi(error), 'Error');
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const openNotification = (type: NotificationType, message?: any, description?: any) => {
    api[type as NotificationType]({
      message,
      description,
    });
  };

  return (
    <>
      {contextHolder}
      <div className="h-full flex items-center justify-center my-5">
        <div
          className="bg-white rounded shadow-lg sm:w-4/5 lg:w-3/5 md:w-2/3 xl:w-2/5 max-sm:w-4/5"
          style={{ maxWidth: '600px' }}
        >
          <div className="container">
            <div>
              <h1 className="text-2xl font-bold text-center my-3">Reset Password</h1>
            </div>
            <div className="p-3">
              <Form
                initialValues={initialValues}
                name="basic"
                labelCol={{ span: 12 }}
                wrapperCol={{ span: 32 }}
                style={{ maxWidth: '100%' }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                colon={false}
                layout="vertical"
              >
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
                  <Input.Password placeholder={'Enter your password'} />
                </Form.Item>

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
                  <Input.Password placeholder={'Enter your confirm password'} />
                </Form.Item>

                <Form.Item>
                  <Button type="default" className="w-full mt-3" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormResetPassword;
