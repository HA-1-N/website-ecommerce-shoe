import React from 'react';
import Image from 'next/image';
import { MdClose } from 'react-icons/md';

const CardCartItem = () => {
  return (
    <>
      <div>
        <div className="flex items-center">
          <div>
            <Image src={''} alt="image1" className="w-full h-full" width={0} height={0} sizes="100vw" />
          </div>
          <div>
            <div className="flex">
              <h3 className="text-lg font-semibold">Product Name</h3>
              <div>
                <MdClose />
              </div>
            </div>
            <div className="flex">
              <span>Mã sản phẩm: </span>
              <span>123456</span>
            </div>

            <div>
              <span>Màu sắc: </span>
              <span>Đen</span>
            </div>

            <div>
              <span>Size: </span>
              <span>42</span>
            </div>

            <div>
              <span>Price: </span>
              <span>123456</span>
            </div>

            <div>
              <span>Số lượng: </span>
              <span>123</span>
            </div>

            <div>
              <span>Tổng: </span>
              <span>123456</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardCartItem;
