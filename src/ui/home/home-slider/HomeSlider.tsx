'use client';

import { refreshTokenApi } from '@/lib/api/auth.api';
import { getBannerData } from '@/lib/api/banner.api';
import { getLocalStorageRefreshToken } from '@/lib/utils/auth.util';
import { CardSkeleton } from '@/ui/skeleton';
import { Carousel } from 'antd';
import Image from 'next/image';
import React, { Suspense, useEffect, useState } from 'react';

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const HomeSlider = () => {
  const getRefreshToken = getLocalStorageRefreshToken();

  const [sliderDetail, setSliderDetail] = useState<[]>([]);

  const getBanner = async () => {
    const page = 0;
    const size = 100000;
    const data = await getBannerData(page, size);
    // console.log('data', data);

    if (data) {
      setSliderDetail(data);
    } else {
      const res = await refreshTokenApi(getRefreshToken);
      console.log('res', res);
    }
  };

  useEffect(() => {
    getBanner();
  }, []);

  const onChange = (currentSlide: number) => {
    // console.log(currentSlide);
  };
  return (
    <>
      <Suspense fallback={<CardSkeleton />}>
        <Carousel afterChange={onChange} autoplay>
          {sliderDetail?.map((item: any) => (
            <div key={item?.id}>
              <Image src={item?.image} alt="img" className="w-full h-screen" sizes="100vw" width={0} height={0} />
            </div>
          ))}
        </Carousel>
      </Suspense>
    </>
  );
};

export default HomeSlider;
