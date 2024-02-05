import HTTP_SERVICE from '../config/axios.config';
import { HotCategoryModels } from '../model/hot-category.model';
import { ParamsModel } from '../model/page.model';

export const getAllHotCategory = () => {
  return HTTP_SERVICE.get('/api/');
};

export const filterHotCategoryApi = (body: HotCategoryModels, params: ParamsModel) => {
  return HTTP_SERVICE.post('/hot-category/filter', body, { params });
};
