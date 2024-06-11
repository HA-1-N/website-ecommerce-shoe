'use client';

import HomeSlider from '@/ui/home/home-slider/HomeSlider';
import HotProduct from '@/ui/home/hot-product/HotProduct';
import TopBrand from '@/ui/home/top-brand/TopBrand';

export default function Home() {
  return (
    <>
      <main>
        <HomeSlider />
        <HotProduct />
        <TopBrand />
      </main>
    </>
  );
}
