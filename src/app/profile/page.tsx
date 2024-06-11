import Profile from '@/ui/profile/Profile';
import { CardsSkeleton } from '@/ui/skeleton';
import React, { Suspense } from 'react';

const ProfilePage = () => {
  return (
    <>
      <div>
        <Suspense fallback={<CardsSkeleton />}>
          <Profile />
        </Suspense>
      </div>
    </>
  );
};

export default ProfilePage;
