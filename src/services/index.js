/* eslint-disable */
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import qs from 'qs';
import { toast } from 'react-toastify';
import config from '../config.json';
import {useNavigate} from "react-router-dom";
const REACT_APP_BASE_URL = config.SERVER_URL;

const axiosServices = axios.create({
  baseURL: REACT_APP_BASE_URL,
  timeout: 60000
});

export const refreshAccessToken = async () => {
  const refreshToken = localStorage.getItem('refreshToken');
  try {
    const { data } = await axios.post(`${REACT_APP_BASE_URL}/auth/refresh-token`, null, {
      headers: {
        authorization: `Bearer ${refreshToken}`
      }
    });
    localStorage.setItem('servicesToken', data.servicesToken);
    localStorage.setItem('refreshToken', data.refreshToken);
    return data;
  } catch (err) {
    toast.error('Login session expired');
  }
};

export const handleRequestError = (error) => {
  if (error.response?.status === 401 && window.location.pathname !== '/login') {
    toast.error('Phiên đăng nhập đã hết hạn');
    if (localStorage.getItem('servicesToken')) {
      localStorage.clear();
      setTimeout(() => {
        window.location.href('/login')
      }, 2000);
    }
    return;
  }
  if (error.code === 'ERR_CANCELED') {
    return;
  }
  if (error.response?.data) {
    return toast.error(error.response.data?.message);
  }
  return toast.error('Unknown error');
};

axiosServices.interceptors.request.use(
  (req) => {
    const accessToken = localStorage.getItem('servicesToken');
    if (accessToken) {
      req.headers.Authorization = `Bearer ${accessToken}`;
    }

    return req;
  },
  (err) => {
    throw err;
  }
);

axiosServices.interceptors.response.use(
  (res) => res,
  (error) => {
    handleRequestError(error);
    return Promise.reject(error);
  }
);

export default axiosServices;
