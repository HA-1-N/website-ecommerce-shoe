import { CartItemModel } from '@/lib/model/cart.model';
import { useRouter } from 'next/navigation';
import React from 'react';

interface CartSummaryProps {
  listCartItem: CartItemModel[];
}

const CartSummary = (props: CartSummaryProps) => {
  const { listCartItem } = props;

  const router = useRouter();

  const total = listCartItem?.reduce((acc, item) => {
    return acc + Number(item?.product?.price) * Number(item?.quantity);
  }, 0);

  const handleClickContinueShopping = () => {
    router.push('/products/search');
  };

  const handleClickCheckout = () => {
    router.push('/checkout');
  };

  return (
    <>
      <div>
        <div className="border-2 border-gray-300 border-solid p-4">
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
        </div>

        <div className="my-6">
          <button className="text-lg px-4 py-2 text-center w-full bg-black text-white" onClick={handleClickCheckout}>
            Thanh toán ngay
          </button>
        </div>

        <div className="my-6">
          <button
            className="text-lg px-4 py-2 text-center w-full bg-white text-black border-slate-300 border-2"
            onClick={handleClickContinueShopping}
          >
            Tiếp tục mua sắm
          </button>
        </div>
      </div>
    </>
  );
};

export default CartSummary;
