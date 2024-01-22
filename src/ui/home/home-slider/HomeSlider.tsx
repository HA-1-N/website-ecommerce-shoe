import { Carousel } from 'antd';
import Image from 'next/image';
import React from 'react';

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const HomeSlider = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };
  return (
    <>
      <Carousel afterChange={onChange} autoplay>
        <div>
          <img
            src="https://huge-shoes-n-bags.myshopify.com/cdn/shop/files/2_ce2c5d79-fe9d-4d74-903c-89aac490c9a5_1.jpg?v=1630668743"
            alt="img"
          />
        </div>
        <div>
          <img
            src="https://huge-shoes-n-bags.myshopify.com/cdn/shop/files/2_ce2c5d79-fe9d-4d74-903c-89aac490c9a5_1.jpg?v=1630668743"
            alt="img"
          />
        </div>
        <div>
          <img
            src="https://huge-shoes-n-bags.myshopify.com/cdn/shop/files/2_ce2c5d79-fe9d-4d74-903c-89aac490c9a5_1.jpg?v=1630668743"
            alt="img"
          />
        </div>
      </Carousel>
    </>
  );
};

export default HomeSlider;
