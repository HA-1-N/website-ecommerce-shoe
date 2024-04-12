import { Tag } from 'antd';
import React from 'react';

type OrderStatusProps = {
  status?: string;
};

const OrderStatus: React.FC<OrderStatusProps> = ({ status }) => {
  let tagColor = '';

  switch (status?.toLocaleLowerCase()) {
    case 'pending':
      tagColor = 'orange';
      break;
    case 'processing':
      tagColor = 'blue';
      break;
    case 'completed':
      tagColor = 'green';
      break;
    case 'cancelled':
      tagColor = 'red';
      break;
    default:
      tagColor = 'gray';
      break;
  }

  return (
    <div>
      <Tag color={tagColor}>{status?.toLocaleUpperCase()}</Tag>
    </div>
  );
};

export default OrderStatus;
