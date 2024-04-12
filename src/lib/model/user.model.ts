import { RoleModel } from './auth.model';

export interface UserModel {
  id?: number | null | undefined;
  name?: string | null | undefined;
  email?: string | null | undefined;
  gender?: string | null | undefined;
  age?: number | null | undefined;
  prefix?: string | null | undefined;
  phone?: string | null | undefined;
  dateOfBirth?: number | null | undefined;
  image?: string | null | undefined;
  roles?: RoleModel[];
}

export interface UserAddressModel {
  id?: number | null | undefined;
  name?: string | null | undefined;
  address?: string | null | undefined;
  country?: string | null | undefined;
  city?: string | null | undefined;
  phone?: string | null | undefined;
  prefix?: string | null | undefined;
  userId?: number | null | undefined;
  note?: string | null | undefined;
}

export interface UserPaymentModel {
  id?: number | null | undefined;
  name?: string | null | undefined;
  type?: string | null | undefined;
  provider?: string | null | undefined;
  accountNumber?: string | null | undefined;
  expirity?: number | null | undefined;
  cardNumber?: string | null | undefined;
  expiredDate?: string | null | undefined;
  cvv?: string | null | undefined;
  userId?: number | null | undefined;
}
