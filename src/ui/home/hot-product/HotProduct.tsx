import { Tabs, TabsProps } from 'antd';
import React from 'react';
import NewArrivalProduct from './NewArrivalProduct';

const HotProduct = () => {
  const { TabPane } = Tabs;
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'New arrival',
      children: <NewArrivalProduct />,
    },
    {
      key: '2',
      label: 'Trending',
      children: 'Content of Tab Pane 2',
    },
    {
      key: '3',
      label: 'Best sellers',
      children: 'Content of Tab Pane 3',
    },
  ];
  const onChange = (key: string) => {
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
              defaultActiveKey="1"
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
