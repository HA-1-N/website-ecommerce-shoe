import { Button, Card } from 'antd';
import Link from 'next/link';
import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaExchangeAlt, FaExpand } from 'react-icons/fa';
import Image from 'next/image';

import styles from './Card.module.css';
import clsx from 'clsx';
import HotCategoryCard from './HotCategoryCard';
import { useRouter } from 'next/router';

interface CardComponentProps {
  link?: string;
  images?: any;
  title?: string;
  price?: string;
  liked?: boolean;
  hotCategory?: string;
  id?: number;
}

const CardComponent = (props: CardComponentProps) => {
  const { link, images, liked, price, title, hotCategory, id } = props;

  return (
    <>
      <div className={clsx(styles.productWrappersOne)}>
        <div className={clsx(styles.thumb)}>
          <Link href={`/products/${id}`} className={clsx(styles.imageLink)}>
            <Image
              src={images[0]?.url}
              alt="image1"
              className={clsx(styles.image, 'w-full h-full')}
              width={0}
              height={0}
              sizes="100vw"
            />
            <Image
              src={images[1]?.url}
              alt="image2"
              className={clsx(styles.imageHover, 'w-full h-full')}
              width={0}
              height={0}
              sizes="100vw"
            />
          </Link>
          <span className={clsx(styles.badges)}>
            <span className={clsx(styles.new)}>
              <HotCategoryCard hotCategory={hotCategory} />
            </span>
          </span>
          <div className={clsx(styles.actions)}>
            <Link href={'#'} className={clsx(styles.action, styles.wishlist)}>
              <AiOutlineHeart />
            </Link>
            <Link href={'#'} className={clsx(styles.action, styles.quickview)}>
              <FaExpand />
            </Link>
            <Link href={'#'} className={clsx(styles.action, styles.compare)}>
              <FaExchangeAlt />
            </Link>
          </div>
          <Button size="small" className={clsx(styles.btnAddToCart)}>
            Add to cart
          </Button>
        </div>
        <div className={clsx(styles.content)}>
          <h5 className={clsx(styles.title)}>
            <Link href={`/products/${id}`} className={clsx(styles.titleLink)}>
              {title}
            </Link>
          </h5>
          <span className={clsx(styles.price)}>
            <span className={clsx(styles.new)}>$38.5</span>
          </span>
        </div>
      </div>
    </>
  );
};

export default CardComponent;
