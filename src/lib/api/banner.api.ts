import HTTP_SERVICE from '../config/axios.config';
import { HTTP_BASE_URL } from '../config/url.config';

export const getBannerData = async (page?: number, size?: number) => {
  try {
    const res = await HTTP_SERVICE.get(`/banners/get-all?page=${page}&size=${size}`);
    return res?.data;
  } catch (error) {
    console.log('error', error);
  }
};
