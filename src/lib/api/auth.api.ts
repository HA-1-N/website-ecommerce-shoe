import HTTP_SERVICE from '../config/axios.config';
import { ChangePasswordModel } from '../model/auth.model';

export const loginApi = async (data: any) => {
  return HTTP_SERVICE.post('/auth/login', data);
};

export const registerApi = async (data: any) => {
  return HTTP_SERVICE.post('/auth/register', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Accept: 'application/json',
      type: 'formData',
    },
  });
};

export const getCurrentUserByIdApi = (id: number) => {
  return HTTP_SERVICE.get(`/user/get-by-id/${id}`);
};

export const changePasswordApi = (data: ChangePasswordModel) => {
  return HTTP_SERVICE.post('/auth/change-password', data);
};
