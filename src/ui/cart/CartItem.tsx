'use client';

import CardCartItem from '@/components/card/CardCartItem';
import { removeCartItemApi } from '@/lib/api/cart.api';
import { CartItemModel } from '@/lib/model/cart.model';
import { setCountCart } from '@/redux/feature/cart.slice';
import { useAppDispatch } from '@/redux/hook';

interface CartItemProps {
  listCartItem: CartItemModel[];
  getCartItem: () => Promise<void>;
}

const CartItem = (props: CartItemProps) => {
  const { listCartItem, getCartItem } = props;

  const dispatch = useAppDispatch();

  const handleDeleteCartItem = async (cartItemId?: number | null) => {
    if (!cartItemId) return;

    try {
      const res = await removeCartItemApi({ cartItemId });
      if (res) {
        getCartItem();
        dispatch(setCountCart());
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        {listCartItem?.map((item: CartItemModel, index: number) => (
          <CardCartItem
            productName={item?.product?.name}
            key={index}
            productCode={item?.product?.id}
            color={item?.color?.name}
            size={item?.size?.name}
            price={item?.product?.price}
            quantity={item?.quantity}
            imageSrc={item?.productImage?.image}
            onRemove={() => handleDeleteCartItem(item?.id)}
          />
        ))}
      </div>
    </>
  );
};

export default CartItem;