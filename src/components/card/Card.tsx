import { Button, Card } from 'antd';
import Link from 'next/link';
import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaExchangeAlt, FaExpand } from 'react-icons/fa';
import Image from 'next/image';

import styles from './Card.module.css';
import clsx from 'clsx';

interface CardComponentProps {}

const CardComponent = (props: CardComponentProps) => {
  const {} = props;

  return (
    <>
      <div className={clsx(styles.productWrappersOne)}>
        <div className={clsx(styles.thumb)}>
          <Link href={'#'} className={clsx(styles.imageLink)}>
            <img
              src="https://andit.co/projects/html/andshop/andshop_frontend/assets/img/product-image/product1.png"
              alt="image1"
              className={clsx(styles.image)}
              width={0}
              height={0}
            />
            <img
              src="https://andit.co/projects/html/andshop/andshop_frontend/assets/img/product-image/product2.png"
              alt="image2"
              className={clsx(styles.imageHover)}
              width={0}
              height={0}
            />
          </Link>
          <span className={clsx(styles.badges)}>
            <span className={clsx(styles.new)}>New</span>
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
            <Link href={'#'} className={clsx(styles.titleLink)}>
              Blue Dress For Women
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
