import { Tag } from 'antd';
import React from 'react';

const HotCategoryCard = ({ hotCategory }: { hotCategory?: string }) => {
  switch (hotCategory) {
    case 'New Arrival':
      return <Tag color="green">New</Tag>;
    case 'Trending':
      return <Tag color="magenta">Trend</Tag>;
    case 'Best Seller':
      return <Tag color="red">Seller</Tag>;
    default:
      return <></>;
  }
};

export default HotCategoryCard;
