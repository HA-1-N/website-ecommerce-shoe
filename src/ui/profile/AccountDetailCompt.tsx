'use client';

import React, { Suspense, useEffect, useState } from 'react';
import FormAccountDetail from './form/FormAccountDetail';
import { UserModel } from '@/lib/model/user.model';
import { getLocalStorageId } from '@/lib/utils/auth.util';
import { getCurrentUserByIdApi } from '@/lib/api/auth.api';
import { CardSkeleton } from '../skeleton';

const AccountDetailCompt = () => {
  const id = getLocalStorageId();

  const [userDetail, setUserDetail] = useState<UserModel | null>(null);

  const getCurrentUser = async () => {
    try {
      const res = await getCurrentUserByIdApi(Number(id));
      setUserDetail(res?.data);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <>
      <div>
        <h1 className="text-2xl font-bold mb-8 px-16">Account Detail</h1>
        {userDetail && (
          <Suspense fallback={<CardSkeleton />}>
            <FormAccountDetail userDetail={userDetail} getCurrentUser={getCurrentUser} />
          </Suspense>
        )}
      </div>
    </>
  );
};

export default AccountDetailCompt;
