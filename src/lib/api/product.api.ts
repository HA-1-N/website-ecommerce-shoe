import HTTP_SERVICE from '../config/axios.config';
import { ParamsModel } from '../model/page.model';
import { FilterProductModels, FilterProductWebsiteModels } from '../model/product.model';

export const getProductByIdApi = (id: number) => {
  return HTTP_SERVICE.get(`/product/get-by-id/${id}`);
};

export const filterProductApi = (body: FilterProductModels, params: ParamsModel) => {
  return HTTP_SERVICE.post('/product/filter', body, { params });
};

export const filterProductWebsiteApi = (body: FilterProductWebsiteModels, params: ParamsModel) => {
  return HTTP_SERVICE.post('/product/filter-website', body, { params });
};
