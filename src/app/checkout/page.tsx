import CommonHeaderContent from '@/components/auth/CommonHeaderContent';
import Checkout from '@/ui/checkout/Checkout';
import { CardsSkeleton } from '@/ui/skeleton';
import React, { Suspense } from 'react';

const CheckoutPage = () => {
  const data = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'Cart',
      href: '/cart',
    },
  ];
  return (
    <>
      <Suspense fallback={<CardsSkeleton />}>
        <CommonHeaderContent data={data} currentPage="Checkout" />
        <Checkout />
      </Suspense>
    </>
  );
};

export default CheckoutPage;
