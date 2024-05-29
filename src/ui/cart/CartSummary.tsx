import { CartItemModel } from '@/lib/model/cart.model';
import { useRouter } from 'next/navigation';
import React from 'react';

interface CartSummaryProps {
  listCartItem: CartItemModel[];
  openNotificationCustom: any;
}

const CartSummary = (props: CartSummaryProps) => {
  const { listCartItem, openNotificationCustom } = props;

  const router = useRouter();

  const total = listCartItem?.reduce((acc, item) => {
    return acc + Number(item?.product?.price) * Number(item?.quantity);
  }, 0);

  const handleClickContinueShopping = () => {
    router.push('/products/search');
  };

  const handleClickCheckout = () => {
    if (listCartItem?.length > 0) {
      router.push('/checkout');
    } else {
      console.log('Giỏ hàng của bạn không có sản phẩm nào để thanh toán');
      openNotificationCustom('warning', 'Giỏ hàng của bạn không có sản phẩm nào để thanh toán', '');
    }
  };

  return (
    <>
      <div>
        <div className="border-2 border-gray-300 border-solid p-4">
          <div>
            <h2 className="text-2xl font-bold">Total order</h2>
            <span className="text-lg font-bold">{listCartItem?.length} products</span>
          </div>
          <div>
            <span className="text-lg font-bold">Total: </span>
            <span className="text-lg">{total?.toLocaleString()} VNĐ</span>
          </div>

          <div>
            <span className="text-lg font-bold">Total order: </span>
            <span className="text-lg">{total?.toLocaleString()} VNĐ </span>
          </div>
        </div>

        <div className="my-6">
          <button className="text-lg px-4 py-2 text-center w-full bg-black text-white" onClick={handleClickCheckout}>
            Checkout now
          </button>
        </div>

        <div className="my-6">
          <button
            className="text-lg px-4 py-2 text-center w-full bg-white text-black border-slate-300 border-2"
            onClick={handleClickContinueShopping}
          >
            Continue shopping
          </button>
        </div>
      </div>
    </>
  );
};

export default CartSummary;
