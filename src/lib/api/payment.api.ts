import HTTP_SERVICE from '../config/axios.config';
import { ParamsModel } from '../model/page.model';
import { PaymentTypeModels } from '../model/payment.model';

export const filterPaymentTypeApi = (data: PaymentTypeModels, params: ParamsModel) => {
  return HTTP_SERVICE.post('/payment-type/filter', data, { params });
};
