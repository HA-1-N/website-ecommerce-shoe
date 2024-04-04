import CommonHeaderContent from '@/components/auth/CommonHeaderContent';
import Cart from '@/ui/cart/Cart';
import { CardsSkeleton } from '@/ui/skeleton';
import React, { Suspense } from 'react';

const CartPage = () => {
  const data = [
    {
      name: 'Home',
      href: '/',
    },
  ];

  return (
    <>
      <Suspense fallback={<CardsSkeleton />}>
        <CommonHeaderContent data={data} currentPage="Cart" />
        <Cart />
      </Suspense>
    </>
  );
};

export default CartPage;
