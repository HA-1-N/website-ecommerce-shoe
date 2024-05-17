'use client';
import { getAllColorApi } from '@/lib/api/color.api';
import { getProductByIdApi } from '@/lib/api/product.api';
import { ColorModels } from '@/lib/model/color.model';
import { ProductModels, ProductQuantityModels } from '@/lib/model/product.model';
import { SizeModel } from '@/lib/model/size.model';
import { removeDuplicates } from '@/lib/utils/array.util';
import { Button, Col, InputNumber, Row } from 'antd';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import styles from './ProductDetail.module.css';
import { FaArrowLeft, FaArrowRight, FaCheck } from 'react-icons/fa';
import clsx from 'clsx';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { getLocalStorageId } from '@/lib/utils/auth.util';
import { addToCartApi } from '@/lib/api/cart.api';
import { AddToCartModel } from '@/lib/model/cart.model';
import { useAppDispatch } from '@/redux/hook';
import { setCountCart } from '@/redux/feature/cart.slice';

const ProductDetail = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const router = useRouter();

  const getId = Number(params.id);
  const getIdLocalStorage = getLocalStorageId();

  const [productDetail, setProductDetail] = useState<ProductModels | null>(null);
  const [productQuantitiesDetail, setProductQuantitiesDetail] = useState<ProductQuantityModels[]>([]);
  const [listProductImage, setListProductImage] = useState<any[]>([]);

  const [listSizeColor, setListSizeColor] = useState<any[]>([]);
  const [listColor, setListColor] = useState<ColorModels[]>([]);
  const [color, setColor] = useState<ColorModels | null>(null);
  const [size, setSize] = useState<SizeModel | null>(null);
  const [quantity, setQuantity] = useState<number | null>(1);

  const getImagesBySizeAndColor = (
    productQuantities: ProductQuantityModels[],
    size: SizeModel | null,
    color: ColorModels,
  ) => {
    const images: any = [];
    productQuantities?.forEach((item: ProductQuantityModels) => {
      if (item?.size?.name === size?.name && item?.color?.name === color?.name) {
        images.push(item?.productQuantityImages);
      }
    });

    return images.flat();
  };

  const getProductById = async () => {
    try {
      const res = await getProductByIdApi(getId);
      const productQuantities = res.data?.productQuantities;

      const sizeColorArr = productQuantities?.map((item: ProductQuantityModels) => ({
        size: item?.size,
        color: item?.color,
      }));

      const transformedDataSizeColor = sizeColorArr.reduce((acc: any, item: any) => {
        const existingItem = acc.find((i: any) => i.color.id === item.color.id);

        if (existingItem) {
          existingItem.size.push(item.size);
        } else {
          acc.push({
            color: item.color,
            size: [item.size],
          });
        }

        return acc;
      }, []);

      const getListColor = transformedDataSizeColor?.map((item: any) => item.color);
      const getSizeByColor = transformedDataSizeColor
        ?.filter((item: any) => item.color.id === getListColor[0]?.id)
        ?.map((item: any) => item.size)
        ?.flat();

      const getListImage = getImagesBySizeAndColor(productQuantities, getSizeByColor[0], getListColor[0]);

      setListSizeColor(transformedDataSizeColor);
      setProductQuantitiesDetail(productQuantities);
      setListProductImage(getListImage);
      setListColor(getListColor);
      setColor(getListColor[0]);
      setSize(getSizeByColor[0]);
      setProductQuantitiesDetail(productQuantities);
      setProductDetail(res.data);
    } catch (err) {
      console.log('error', err);
    }
  };

  const getAllColor = async () => {
    try {
      const res = await getAllColorApi();
      setListColor(res.data);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    getProductById();
    getAllColor();
  }, []);

  const NextArrow = (props: any) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <FaArrowRight style={{ color: '#000' }} />
      </div>
    );
  };

  const PrevArrow = (props: any) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <FaArrowLeft style={{ color: '#000' }} />
      </div>
    );
  };

  const settings = {
    customPaging: function (i: any) {
      return (
        <a>
          <img src={listProductImage[i + 1]?.url} alt="image1" />
        </a>
      );
    },
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    arrow: true,
  };

  const handleChangeColor = (item: ColorModels) => {
    const getListImage = getImagesBySizeAndColor(productQuantitiesDetail, size, item);
    setListProductImage(getListImage);
    setColor(item);
  };

  const onChangeQuantity = (value: number | null) => {
    setQuantity(value);
  };

  const handleAddToCart = async () => {
    if (getIdLocalStorage) {
      // call api add to cart
      console.log('call api add to cart');

      const body: AddToCartModel = {
        userId: Number(getIdLocalStorage),
        productId: Number(productDetail?.id),
        quantity: quantity,
        colorId: color?.id,
        sizeId: size?.id,
      };

      addToCartApi(body)
        .then((res) => {
          if (res) {
            console.log('res', res);
            dispatch(setCountCart());
          }
        })
        .catch((err) => {
          console.log('err', err);
        });
    } else {
      router.push('/login');
    }
  };

  return (
    <>
      <div>
        <div className="container mx-auto px-4 py-8">
          <Row gutter={[16, 16]}>
            <Col className="gutter-row" span={12}>
              <div className="slider-container ">
                <Slider {...settings}>
                  {listProductImage?.map((item: any, index: number) => (
                    <div key={index} className={clsx(styles.boxImage, 'slider-item')}>
                      <Image
                        src={item?.url}
                        alt="image1"
                        className={clsx(styles.sliderImage)}
                        width={500}
                        height={500}
                        sizes="100vw"
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </Col>
            <Col className="gutter-row" span={12}>
              <div>
                <h1 className="text-3xl font-semibold">{productDetail?.name}</h1>

                <span className="text-xl text-bold">{productDetail?.price?.toLocaleString('en-US')} VND</span>

                <p>{productDetail?.description}</p>
              </div>

              <hr className="my-4" />

              {/* Color and size */}
              <div>
                <div className="flex items-center">
                  <h5 className="text-lg">Màu sắc: </h5>
                  <span className="ml-2 text-lg font-bold">{color?.name}</span>
                </div>
                <div className="mt-2 flex items-center">
                  {listColor.map((item: ColorModels, index: number) => (
                    <button
                      style={{ background: `${item?.code}` }}
                      key={index}
                      className="btn-color mr-2 cursor-pointer h-8 w-8 rounded-full text-center border-2 border-solid border-gray-300"
                      onClick={() => handleChangeColor(item)}
                    >
                      {color?.name === item?.name ? (
                        <FaCheck
                          style={{
                            color: item?.code === '#fff' || item?.code === '#ffffff' ? 'rgb(249 115 22)' : '#fff',
                            textAlign: 'center',
                            width: '100%',
                          }}
                        />
                      ) : null}
                    </button>
                  ))}
                </div>

                <div className="flex items-center">
                  <h5 className="text-lg">Size: </h5>
                  <span className="ml-2 text-lg font-bold">{size?.name}</span>
                </div>
                <div className="mt-2 flex items-center">
                  {listSizeColor
                    ?.filter((item: any) => item?.color?.name === color?.name)
                    ?.map((item: any) =>
                      item?.size.map((i: SizeModel, index: number) => (
                        <button
                          key={index}
                          className={clsx(
                            'btn-size mr-2 cursor-pointer h-8 w-8 rounded-full text-center border-2 border-solid border-gray-300',
                            {
                              'bg-gray-300': i?.name === size?.name,
                              'bg-white': i?.name !== size?.name,
                            },
                          )}
                          onClick={() => setSize(i)}
                        >
                          {i?.name}
                        </button>
                      )),
                    )}
                </div>
              </div>

              <hr className="my-4" />

              <div>
                <div className="flex items-center">
                  <h5 className="text-lg">Số lượng:</h5>
                  <div className="mt-2 ml-4">
                    <InputNumber min={1} max={10} value={quantity} onChange={onChangeQuantity} />
                  </div>
                </div>
                <div className="mt-4">
                  <Button onClick={handleAddToCart}>Add to cart</Button>
                </div>
              </div>

              <hr className="my-4" />

              <div>
                <div className="flex items-center">
                  <h5 className="text-lg">Category:</h5>
                  <span className="text-lg ml-2 font-bold">{productDetail?.category?.name}</span>
                </div>

                <div className="flex items-center mt-2">
                  <h5 className="text-lg">Brand:</h5>
                  <span className="text-lg ml-2 font-bold">{productDetail?.brand?.name}</span>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
