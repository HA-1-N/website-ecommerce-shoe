'use client';

import { getAllCategoryApi } from '@/lib/api/category.api';
import { getAllColorApi } from '@/lib/api/color.api';
import { getAllBrandApi } from '@/lib/api/home.api';
import { getAllSizeApi } from '@/lib/api/size.api';
import { BrandModels } from '@/lib/model/brand.model';
import { CategoryModels } from '@/lib/model/category.model';
import { ColorModels } from '@/lib/model/color.model';
import { ParamsModel } from '@/lib/model/page.model';
import { FilterProductWebsiteModels } from '@/lib/model/product.model';
import { SizeModel } from '@/lib/model/size.model';
import { changeFormSearch, changePageSearch, filterProductWebsiteAsync } from '@/redux/feature/product.slice';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { Checkbox, Col, GetProp, Row, Slider, SliderSingleProps } from 'antd';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

const FilterSidebar = () => {
  const marks: SliderSingleProps['marks'] = {
    0: '0',

    10000000: '10,000,000',

    20000000: '20,000,000',
  };

  const initialValues: FilterProductWebsiteModels = {
    name: null,
    status: null,
    categoryId: null,
    brandId: null,
    sizeId: null,
    colorId: null,
    minPrice: 0,
    maxPrice: 5000000,
  };

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const dispatch = useAppDispatch();
  const formSearch = useAppSelector((state) => state.product.formSearch);
  const pageSearch = useAppSelector((state) => state.product.pageSearch);

  const [listCategory, setListCategory] = useState<CategoryModels[]>([]);
  const [listBrand, setListBrand] = useState<BrandModels[]>([]);
  const [listSize, setListSize] = useState<SizeModel[]>([]);
  const [listColor, setListColor] = useState<ColorModels[]>([]);

  const [category, setCategory] = useState<any>([]);
  const [brand, setBrand] = useState<any>([]);
  const [size, setSize] = useState<any>([]);
  const [color, setColor] = useState<any>([]);
  const [price, setPrice] = useState<number[]>([0, 5000000]);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const queryParams: ParamsModel = {
    page: pageSearch - 1,
    size: 16,
  };

  const filterProduct = async (body: FilterProductWebsiteModels, params: ParamsModel) => {
    await dispatch(filterProductWebsiteAsync({ body: body, params: params }));
  };

  const getAllCategory = async () => {
    try {
      const res = await getAllCategoryApi();
      setListCategory(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllBrand = async () => {
    try {
      const res = await getAllBrandApi();
      setListBrand(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllSize = async () => {
    try {
      const res = await getAllSizeApi();
      setListSize(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllColor = async () => {
    try {
      const res = await getAllColorApi();
      setListColor(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategory();
    getAllBrand();
    getAllSize();
    getAllColor();
  }, []);

  useEffect(() => {
    filterProduct(formSearch, queryParams);
  }, [dispatch, pageSearch]);

  useEffect(() => {
    if (category?.length === 0 && brand?.length === 0 && size?.length === 0 && color?.length === 0) {
      replace(pathname);
    }
  }, []);

  const onChangeCategory: GetProp<typeof Checkbox.Group, 'onChange'> = useDebouncedCallback((checkedValues) => {
    setCategory(checkedValues);
    const params = new URLSearchParams(searchParams);
    const listCategoryId = checkedValues?.length > 0 ? checkedValues?.map((item: any) => parseInt(item)) : null;
    const newFormSearch = { ...formSearch, categoryId: listCategoryId };
    filterProduct(newFormSearch, queryParams);
    dispatch(changeFormSearch(newFormSearch));
    if (checkedValues.length > 0) {
      params.set('category', checkedValues.join(','));
    } else {
      params.delete('category');
    }
    replace(`${pathname}?${params.toString()}`);
  }, 500);

  const onChangeBrand: GetProp<typeof Checkbox.Group, 'onChange'> = useDebouncedCallback((checkedValues) => {
    setBrand(checkedValues);
    const params = new URLSearchParams(searchParams);
    const listBrandId = checkedValues?.length > 0 ? checkedValues?.map((item: any) => parseInt(item)) : null;
    const newFormSearch = { ...formSearch, brandId: listBrandId };
    filterProduct(newFormSearch, queryParams);
    dispatch(changeFormSearch(newFormSearch));
    if (checkedValues.length > 0) {
      params.set('brand', checkedValues.join(','));
    } else {
      params.delete('brand');
    }
    replace(`${pathname}?${params.toString()}`);
  }, 500);

  const onChangeSize: GetProp<typeof Checkbox.Group, 'onChange'> = useDebouncedCallback((checkedValues) => {
    setSize(checkedValues);
    const params = new URLSearchParams(searchParams);
    const listSizeId = checkedValues?.length > 0 ? checkedValues?.map((item: any) => parseInt(item)) : null;
    const newFormSearch = { ...formSearch, sizeId: listSizeId };
    filterProduct(newFormSearch, queryParams);
    dispatch(changeFormSearch(newFormSearch));
    if (checkedValues.length > 0) {
      params.set('size', checkedValues.join(','));
    } else {
      params.delete('size');
    }
    replace(`${pathname}?${params.toString()}`);
  }, 500);

  const onChangeColor: GetProp<typeof Checkbox.Group, 'onChange'> = useDebouncedCallback((checkedValues) => {
    setColor(checkedValues);
    const params = new URLSearchParams(searchParams);
    const listColorId = checkedValues?.length > 0 ? checkedValues?.map((item: any) => parseInt(item)) : null;
    const newFormSearch = { ...formSearch, colorId: listColorId };
    filterProduct(newFormSearch, queryParams);
    dispatch(changeFormSearch(newFormSearch));
    if (checkedValues.length > 0) {
      params.set('color', checkedValues.join(','));
    } else {
      params.delete('color');
    }
    replace(`${pathname}?${params.toString()}`);
  }, 500);

  const handleChangePrice = useDebouncedCallback((value: number[]) => {
    // if (timeoutRef.current) {
    //   clearTimeout(timeoutRef.current);
    // }

    setPrice(value);
    const params = new URLSearchParams(searchParams);
    const newFormSearch = { ...formSearch, minPrice: value[0], maxPrice: value[1] };
    filterProduct(newFormSearch, queryParams);
    dispatch(changeFormSearch(newFormSearch));
    params.set('minPrice', value[0].toString());
    params.set('maxPrice', value[1].toString());
    replace(`${pathname}?${params.toString()}`);
  });

  const handleReset = () => {
    setCategory([]);
    setBrand([]);
    setSize([]);
    setColor([]);
    setPrice([0, 5000000]);
    replace(pathname);
    filterProduct(initialValues, queryParams);
    dispatch(changePageSearch(1));
    dispatch(changeFormSearch(initialValues));
  };

  return (
    <>
      <div className="pr-4">
        <Row gutter={16} align="middle">
          <Col span={12}>
            <h1 className="text-2xl font-bold">Filter</h1>
          </Col>
          <Col span={12}>
            <button onClick={handleReset}>Clear all</button>
          </Col>
        </Row>

        <hr className="mt-8 mb-6" />

        <div>
          <h2 className="text-lg font-bold mb-4">Category</h2>
          <div>
            <Checkbox.Group style={{ width: '100%' }} value={category} onChange={onChangeCategory}>
              <Row gutter={[16, 8]}>
                {listCategory.map((item) => (
                  <Col span={24} key={item.id}>
                    <Checkbox value={item.id}>
                      <span>{item.name}</span>
                    </Checkbox>
                  </Col>
                ))}
              </Row>
            </Checkbox.Group>
          </div>
        </div>

        <hr className="mt-8 mb-6" />

        <div>
          <h2 className="text-lg font-bold mb-4">Brands</h2>
          <div>
            <Checkbox.Group style={{ width: '100%' }} value={brand} onChange={onChangeBrand}>
              <Row gutter={[16, 8]}>
                {listBrand.map((item) => (
                  <Col span={24} key={item.id}>
                    <Checkbox value={item.id}>
                      <span>{item.name}</span>
                    </Checkbox>
                  </Col>
                ))}
              </Row>
            </Checkbox.Group>
          </div>
        </div>

        <hr className="mt-8 mb-6" />

        <div>
          <h2 className="text-lg font-bold mb-4">Size</h2>
          <div>
            <Checkbox.Group style={{ width: '100%' }} value={size} onChange={onChangeSize}>
              <Row gutter={[2, 8]}>
                {listSize?.map((item) => (
                  <Col span={8} key={item.id}>
                    <Checkbox value={item.id}>
                      <span>{item.name}</span>
                    </Checkbox>
                  </Col>
                ))}
              </Row>
            </Checkbox.Group>
          </div>
        </div>

        <hr className="mt-8 mb-6" />

        <div>
          <h2 className="text-lg font-bold mb-4">Color</h2>
          <div>
            <Checkbox.Group style={{ width: '100%' }} value={color} onChange={onChangeColor}>
              <Row gutter={[16, 8]} align={'middle'}>
                {listColor.map((item) => (
                  <Col span={12} key={item.id}>
                    <Checkbox value={item.id}>
                      <div className="flex items-center">
                        <div
                          style={{ background: `${item?.code}`, display: 'inline-block' }}
                          className="btn-color mr-2 cursor-pointer h-6 w-6 rounded-full text-center border-2 border-solid border-gray-300"
                        ></div>
                        <span>{item.name}</span>
                      </div>
                    </Checkbox>
                  </Col>
                ))}
              </Row>
            </Checkbox.Group>
          </div>
        </div>

        <hr className="mt-8 mb-6" />

        <div>
          <h2 className="text-lg font-bold mb-4">Price</h2>
          <div>
            <Checkbox.Group style={{ width: '100%' }} onChange={onChangeColor}>
              <Row gutter={[16, 8]} align={'middle'}>
                <Col span={24}>
                  <Slider
                    range
                    value={price}
                    max={20000000}
                    marks={marks}
                    onChange={(value: number[]) => handleChangePrice(value)}
                  />
                </Col>
              </Row>
            </Checkbox.Group>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;
