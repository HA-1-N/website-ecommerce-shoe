import CommonHeaderContent from '@/components/auth/CommonHeaderContent';
import { EmailProvider } from '@/context/EmailContext';
import FormVerifyOtpEmail from '@/ui/auth/verify-otp-email/FormVerifyOtpEmail';
import { CardsSkeleton } from '@/ui/skeleton';
import React, { Suspense } from 'react';

const VerifyOtpEmail = () => {
  const data = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'Login',
      href: '/login',
    },
    {
      name: 'Verify Email',
      href: '/verify-email',
    },
  ];

  return (
    <>
      <div>
        <Suspense fallback={<CardsSkeleton />}>
          <CommonHeaderContent data={data} title="Account" currentPage="Verify Email" />
          <FormVerifyOtpEmail />
        </Suspense>
      </div>
    </>
  );
};

export default VerifyOtpEmail;
