import React, { Suspense } from 'react';
import FormAccountDetail from './form/FormAccountDetail';

const AccountDetailCompt = () => {
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold mb-8 px-16">Account Detail</h1>
        <FormAccountDetail />
      </div>
    </>
  );
};

export default AccountDetailCompt;
