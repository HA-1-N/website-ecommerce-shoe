import OrderDetail from '@/ui/profile/OrderDetail';
import { CardsSkeleton } from '@/ui/skeleton';
import React, { Suspense } from 'react';

interface OrderDetailProps {
  orderId: string;
}

const OrderDetailPage: React.FC<OrderDetailProps> = ({ orderId }) => {
  // Fetch order details using the orderId

  return (
    <Suspense fallback={<CardsSkeleton />}>
      <OrderDetail />
    </Suspense>
  );
};

export default OrderDetailPage;
