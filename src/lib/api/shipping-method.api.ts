import HTTP_SERVICE from '../config/axios.config';
import { ParamsModel } from '../model/page.model';
import { ShippingMethodModel } from '../model/shipping-method';

export const filterShippingMethod = (data: ShippingMethodModel, params: ParamsModel) => {
  return HTTP_SERVICE.post('/shipping-method/filter', data, { params });
};
