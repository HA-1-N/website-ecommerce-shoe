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
