'use client';

import { Button, Col, DatePicker, Form, Input, Row, Select, Space, Upload } from 'antd';
import React, { useState } from 'react';
import { InboxOutlined, UploadOutlined } from '@ant-design/icons';
import { CloseOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import { registerApi } from '@/lib/api/auth.api';
import { useRouter } from 'next/navigation';
const { Option } = Select;

const FormRegister = () => {
  const [form] = Form.useForm();

  const router = useRouter();

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

  const [uploadedImage, setUploadedImage] = useState<any>(null);

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

  const buildBody = (values: any) => {
    const body = {
      name: values?.name,
      email: values?.email,
      password: values?.password,
      age: Number(values?.age),
      phone: values?.phone,
      gender: values?.gender,
      dateOfBirth: dayjs(values?.dateOfBirth).format('YYYY-MM-DD'),
      roleIds: [2],
    };
    return body;
  };

  const onFinish = (values: any) => {
    // console.log('Success:', values);
    const formData = new FormData();
    const body = buildBody(values);
    formData.append('data', new Blob([JSON.stringify(body)], { type: 'application/json' }));
    const getImageFile: any = values?.image;
    const file = getImageFile?.file?.originFileObj;
    formData.append('file', file as File);
    registerApi(formData)
      .then((res) => {
        if (res) {
          router.push('/login');
        }
      })
      .catch(() => {});
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      form.setFieldValue('image', e);
      return e;
    }
    if (e.file.originFileObj) {
      form.setFieldValue('image', e);
    }
    return e && e.fileList;
  };

  const handleChange = (info: any) => {
    if (info.file.originFileObj) {
      const imageUrl = URL.createObjectURL(info.file.originFileObj);
      setUploadedImage(imageUrl);
    }
  };

  const checkImageSizeAndRatio = (file: File): Promise<void> => {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.src = window.URL.createObjectURL(file);

      image.onload = () => {
        // Kiểm tra kích thước max 5mb
        if (file.size / 1024 / 1024 > 5) {
          // Thông báo khi hình ảnh quá lớn
          //  dispatch(
          //    openNotification({
          //      type: 'error',
          //      message: 'Hình ảnh phải nhỏ hơn 5Mb',
          //    }),
          //  );
          reject('Hình ảnh quá lớn');
        } else {
          resolve();
        }
      };

      image.onerror = () => {
        // Thông báo khi không thể đọc hình ảnh
        //  dispatch(
        //    openNotification({
        //      type: 'error',
        //      message: 'Không thể đọc hình ảnh',
        //    }),
        //  );
        reject('Không thể đọc hình ảnh');
      };
    });
  };

  const handleDeleteImage = () => {
    setUploadedImage(null);
    form.setFieldValue('image', '');
  };

  const dummyRequest = (props: any) => {
    const { file, onSuccess } = props;
    setTimeout(() => {
      onSuccess('ok');
    }, 0);
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
                    <Input.Password placeholder={'Enter your confirm password'} />
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
                  <Form.Item
                    name="gender"
                    label="Gender"
                    rules={[{ required: true, message: 'Please select gender!' }]}
                  >
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

                <Col span={24}>
                  <Form.Item
                    label="Image"
                    name={'image'}
                    rules={[{ required: true, message: 'Vui lòng nhập hình ảnh!' }]}
                  >
                    <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
                      <Upload.Dragger
                        showUploadList={false}
                        onChange={handleChange}
                        beforeUpload={checkImageSizeAndRatio}
                        accept="image/*"
                        customRequest={dummyRequest}
                      >
                        {uploadedImage ? (
                          <div style={{ position: 'relative' }}>
                            <img src={uploadedImage} alt="Uploaded" style={{ maxWidth: '100%' }} />
                            <Button
                              shape="circle"
                              danger
                              ghost
                              size="small"
                              icon={<CloseOutlined />}
                              style={{ position: 'absolute', top: 0, right: 0, zIndex: 2 }}
                              onClick={handleDeleteImage}
                            />
                          </div>
                        ) : (
                          <>
                            <p className="ant-upload-text">Chọn ảnh để tải lên</p>
                            <p className="ant-upload-drag-icon">
                              <UploadOutlined />
                            </p>
                            <p className="ant-upload-text">Định dạng JPEG, PNG, JPG</p>
                            <p className="ant-upload-text">Dung lượng tối đa 5MB</p>
                            <p className="ant-upload-text">Tỷ lệ phù hợp 3:2</p>
                          </>
                        )}
                      </Upload.Dragger>
                    </Form.Item>
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
        </div>
      </div>
    </>
  );
};

export default FormRegister;
