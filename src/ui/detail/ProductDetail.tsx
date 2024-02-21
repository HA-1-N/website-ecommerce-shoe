'use client';
import { getAllColorApi } from '@/lib/api/color.api';
import { getProductByIdApi } from '@/lib/api/product.api';
import { ColorModels } from '@/lib/model/color.model';
import { ProductModels, ProductQuantityModels } from '@/lib/model/product.model';
import { SizeModel } from '@/lib/model/size.model';
import { removeDuplicates } from '@/lib/utils/array.util';
import { Button, Col, Row } from 'antd';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import styles from './ProductDetail.module.scss';
import { FaCheck } from 'react-icons/fa';
import clsx from 'clsx';

const ProductDetail = () => {
  const params = useParams();
  const getId = Number(params.id);

  const [productDetail, setProductDetail] = useState<ProductModels | null>(null);
  const [productQuantitiesDetail, setProductQuantitiesDetail] = useState<ProductQuantityModels | null>(null);
  const [listProductImage, setListProductImage] = useState<any[]>([]);
  console.log('listProductImage', listProductImage);

  const [listColor, setListColor] = useState<ColorModels[]>([]);
  const [listSize, setListSize] = useState<SizeModel[]>([]);

  const [color, setColor] = useState<ColorModels | null>(null);
  const [size, setSize] = useState<SizeModel | null>(null);

  const getProductById = async () => {
    try {
      const res = await getProductByIdApi(getId);
      console.log('res', res);

      const productQuantities = res.data?.productQuantities;
      const getListColor = productQuantities?.map((item: ProductQuantityModels) => item?.color);
      const getListSize = productQuantities
        ?.filter((item: ProductQuantityModels) => getListColor?.includes(item?.color))
        ?.map((item: ProductQuantityModels) => item?.size);
      const newListColor = removeDuplicates(getListColor);
      const newListSize = removeDuplicates(getListSize);
      // const getListImage = productQuantities?.productQuantityImages[0];

      // console.log('getListImage', getListImage);

      // setListProductImage(getListImage[0]);
      setListColor(newListColor);
      setColor(newListColor[0]);
      setListSize(newListSize);
      setSize(newListSize[0]);
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

  const settings = {
    customPaging: function (i: any) {
      return (
        <a>
          <Image src={''} alt="image1" className={''} width={0} height={0} sizes="100vw" />
        </a>
      );
    },
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div>
        <div className="container mx-auto px-4 py-8">
          <Row gutter={[16, 16]}>
            <Col className="gutter-row" span={12}>
              <div className="slider-container">
                <Slider {...settings}></Slider>
              </div>
            </Col>
            <Col className="gutter-row" span={12}>
              <div>
                <h1 className="text-3xl font-semibold">{productDetail?.name}</h1>

                <span className="text-xl text-bold">{productDetail?.price}</span>

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
                      onClick={() => setColor(item)}
                    >
                      {color?.name === item?.name ? (
                        <FaCheck style={{ color: 'rgb(249 115 22)', textAlign: 'center', width: '100%' }} />
                      ) : null}
                    </button>
                  ))}
                </div>

                <div className="flex items-center">
                  <h5 className="text-lg">Size: </h5>
                  <span className="ml-2 text-lg font-bold">{size?.name}</span>
                </div>
                <div className="mt-2 flex items-center">
                  {listSize.map((item: SizeModel, index: number) => (
                    <button
                      key={index}
                      className={clsx(
                        'btn-size mr-2 cursor-pointer h-8 w-8 rounded-full text-center border-2 border-solid border-gray-300',
                        {
                          'bg-gray-300': size?.name === item?.name,
                          'bg-white': size?.name !== item?.name,
                        },
                      )}
                      onClick={() => setSize(item)}
                    >
                      {item?.name}
                    </button>
                  ))}
                </div>
              </div>

              <hr className="my-4" />

              <div>
                <div>
                  <h5 className="text-lg">Số lượng:</h5>
                </div>
                <div className="mt-2">
                  <input type="number" className="w-20 h-8 border-2 border-solid border-gray-300" />
                </div>
                <div>
                  <Button>Add to cart</Button>
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
