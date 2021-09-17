import { AxiosRequestConfig } from 'axios';

export const requestConfig: AxiosRequestConfig = {
  baseURL: 'https://tiki.vn/api',
  headers: {
    'Content-Type': 'application/json'
  }
};
