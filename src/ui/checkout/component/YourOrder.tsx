'use client';

import { getCartItemApi } from '@/lib/api/cart.api';
import { CartItemModel } from '@/lib/model/cart.model';
import { getLocalStorageId } from '@/lib/utils/auth.util';
import { setListCartItems } from '@/redux/feature/cart.slice';
import { useAppDispatch } from '@/redux/hook';
import React, { useEffect, useState } from 'react';

const YourOrder = () => {
  const dispatch = useAppDispatch();

  const [listCartItem, setListCartItem] = useState<CartItemModel[]>([]);

  console.log('listCartItem', listCartItem);

  const total = listCartItem?.reduce((acc, item) => {
    return acc + Number(item?.product?.price) * Number(item?.quantity);
  }, 0);
  const getIdUser = getLocalStorageId();

  const getCartItem = async () => {
    getCartItemApi(Number(getIdUser))
      .then((res) => {
        setListCartItem(res?.data);
        dispatch(setListCartItems(res?.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCartItem();
  }, []);

  return (
    <>
      <div>
        <div className="border-2 border-gray-300 border-solid px-4 py-8">
          <h1 className="text-2xl font-bold my-4">Your order</h1>

          <div>
            <h2 className="text-2xl font-bold">Tổng đơn hàng</h2>
            <span className="text-lg font-bold">{listCartItem?.length} sản phẩm</span>
          </div>

          <div>
            <span className="text-lg font-bold">Tổng cộng: </span>
            <span className="text-lg">{total?.toLocaleString()} VNĐ</span>
          </div>

          <div>
            <span className="text-lg font-bold">Tổng đơn đặt hàng: </span>
            <span className="text-lg">{total?.toLocaleString()} VNĐ </span>
          </div>
          {/* <div>
            <span className="text-lg font-bold">Phí vận chuyển: </span>
            <span className="text-lg">0 VNĐ </span>
          </div> */}
        </div>

        <div className="border-2 border-gray-300 border-solid px-4 py-8 mt-6">
          <div>
            <h2 className="text-2xl font-bold">Sản phẩm đặt hàng</h2>

            {listCartItem?.map((item, index) => (
              <div key={index} className="flex justify-between items-center my-4">
                <div>
                  <img
                    src={item?.productImage?.image}
                    alt={item?.productImage?.image}
                    className="w-16 h-16 object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold">{item?.product?.name}</h3>
                  <span className="text-lg">{Number(item?.product?.price).toLocaleString()} VNĐ</span>
                </div>
                <div>
                  <span className="text-lg">x{item?.quantity}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default YourOrder;
