import HTTP_SERVICE from '../config/axios.config';

export const getAllColorApi = async () => {
  return HTTP_SERVICE.get('/color/get-all');
};
