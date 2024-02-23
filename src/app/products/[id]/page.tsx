import CommonHeaderContent from '@/components/auth/CommonHeaderContent';
import ProductDetail from '@/ui/detail/ProductDetail';
import React from 'react';

const ProductDetailPage = () => {
  const dataHeaderContent = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'Products',
      href: '/products/search',
    },
  ];

  return (
    <>
      <div>
        <CommonHeaderContent data={dataHeaderContent} title="Product" currentPage="Product Detail" />
        <ProductDetail />
      </div>
    </>
  );
};

export default ProductDetailPage;
