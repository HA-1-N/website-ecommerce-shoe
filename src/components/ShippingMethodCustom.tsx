import React from 'react';

interface ShippingMethodCustomProps {
  method?: string;
  price?: number;
}

const ShippingMethodCustom = (props: ShippingMethodCustomProps) => {
  const { method, price } = props;

  console.log('method', method);

  switch (method?.toLocaleLowerCase()) {
    case 'free shipping':
      return (
        <>
          <span className="text-lg">{method}</span> -{' '}
          <span className="text-lg">{price?.toLocaleString('en-US')} VND</span>{' '}
          <span className="text-lg">{'(Shipping about 2 - 3 days)'}</span>
        </>
      );
    case 'same day shipping':
      return (
        <>
          <span className="text-lg">{method}</span> -{' '}
          <span className="text-lg">{price?.toLocaleString('en-US')} VND</span>{' '}
          <span className="text-lg">{'(Shipping in day)'}</span>
        </>
      );
    default:
      return (
        <>
          <span className="text-lg">{method}</span> - <span className="text-lg">111,111 VND</span>{' '}
          <span className="text-lg">{''}</span>
        </>
      );
  }
};

export default ShippingMethodCustom;
