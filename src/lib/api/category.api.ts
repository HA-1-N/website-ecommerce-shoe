import HTTP_SERVICE from '../config/axios.config';

export const getAllCategoryApi = async () => {
  return HTTP_SERVICE.get('/category/get-all');
};
