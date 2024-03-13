import { ColorModels } from './color.model';
import { ProductImageModels, ProductModels } from './product.model';
import { SizeModel } from './size.model';

export interface AddToCartModel {
  productId?: number | null;
  quantity?: number | null;
  userId?: number | null;
  colorId?: number | null;
  sizeId?: number | null;
  cartId?: number | null;
}

export interface CartItemModel {
  id?: number | null;
  cartId?: number | null;
  productId?: number | null;
  productName?: string | null;
  imageSrc?: string | null;
  productCode?: string | null;
  quantity?: number | null;
  color?: ColorModels | null;
  size?: SizeModel | null;
  price?: number | null;
  total?: number | null;
  product?: ProductModels | null;
  productImage?: ProductImageModels | null;
}
