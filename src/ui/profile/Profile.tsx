'use client';

import OrderStatus from '@/components/OderStatus';
import { getOrderByUserIdApi } from '@/lib/api/order.api';
import { getLocalStorageId } from '@/lib/utils/auth.util';
import { Button, Col, Row, Space, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

const Profile = () => {
  const columns: ColumnsType<any> = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Order date',
      dataIndex: 'orderDate',
      key: 'orderDate',
      render: (value: any) => {
        return new Date(value).toLocaleDateString();
      },
    },
    {
      title: 'Order Status',
      dataIndex: 'orderStatus',
      key: 'orderStatus',
      render: (value: any) => {
        return <OrderStatus status={value?.status} />;
      },
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: (values: any, record: any) => (
        <Space size="middle">
          <Button size="small" onClick={() => handleClickBtnDetail(record)}>
            Detail
          </Button>
        </Space>
      ),
    },
  ];

  const router = useRouter();

  const [data, setData] = React.useState([]);

  const getId = getLocalStorageId();

  const getOrderByUserId = async () => {
    try {
      const res = await getOrderByUserIdApi(Number(getId));
      setData(res.data);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    getOrderByUserId();
  }, []);

  const handleClickBtnDetail = (record: any) => {
    router.push(`/profile/order-detail/${record?.id}`);
  };

  return (
    <>
      <div>
        <h1 className="text-2xl font-bold">List Order</h1>
        <div className="mt-10">
          <Table columns={columns} dataSource={data} pagination={false} />
        </div>
      </div>
    </>
  );
};

export default Profile;
