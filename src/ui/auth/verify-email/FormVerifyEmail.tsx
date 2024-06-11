'use client';

import { useEmail } from '@/context/EmailContext';
import { verifyEmailApi } from '@/lib/api/auth.api';
import { getMsgErrorApi } from '@/lib/utils/form.util';
import { Button, Form, Input, notification } from 'antd';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

type FieldType = {
  email?: string;
};

type NotificationType = 'success' | 'info' | 'warning' | 'error';

const FormVerifyEmail = () => {
  const { setEmail } = useEmail();

  const [api, contextHolder] = notification.useNotification();

  const router = useRouter();

  const onFinish = async (values: any) => {
    const email = values?.email;
    try {
      const res = await verifyEmailApi(email);
      if (res) {
        openNotification('success', res?.data, 'Success');
        router.push('/verify-otp-email');
        // window.history.pushState({ email: values?.email }, '', '/verify-otp-email');
        setEmail(values.email);
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
              <h1 className="text-2xl font-bold text-center my-3">Verify Email</h1>
            </div>
            <div className="p-3">
              <Form
                name="basic"
                labelCol={{ span: 12 }}
                wrapperCol={{ span: 32 }}
                style={{ maxWidth: '100%' }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                colon={false}
                layout="vertical"
              >
                <Form.Item<FieldType>
                  label="Email"
                  name="email"
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
                  <Input size="large" placeholder="Enter email" />
                </Form.Item>
                <Form.Item>
                  <Button className="w-full mt-3" htmlType="submit">
                    Verify
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

export default FormVerifyEmail;
