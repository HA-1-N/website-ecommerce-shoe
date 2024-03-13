import React from 'react';
import Image from 'next/image';
import { MdClose } from 'react-icons/md';
import { Col, Row } from 'antd';

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
}

const CardCartItem = (props: CardCartItemProps) => {
  const { key, productName, imageSrc, productCode, quantity, color, size, price, onRemove } = props;

  const total = Number(price) * Number(quantity);

  const TitleCartFunct = ({ title, content }: { title?: string; content?: any }) => {
    return (
      <div>
        <span>{title} </span>
        <span>{content}</span>
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
            <TitleCartFunct title="Price: " content={price?.toLocaleString()} />
            <TitleCartFunct title="Số lượng: " content={quantity} />
            <TitleCartFunct title="Tổng: " content={total?.toLocaleString()} />
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
