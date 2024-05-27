import React, { useCallback } from 'react';
import Image from 'next/image';
import { MdClose } from 'react-icons/md';
import { Col, Row } from 'antd';
import { updateCartItemApi } from '@/lib/api/cart.api';

interface CardCartItemProps {
  key: any;
  productName: string | null | undefined;
  imageSrc: string | any;
  productCode?: string | any;
  quantity?: number | null;
  color?: string;
  size?: string | null | undefined;
  price?: number;
  cartItemId?: number | null;
  onRemove?: any;
  inCrementCountCart?: any;
  userId?: any;
}

const TitleCartFunct = ({ title, content }: { title?: string; content?: any }) => {
  return (
    <div>
      <span className="text-base font-bold">{title} </span>
      <span className="text base">{content}</span>
    </div>
  );
};

const CardCartItem = (props: CardCartItemProps) => {
  const {
    key,
    productName,
    imageSrc,
    productCode,
    quantity,
    color,
    size,
    price,
    onRemove,
    cartItemId,
    inCrementCountCart,
    userId,
  } = props;

  const [quantityValue, setQuantityValue] = React.useState<number | null | undefined>(quantity);

  const total = Number(price) * Number(quantity);

  const onDecrementQuantity = useCallback((value: number | null | undefined) => {
    if (value === 1) return;
    const newValue = Number(value) - 1;

    const valueUploadChangeQuantity = {
      id: cartItemId,
      productId: productCode,
      quantity: newValue,
      userId: Number(userId),
    };

    updateCartItemApi(valueUploadChangeQuantity)
      .then((res) => {
        console.log('res', res);
        if (res) {
          setQuantityValue(newValue);
          inCrementCountCart();
          alert('Cập nhật số lượng thành công');
        }
      })
      .catch((err) => {
        console.log('err', err);
        alert('Cập nhật số lượng thất bại');
      });
  }, []);

  const onIncrementQuantity = useCallback((value: number | null | undefined) => {
    const newValue = Number(value) + 1;

    const valueUploadChangeQuantity = {
      id: cartItemId,
      productId: productCode,
      quantity: newValue,
      userId: Number(userId),
    };

    updateCartItemApi(valueUploadChangeQuantity)
      .then((res) => {
        console.log('res', res);
        if (res) {
          setQuantityValue(newValue);
          inCrementCountCart();
          alert('Cập nhật số lượng thành công');
        }
      })
      .catch((err) => {
        console.log('err', err);
        alert('Cập nhật số lượng thất bại');
      });
  }, []);

  const QuantityFunct = () => {
    return (
      <div>
        <button
          className="bg-black text-white text-base w-6 rounded-2xl"
          onClick={() => onDecrementQuantity(quantityValue)}
        >
          -
        </button>
        <span className="text-base mx-6">{quantityValue}</span>
        <button
          className="bg-black text-white text-base w-6 rounded-2xl"
          onClick={() => onIncrementQuantity(quantityValue)}
        >
          +
        </button>
      </div>
    );
  };

  return (
    <div key={key} className="my-4">
      <Row gutter={[16, 16]}>
        <Col span={10}>
          <div>
            <Image src={imageSrc} alt="image1" className="w-full h-full" width={0} height={0} sizes="100vw" />
          </div>
        </Col>

        <Col span={12}>
          <div>
            <h3 className="text-xl font-bold">{productName}</h3>

            <TitleCartFunct title="Mã sản phẩm: " content={productCode} />
            <TitleCartFunct title="Màu sắc: " content={color} />
            <TitleCartFunct title="Size: " content={size} />
            <TitleCartFunct title="Price: " content={price?.toLocaleString('en-US') + ' VND'} />
            <TitleCartFunct title="Số lượng: " content={<QuantityFunct />} />
            <TitleCartFunct title="Tổng: " content={total?.toLocaleString('en-US') + ' VND'} />
          </div>
        </Col>

        <Col span={2}>
          <div className="text-xl cursor-pointer" onClick={onRemove}>
            <MdClose />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CardCartItem;
