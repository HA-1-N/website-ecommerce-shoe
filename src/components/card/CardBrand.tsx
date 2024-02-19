import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';
import styles from './CardBrand.module.css';

interface CardBrandModels {
  url?: any;
  name?: any;
}

const CardBrand = (props: CardBrandModels) => {
  const { url, name } = props;

  return (
    <>
      <div className={clsx(styles.boxImage)}>
        <div>
          <Image alt={name} src={url} width={0} height={0} sizes="100vw" className={clsx(styles.image)} />
        </div>

        <div className={clsx(styles.boxTitle, 'absolute top-0 w-full h-full')}>
          <h1 style={{ transform: 'translateY(50%)' }} className="text-white h-full text-center font-black text-4xl">
            {name}
          </h1>
        </div>
      </div>
    </>
  );
};

export default CardBrand;
