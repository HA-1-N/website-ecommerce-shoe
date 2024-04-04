'use client';

import { getOrderByUserIdApi } from '@/lib/api/order.api';
import { getLocalStorageId } from '@/lib/utils/auth.util';
import { Button, Col, Row, Space, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React, { useEffect } from 'react';

const Profile = () => {
  const columns: ColumnsType<any> = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: (values: any, record: any) => (
        <Space size="middle">
          <Button size="small" onClick={() => {}}>
            Update
          </Button>
        </Space>
      ),
    },
  ];

  const getId = getLocalStorageId();

  const getOrderByUserId = async () => {
    try {
      const res = await getOrderByUserIdApi(Number(getId));
      console.log('res', res.data);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    getOrderByUserId();
  }, []);

  return (
    <>
      <div>
        <h1 className="text-2xl font-bold">List Order</h1>
        <div className="mt-10">
          <Table columns={columns} dataSource={[]} pagination={false} />
        </div>
      </div>
    </>
  );
};

export default Profile;
