'use client';

import OrderStatus from '@/components/OderStatus';
import { getOrderByIdApi } from '@/lib/api/order.api';
import { ColorModels } from '@/lib/model/color.model';
import { OrderDetailModels, OrderProductModel } from '@/lib/model/order.model';
import { SizeModel } from '@/lib/model/size.model';
import { Table } from 'antd';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React, { useEffect } from 'react';

const OrderDetail = () => {
  const columns = [
    {
      title: 'Product Name',
      dataIndex: 'product',
      key: 'product',
      render: (value: any) => {
        return value?.name;
      },
    },
    {
      title: 'Product Image',
      dataIndex: 'product',
      key: 'product',
      render: (value: any) => {
        return <Image alt="image" src={value?.productImages[0]?.url} height={50} width={50} />;
      },
    },
    {
      title: 'Color',
      dataIndex: 'color',
      key: 'color',
      render: (value: ColorModels) => {
        return value?.name;
      },
    },
    {
      title: 'Size',
      dataIndex: 'size',
      key: 'size',
      render: (value: SizeModel) => {
        return value?.name;
      },
    },
    {
      title: 'Price',
      dataIndex: 'product',
      key: 'product',
      render: (value: any) => {
        return value?.price?.toLocaleString('en-US');
      },
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Total Price',
      dataIndex: 'totalPrice',
      key: 'totalPrice',
      render: (value: number) => {
        return value?.toLocaleString('en-US');
      },
    },
  ];

  const params = useParams();
  const getId = Number(params?.id);

  const [orderDetail, setOrderDetail] = React.useState<OrderDetailModels>({} as OrderDetailModels);
  console.log('orderDetail', orderDetail);

  const getOrderById = async () => {
    try {
      const res = await getOrderByIdApi(Number(getId));
      setOrderDetail(res.data);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    getOrderById();
  }, []);

  return (
    <>
      <div>
        <div>
          <h1 className="text-2xl font-bold">Your Order Product</h1>
          <div className="my-10">
            <Table columns={columns} dataSource={orderDetail?.orderProducts} pagination={false} />
          </div>
        </div>

        <div>
          <h1 className="text-2xl font-bold mb-10">Shipping Address</h1>
          <div className="flex justify-between items-center">
            <div>
              <div>
                <span className="text-lg font-semibold">Name: </span>
                <span className="text-lg">{orderDetail?.userAddress?.name}</span>
              </div>
              <div>
                <span className="text-lg font-semibold">Phone Number: </span>
                <span className="text-lg">{orderDetail?.userAddress?.phone}</span>
                <div>
                  <span className="text-lg font-semibold">Address: </span>
                  <span className="text-lg">{orderDetail?.userAddress?.address}</span>
                </div>
                <div>
                  <span className="text-lg font-semibold">City: </span>
                  <span className="text-lg">{orderDetail?.userAddress?.city}</span>
                </div>
                <div>
                  <span className="text-lg font-semibold">Country: </span>
                  <span className="text-lg">{orderDetail?.userAddress?.country}</span>
                </div>
              </div>
            </div>
            <div>
              <div>
                <span className="text-lg font-semibold">Shipping Method: </span>
                <span className="text-lg">{orderDetail?.shippingMethod?.method}</span>
              </div>
              <div className="flex">
                <span className="text-lg font-semibold">Order Status: </span>
                <span className="text-lg ml-4">
                  <OrderStatus status={orderDetail?.orderStatus?.status} />
                </span>
              </div>
              <div>
                <span className="text-lg font-semibold">Order Total: </span>
                <span className="text-lg">{orderDetail?.orderTotal?.toLocaleString('en-US')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDetail;
