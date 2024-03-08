import HTTP_SERVICE from '../config/axios.config';
import { UserModel } from '../model/user.model';

export const updateUserApi = (data: FormData, id: number) => {
  return HTTP_SERVICE.post(`/user/update/${id}`, data, {
    headers: { 'Content-Type': 'multipart/form-data', Accept: 'application/json', type: 'formData' },
  });
};

export const updateUserDetailApi = (data: FormData, id: number) => {
  return HTTP_SERVICE.post(`/user/update/user-detail/${id}`, data, {
    headers: { 'Content-Type': 'multipart/form-data', Accept: 'application/json', type: 'formData' },
  });
};
