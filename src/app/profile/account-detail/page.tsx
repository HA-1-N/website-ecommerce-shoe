import AccountDetailCompt from '@/ui/profile/AccountDetailCompt';
import { CardsSkeleton } from '@/ui/skeleton';
import React, { Suspense } from 'react';

const AccountDetail = () => {
  return (
    <>
      <Suspense fallback={<CardsSkeleton />}>
        <AccountDetailCompt />
      </Suspense>
    </>
  );
};

export default AccountDetail;
