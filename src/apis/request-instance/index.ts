import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export interface RequestHeaders {
  [key: string]: string;
}

export interface RequestInstance {
  readonly instance: AxiosInstance;
  setHeaders(headers: RequestHeaders): void;
}

export class ApplicationRequestInstance implements RequestInstance {
  private readonly axiosInstance: AxiosInstance;

  constructor(config: AxiosRequestConfig) {
    this.axiosInstance = axios.create(config);
  }

  get instance(): AxiosInstance {
    return this.axiosInstance;
  }

  setHeaders(headers: RequestHeaders): void {
    this.instance.defaults.headers.common = {
      ...headers,
      ...this.instance.defaults.headers.common
    };
  }
}
