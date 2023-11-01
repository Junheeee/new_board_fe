import axios, { AxiosInstance } from 'axios';

// Axios 인스턴스 생성
const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'http://localhost:8080'
});

// Request interceptor를 등록합니다.
// axiosInstance.interceptors.request.use(
//   async config => {
//     // Request가 보내기 전에 수행할 작업을 여기에 작성합니다.
//     config.headers['Accept-Language'] = 'ko_KR';

//     const type = 'Bearer';
//     const accessToken = CookieStorage.getCookie(COOKIE_ACCESS_TOKEN);

//     if (accessToken) {
//       // config.headers.Authorization = `${type} ${accessToken}`;
//       config.headers['Authorization'] = `${type} ${accessToken}`;
//     }

//     return config;
//   },
//   (error: any) => {
//     // Request interceptor에서 에러가 발생한 경우 처리할 작업을 여기에 작성합니다.
//     return Promise.reject(error);
//   }
// );

// Response interceptor를 등록합니다.
axiosInstance.interceptors.response.use(
  (response: any) => {
    // Response를 받은 후 수행할 작업을 여기에 작성합니다.
    return response;
  },
  async (error: any) => {
    const {
      config,
      response: { status }
    } = error;
    if (status) {
      if (status === 401) {
        //CM420 - 토큰만료
        const code = error.response.data.code;

        const originalRequest = config;

        //   CookieStorage.removeCookie(COOKIE_ACCESS_TOKEN);
        //   CookieStorage.removeCookie(COOKIE_REFRESH_TOKEN);
        localStorage.setItem('loginData', JSON.stringify({}));
        delete originalRequest.headers.authorization;
        // return axios(originalRequest);
      }
    } else if (status === 500) {
      // alert(error.response.data.message);
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
