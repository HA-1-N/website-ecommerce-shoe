import CommonHeaderContent from '@/components/auth/CommonHeaderContent';
import FormResetPassword from '@/ui/auth/reset-password/FormResetPassword';
import { CardsSkeleton } from '@/ui/skeleton';
import React, { Suspense } from 'react';

const ResetPassword = () => {
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
          <FormResetPassword />
        </Suspense>
      </div>
    </>
  );
};

export default ResetPassword;
