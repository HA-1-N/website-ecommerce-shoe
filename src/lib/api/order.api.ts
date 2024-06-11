import HTTP_SERVICE from '../config/axios.config';

export const orderCheckoutApi = (values: any) => {
  return HTTP_SERVICE.post('/order/checkout', values);
};

export const getOrderByUserIdApi = (userId: number) => {
  return HTTP_SERVICE.get(`/order/get-order-by-user-id/${userId}`);
};

export const getOrderByIdApi = (orderId: number) => {
  return HTTP_SERVICE.get(`/order/get-order-by-id/${orderId}`);
};
