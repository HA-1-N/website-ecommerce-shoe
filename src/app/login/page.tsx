import CommonHeaderContent from '@/components/auth/CommonHeaderContent';
import FormLogin from '@/ui/auth/login/FormLogin';
import { CardsSkeleton } from '@/ui/skeleton';
import React, { Suspense } from 'react';

const Login = () => {
  const data = [
    {
      name: 'Home',
      href: '/',
    },
  ];

  return (
    <>
      <div>
        <Suspense fallback={<CardsSkeleton />}>
          <CommonHeaderContent data={data} title="Account" currentPage="Login" />
          <FormLogin />
        </Suspense>
      </div>
    </>
  );
};

export default Login;
