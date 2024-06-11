import axios, { AxiosError } from 'axios';
import { getLocalStorageToken } from '../utils/auth.util';

const HTTP_SERVICE = axios.create({
  baseURL: process.env.BASE_URL || 'http://localhost:8088/api',
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
    const accessToken = localStorage && getLocalStorageToken();
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

// HTTP_SERVICE.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error: AxiosError) => {
//     // check conditions to refresh token
//     if (
//       error.response?.status === 401 &&
//       !error.response?.config?.url?.includes('auth/refresh') &&
//       !error.response?.config?.url?.includes('sign-in')
//     ) {
//       return refreshToken(error);
//     }
//     return Promise.reject(error);
//   },
// );

// const refreshToken = async (oError: AxiosError) => {
//   try {
//     const { response } = oError;

//     // create new Promise to retry original request
//     const retryOriginalRequest = new Promise((resolve) => {
//       addSubscriber((token: string) => {
//         response!.config.headers['Authorization'] = `Bearer ${token}`;
//         resolve(axios(response!.config));
//       });
//     });

//     // check whether refreshing token or not
//     if (!fetchingToken) {
//       fetchingToken = true;

//       // refresh token
//       const { data } = await api.post('/api/v1/auth/refresh');
//       // check if this is server or not. We don't wanna save response token on server.
//       if (!isServer) {
//         setAccessToken(data.accessToken);
//       }
//       // when new token arrives, retry old requests
//       onAccessTokenFetched(data.accessToken);
//     }
//     return retryOriginalRequest;
//   } catch (error) {
//     // on error go to login page
//     if (!isServer() && !Router.asPath.includes('/login')) {
//       Router.push('/login');
//     }
//     if (isServer()) {
//       context.res.setHeader('location', '/login');
//       context.res.statusCode = 302;
//       context.res.end();
//     }
//     return Promise.reject(oError);
//   } finally {
//     fetchingToken = false;
//   }
// };

export default HTTP_SERVICE;
