'use client';

import { changePasswordApi } from '@/lib/api/auth.api';
import { ChangePasswordModel } from '@/lib/model/auth.model';
import { getLocalStorageId } from '@/lib/utils/auth.util';
import { Button, Col, Form, Input, Row, Space } from 'antd';
import React from 'react';

const FormChangePassword = () => {
  const [form] = Form.useForm();
  const getId = getLocalStorageId();

  const initialValues: ChangePasswordModel = {
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  };

  const buildBody = (values: ChangePasswordModel) => {
    const newValues = {
      id: Number(getId),
      oldPassword: values.oldPassword,
      newPassword: values.newPassword,
    };

    return newValues;
  };

  const onFinish = async (values: ChangePasswordModel) => {
    console.log('Success:', values);
    const body = buildBody(values);
    changePasswordApi(body)
      .then((res) => {
        if (res) {
          console.log('res');
        }
      })
      .catch((err) => {
        console.log('err');
      });
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
                name="oldPassword"
                label="Old Password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your old password!',
                  },
                ]}
              >
                <Input.Password placeholder={'Enter your old password'} />
              </Form.Item>
            </Col>
            <Col xs={24} md={24} sm={24} lg={12}>
              <Form.Item
                name="newPassword"
                label="New password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your new password!',
                  },
                ]}
              >
                <Input.Password placeholder={'Enter your new password'} />
              </Form.Item>
            </Col>

            <Col xs={24} md={24} sm={24} lg={12}>
              <Form.Item
                name="confirmNewPassword"
                label="Confirm new password"
                dependencies={['newPassword']}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: 'Please confirm your new password!',
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('newPassword') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error('The new password that you entered do not match!'));
                    },
                  }),
                ]}
              >
                <Input.Password placeholder={'Enter your confirm new password'} />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item>
            <Space>
              <Button type="default" htmlType="submit">
                Submit
              </Button>
              <Button htmlType="reset">Reset</Button>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default FormChangePassword;
