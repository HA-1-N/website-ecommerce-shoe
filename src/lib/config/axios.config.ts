import axios from 'axios';

const HTTP_SERVICE = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    //  Authorization: `<Your Auth Token>`,
    'Content-Type': 'application/json',
    timeout: 1000,
  },
  // .. other options
});

HTTP_SERVICE.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const accessToken = localStorage && localStorage.getItem('');
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    // config language
    const language = (localStorage && localStorage.getItem('')) || 'vi';
    config.headers['Accept-Language'] = language;

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

export default HTTP_SERVICE;
