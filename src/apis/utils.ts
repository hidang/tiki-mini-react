import { Response } from './types';
import { AxiosResponse } from 'axios';

export type AxiosResponseSelector<T extends keyof AxiosResponse> = (
  r: AxiosResponse
) => typeof r[T];

export const pickResponse: AxiosResponseSelector<'data'> = (r) => r.data;

export type ResponseSelector<T extends keyof Response> = (
  r: Response
) => typeof r[T];

export const pickData: ResponseSelector<'data'> = (r) => {
  return r.data;
};

export const pickRow1: ResponseSelector<'row1'> = (r) => {
  return r.row1;
};

export const pickRow2: ResponseSelector<'row2'> = (r) => {
  return r.row2;
};
