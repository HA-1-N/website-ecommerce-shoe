import CommonHeaderContent from '@/components/auth/CommonHeaderContent';
import SearchPage from '@/ui/search/SearchPage';
import { CardsSkeleton } from '@/ui/skeleton';
import React, { Suspense } from 'react';

const PageSearch = () => {
  const dataHeaderContent = [
    {
      name: 'Home',
      href: '/',
    },
  ];

  return (
    <>
      <div>
        <CommonHeaderContent data={dataHeaderContent} currentPage={'Products'} />
        <Suspense fallback={<CardsSkeleton />}>
          <SearchPage />
        </Suspense>
      </div>
    </>
  );
};

export default PageSearch;
