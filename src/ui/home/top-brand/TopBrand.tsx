import CardBrand from '@/components/card/CardBrand';
import { getAllBrandApi } from '@/lib/api/home.api';
import { BrandModels } from '@/lib/model/brand.model';
import { CardSkeleton } from '@/ui/skeleton';
import { Col, Row } from 'antd';
import React, { Suspense, useEffect, useState } from 'react';

const TopBrand = () => {
  const [brandDetails, setBrandDetails] = useState<BrandModels[]>([]);

  const getAllBrand = async () => {
    try {
      const res = await getAllBrandApi();
      setBrandDetails(res?.data);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    getAllBrand();
  }, []);

  return (
    <>
      <div className="my-4">
        <h1 className="text-3xl text-center font-bold my-8">Top Brand</h1>

        <div className="px-16">
          <Row gutter={[16, 16]}>
            {brandDetails?.map((item: BrandModels) => (
              <Col key={item?.id} className="gutter-row" span={6} xs={24} md={12} xl={6} lg={6}>
                <Suspense fallback={<CardSkeleton />}>
                  <CardBrand name={item?.name} url={item?.image} />
                </Suspense>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </>
  );
};

export default TopBrand;
