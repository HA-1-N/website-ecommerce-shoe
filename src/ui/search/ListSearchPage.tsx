'use client';

import CardComponent from '@/components/card/Card';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { Col, Row } from 'antd';
import React, { Suspense } from 'react';
import { CardSkeleton } from '../skeleton';
import PaginationProvider from '@/components/pagination/Pagination';
import { changePageSearch } from '@/redux/feature/product.slice';

const ListSearchPage = () => {
  const dispatch = useAppDispatch();

  const productWebsiteDetails = useAppSelector((state) => state.product.productWebsiteDetails);
  const page = useAppSelector((state) => state.product.pageSearch);
  const total = useAppSelector((state) => state.product.totalPage);

  const handleChangePage = (newPage: number) => {
    dispatch(changePageSearch(newPage));
  };
  return (
    <>
      <div>
        <h2 className="text-2xl font-bold">Product Details</h2>
        {productWebsiteDetails?.length === 0 ? (
          <div>No product found</div>
        ) : (
          <Row gutter={[16, 16]}>
            {productWebsiteDetails.map((product) => (
              <Col key={product?.id} className="gutter-row" span={6} xs={24} md={12} xl={6} lg={6}>
                <Suspense fallback={<CardSkeleton />}>
                  <CardComponent
                    images={product?.productImages}
                    title={product?.name}
                    price={Number(product?.price)}
                    id={product?.id}
                  />
                </Suspense>
              </Col>
            ))}
          </Row>
        )}
        {productWebsiteDetails?.length > 0 && (
          <div className="mt-10">
            <PaginationProvider page={page} total={total} onChangePage={handleChangePage} />
          </div>
        )}
      </div>
    </>
  );
};

export default ListSearchPage;
