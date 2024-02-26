import CommonHeaderContent from '@/components/auth/CommonHeaderContent';
import SearchPage from '@/ui/search/SearchPage';
import React from 'react';

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
        <SearchPage />
      </div>
    </>
  );
};

export default PageSearch;
