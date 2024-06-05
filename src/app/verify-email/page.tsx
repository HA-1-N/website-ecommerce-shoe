import CommonHeaderContent from '@/components/auth/CommonHeaderContent';
import { EmailProvider } from '@/context/EmailContext';
import FormVerifyEmail from '@/ui/auth/verify-email/FormVerifyEmail';
import { CardsSkeleton } from '@/ui/skeleton';
import React, { Suspense } from 'react';

const VerifyEmail = () => {
  const data = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'Login',
      href: '/login',
    },
  ];

  return (
    <>
      <div>
        <Suspense fallback={<CardsSkeleton />}>
          <CommonHeaderContent data={data} title="Account" currentPage="Verify Email" />
          <FormVerifyEmail />
        </Suspense>
      </div>
    </>
  );
};

export default VerifyEmail;
