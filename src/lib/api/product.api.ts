import HTTP_SERVICE from '../config/axios.config';

export const getProductByIdApi = (id: number) => {
  return HTTP_SERVICE.get(`/product/get-by-id/${id}`);
};
