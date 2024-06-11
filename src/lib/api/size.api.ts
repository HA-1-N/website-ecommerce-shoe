import HTTP_SERVICE from '../config/axios.config';

export const getAllSizeApi = async () => {
  return HTTP_SERVICE.get('/size/get-all');
};
