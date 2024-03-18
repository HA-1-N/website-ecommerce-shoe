import Logout from '@/ui/profile/Logout';
import { CardsSkeleton } from '@/ui/skeleton';
import React, { Suspense } from 'react';

const PageLogout = () => {
  return (
    <Suspense fallback={<CardsSkeleton />}>
      <Logout />
    </Suspense>
  );
};

export default PageLogout;
