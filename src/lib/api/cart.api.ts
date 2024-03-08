import HTTP_SERVICE from '../config/axios.config';
import { AddToCartModel } from '../model/cart.model';

export const addToCartApi = (data: AddToCartModel) => {
  return HTTP_SERVICE.post('/cart/add-to-cart', data);
};

export const getCartItemApi = (userId: number) => {
  return HTTP_SERVICE.get(`/cart/get-cart-by-user-id/${userId}`);
};
