import {
  ApplicationRequestInstance,
  RequestInstance
} from './request-instance';
import { requestConfig } from './config';
import { API_PATH } from './constants';
import { pickData, pickResponse, pickRow1 } from './utils';
import { Banner } from '@models/Banner';
import { Book } from '@models/Book';

export class ApplicationAPI {
  private readonly request: RequestInstance;

  constructor(requestInstance: RequestInstance) {
    this.request = requestInstance;
  }

  getBannersHome(): Promise<Banner[]> {
    return this.request.instance
      .get(API_PATH.BANNERS_HOME)
      .then(pickResponse)
      .then(pickRow1);
  }

  getBooksSale(queryParams?: string): Promise<Book[]> {
    return this.request.instance
      .get(`${API_PATH.BOOKS_SALE}${queryParams}`)
      .then(pickResponse)
      .then(pickData);
  }
}

const requestInstance = new ApplicationRequestInstance(requestConfig);

export const api = new ApplicationAPI(requestInstance);
