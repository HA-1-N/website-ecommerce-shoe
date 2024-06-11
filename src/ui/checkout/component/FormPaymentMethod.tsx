import { filterPaymentTypeApi } from '@/lib/api/payment.api';
import { OrderModels } from '@/lib/model/order.model';
import { PaymentTypeModels } from '@/lib/model/payment.model';
import { Button, Form, Radio, Space } from 'antd';
import { useForm } from 'antd/es/form/Form';
import React, { useEffect, useState } from 'react';

interface FormPaymentMethodProps {
  current: number;
  setCurrent: (value: number) => void;
  valuesUpload: OrderModels;
  setValuesUpload: (value: OrderModels) => void;
}

const FormPaymentMethod = (props: FormPaymentMethodProps) => {
  const { current, setCurrent, valuesUpload, setValuesUpload } = props;

  const initialValues = {
    paymentMethod: valuesUpload?.paymentMethod,
  };

  const [form] = useForm();
  const [paymentTypeDetails, setPaymentTypeDetails] = useState<PaymentTypeModels[]>([]);

  const getPaymentType = async () => {
    const data = {
      type: '',
    };

    const params = {
      page: 0,
      size: 10000,
    };

    try {
      const res = await filterPaymentTypeApi(data, params);
      if (res) {
        setPaymentTypeDetails(res.data);
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  const onFinish = (values: any) => {
    if (values) {
      setCurrent(current + 1);
      setValuesUpload({ ...valuesUpload, ...values });
    }
  };

  useEffect(() => {
    getPaymentType();
  }, []);

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
            name="paymentMethod"
            label={<p className="text-2xl font-bold">Payment Method</p>}
            rules={[{ required: true, message: 'Please pick an payment method!' }]}
          >
            <Radio.Group>
              {paymentTypeDetails.map((item) => (
                <Radio value={item.type} key={item.id} className="w-full my-4">
                  <span className="text-lg">{item.type}</span>
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

export default FormPaymentMethod;
