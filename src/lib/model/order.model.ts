import { ProductModels } from './product.model';
import { ShippingMethodModel } from './shipping-method';
import { UserAddressModel, UserModel, UserPaymentModel } from './user.model';

export interface OrderModels {
  id?: number;
  userId?: number;
  name?: string;
  address?: string;
  shippingAddress?: string;
  prefix?: string;
  phone?: string;
  city?: string;
  country?: string;
  paymentMethod?: string;
  shippingMethod?: string;
  status?: string;
  total?: number;
  createdAt?: string;
  updatedAt?: string;
  // orderItems: OrderItems[];
}

export interface OrderStatusModels {
  id?: number;
  status?: string;
}

export interface OrderProductModel {
  id?: number;
  product?: ProductModels;
  quantity?: number;
  totalPrice?: number;
}

export interface OrderDetailModels {
  id?: number;
  user?: UserModel;
  orderStatus?: OrderStatusModels;
  shippingMethod?: ShippingMethodModel;
  userPayment?: UserPaymentModel;
  userAddress?: UserAddressModel;
  orderDate?: string;
  orderTotal?: number;
  orderProducts?: OrderProductModel[];
  // product: ProductModels;
}
