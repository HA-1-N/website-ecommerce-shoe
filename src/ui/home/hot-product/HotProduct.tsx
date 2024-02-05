'use client';

import { Tabs, TabsProps } from 'antd';
import React, { useEffect, useState } from 'react';
import NewArrivalProduct from './HotListProduct';
import { filterHotCategoryApi } from '@/lib/api/home.api';
import HotListProduct from './HotListProduct';

const HotProduct = () => {
  const { TabPane } = Tabs;

  const [id, setId] = useState<number | null>(null);
  const [hotCategory, setHotCategory] = useState<any>([]);
  const filterHotCategory = async () => {
    const params = {
      page: 0,
      size: 100000,
    };
    const body = {
      id: id,
    };

    try {
      const res = await filterHotCategoryApi(body, params);
      setHotCategory(res?.data);
    } catch (error) {
      console.log('error');
    }
  };

  useEffect(() => {
    filterHotCategory();
  }, []);

  const items: TabsProps['items'] =
    hotCategory?.map((item: any) => ({
      key: item?.id,
      label: item?.name,
      children: <HotListProduct products={item?.products} hotCategory={item?.name} />,
    })) || [];

  const onChange = (key: any) => {
    console.log(key);
  };

  return (
    <>
      <div className="my-4">
        <h1 className="text-3xl text-center font-bold">Hot Product</h1>
        <p className="text-center mt-2 text-base font-medium text-gray-400">
          Mauris luctus nisi sapien tristique dignissim ornare
        </p>
        <div className="flex justify-center items-center">
          <div className="container">
            <Tabs
              size="large"
              defaultActiveKey={hotCategory[0]?.id}
              items={items}
              onChange={onChange}
              className="flex justify-center items-center"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HotProduct;
