'use client';

import { useEmail } from '@/context/EmailContext';
import { verifyOtpEmailApi } from '@/lib/api/auth.api';
import { getMsgErrorApi } from '@/lib/utils/form.util';
import { Input, notification } from 'antd';
import { useRouter } from 'next/navigation';
import React from 'react';

type NotificationType = 'success' | 'info' | 'warning' | 'error';

const FormVerifyOtpEmail = () => {
  const router = useRouter();

  const { email } = useEmail();
  // console.log('email', email);

  const [api, contextHolder] = notification.useNotification();

  const [otp, setOtp] = React.useState<string>('');

  const handleChangeOtp = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOtp(e.target.value);
  };

  const handleSubmit = async () => {
    const newValues = {
      email: email ? email : '',
      otp: Number(otp),
    };

    try {
      const res = await verifyOtpEmailApi(newValues);
      if (res) {
        openNotification('success', res?.data, 'Success');
        router.push('/reset-password');
      }
    } catch (error) {
      openNotification('error', getMsgErrorApi(error), 'Error');
    }
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
              <h1 className="text-2xl font-bold text-center my-3">Verify OTP Email</h1>
            </div>
            <div className="p-3">
              <Input value={otp} onChange={handleChangeOtp} size="large" placeholder="Enter OTP" />
            </div>

            <div className="p-3">
              <button
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                type="submit"
                onClick={handleSubmit}
              >
                Verify
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormVerifyOtpEmail;
