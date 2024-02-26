import CommonHeaderContent from '@/components/auth/CommonHeaderContent';
import FormRegister from '@/ui/auth/register/FormRegister';
import { CardSkeleton } from '@/ui/skeleton';
import React, { Suspense } from 'react';

const Register = () => {
  const data = [
    {
      name: 'Home',
      href: '/',
    },
  ];
  return (
    <>
      <div>
        <Suspense fallback={<CardSkeleton />}>
          <CommonHeaderContent data={data} title="Account" currentPage="Register" />
          <FormRegister />
        </Suspense>
      </div>
    </>
  );
};

export default Register;
