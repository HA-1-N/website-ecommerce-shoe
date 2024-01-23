import FormLogin from '@/ui/login/FormLogin';
import HeaderLogin from '@/ui/login/HeaderLogin';
import React, { Suspense, lazy } from 'react';

const Login = () => {
  return (
    <>
      <div>
        <Suspense fallback={<>Loading</>}>
          <HeaderLogin />
          <FormLogin />
        </Suspense>
      </div>
    </>
  );
};

export default Login;
