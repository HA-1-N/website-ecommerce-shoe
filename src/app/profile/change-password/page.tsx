import ChangePassword from '@/ui/profile/ChangePassword';
import { CardsSkeleton } from '@/ui/skeleton';
import React, { Suspense } from 'react';

const ChangePasswordPage = () => {
  return (
    <Suspense fallback={<CardsSkeleton />}>
      <ChangePassword />
    </Suspense>
  );
};

export default ChangePasswordPage;
