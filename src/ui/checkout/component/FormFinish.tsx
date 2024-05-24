import { clearCartApi } from '@/lib/api/cart.api';
import { orderCheckoutApi } from '@/lib/api/order.api';
import { OrderModels } from '@/lib/model/order.model';
import { getLocalStorageId } from '@/lib/utils/auth.util';
import { setCountCart } from '@/redux/feature/cart.slice';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { Button } from 'antd';
import dayjs from 'dayjs';
import { useRouter } from 'next/navigation';
import React from 'react';

interface FormFinishProps {
  valuesUpload: OrderModels;
  setValuesUpload: (value: OrderModels) => void;
}

const FormFinish = (props: FormFinishProps) => {
  const { valuesUpload, setValuesUpload } = props;

  const dispatch = useAppDispatch();

  const listCartItems = useAppSelector((state) => state.cart.listCartItems);

  const getAllTotalPrice = listCartItems?.reduce((acc, item) => {
    return acc + Number(item?.product?.price) * Number(item?.quantity);
  }, 0);

  const getListProductUpload = listCartItems?.map((item) => ({
    id: item?.product?.id,
    quantity: item?.quantity,
    sizeId: item?.size?.id,
    colorId: item?.color?.id,
    totalPrice: item?.quantity * item?.product?.price,
  }));

  const currentDate = new Date();

  // console.log('currentDate', currentDate);

  const userId = getLocalStorageId();
  const router = useRouter();

  const InfoContain = ({ title, content }: { title: string; content?: any }) => (
    <div>
      <span className="text-xl font-bold">{title} </span>
      <span className="text-xl">{content}</span>
    </div>
  );

  const handleClickBtnCheckout = async () => {
    const values = {
      userId: Number(userId),
      name: valuesUpload?.name,
      address: valuesUpload?.address,
      city: valuesUpload?.city,
      country: valuesUpload?.country,
      phone: valuesUpload?.phone,
      prefix: valuesUpload?.prefix,
      shippingMethod: valuesUpload?.shippingMethod,
      paymentMethod: valuesUpload?.paymentMethod,
      status: 'Pending',
      // orderDate: dayjs(currentDate).format('YYYY-MM-DDTHH:mm:ss[Z]'),
      orderDate: dayjs(currentDate).format('YYYY-MM-DD HH:mm:ss'),
      productCheckouts: getListProductUpload,
      orderTotal: getAllTotalPrice,
    };

    try {
      const res = await orderCheckoutApi(values);
      if (res) {
        router.push('/');
        clearCartApi(Number(userId))
          .then((res) => {
            console.log('res', res);
            dispatch(setCountCart());
          })
          .catch((error) => {
            console.log('error', error);
          });
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <>
      <div>
        <h1 className="text-2xl font-bold my-8">Information</h1>
        <InfoContain title="Name: " content={valuesUpload?.name} />
        <InfoContain title="Address: " content={valuesUpload?.address} />
        <InfoContain title="City: " content={valuesUpload?.city} />
        <InfoContain title="Country: " content={valuesUpload?.country} />
        <InfoContain title="Phone Number: " content={valuesUpload?.phone} />
        <InfoContain title="Shipping Method: " content={valuesUpload?.shippingMethod} />
        <InfoContain title="Payment Method: " content={valuesUpload?.paymentMethod} />

        <Button type="default" htmlType="button" className="my-6" onClick={handleClickBtnCheckout}>
          Xác nhận thanh toán
        </Button>
      </div>
    </>
  );
};

export default FormFinish;
