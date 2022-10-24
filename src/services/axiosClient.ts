import axios from "axios";
import { ACCESS_TOKEN, EXPIRED_1DAY, REFRESH_TOKEN } from "../contants/auth";
import { getCachedData, removeCacheData, setCacheData } from "../utils/storage";

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

axiosClient.interceptors.request.use(
  (config: any) => {
    const customHeaders: any = {};

    const accessToken = getCachedData(ACCESS_TOKEN);
    if (accessToken) {
      customHeaders.Authorization = `Bearer ${accessToken}`;
    }
    return {
      ...config,
      headers: {
        ...customHeaders, // auto attach token
        ...config.headers, // but you can override for some requests
      },
    };
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
const refreshAccessToken = async (refresh_token: string) => {
  return await axiosClient('/v1/auth/refresh', {
    method: "POST",
    headers: {
      Authorization: `Bearer ${refresh_token}`
    }
  })
}

let checkRefreshToken = false;

axiosClient.interceptors.response.use(
  async (response: any) => {
    return response;
  },
  async (error) => {
    if (error.response.status === 406) {
      window.localStorage.clear();
      window.location.href = window.location.origin;
      return;
    }
    const originalRequest = error.config;
    const refreshToken = getCachedData(REFRESH_TOKEN)
    if (error.response.status === 401 && !checkRefreshToken && refreshToken) {
      try {
        checkRefreshToken = true
        const refreshRes = await refreshAccessToken(refreshToken);
        const { access_token = "", refresh_token = "" } = refreshRes?.data?.data || {}
        axiosClient.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
        originalRequest.headers = {
          ...originalRequest.config,
          Authorization: `Bearer ${access_token}`,
        }
        setCacheData(REFRESH_TOKEN, refresh_token, 7 * EXPIRED_1DAY)
        setCacheData(ACCESS_TOKEN, access_token, EXPIRED_1DAY)
        return axiosClient(originalRequest);
      } catch (error) {
        removeCacheData(ACCESS_TOKEN)
        removeCacheData(REFRESH_TOKEN)
        window.location.href = "/signin";
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

export default axiosClient;
