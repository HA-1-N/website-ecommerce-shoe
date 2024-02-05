import CardComponent from '@/components/card/Card';
import { Col, Row } from 'antd';
import React from 'react';

interface HotListProductProps {
  products?: any;
  hotCategory?: string;
}

const HotListProduct = (props: HotListProductProps) => {
  const { products, hotCategory } = props;

  return (
    <>
      <Row gutter={[16, 8]}>
        {products?.slice(0, 8)?.map((item: any) => (
          <Col key={item?.id} className="gutter-row" span={6} xs={24} md={12} xl={6} lg={6}>
            <CardComponent
              hotCategory={hotCategory}
              images={item?.productImages}
              title={item?.name}
              price={item?.price}
            />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HotListProduct;
