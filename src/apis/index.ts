import {
  ApplicationRequestInstance,
  RequestInstance
} from './request-instance';
import { requestConfig } from './config';
import { API_PATH } from './constants';
import { pickResponse, pickRow1 } from './utils';

export interface API {
  getBannersHome(): Promise<any>;
}

export class ApplicationAPI implements API {
  private readonly request: RequestInstance;

  constructor(requestInstance: RequestInstance) {
    this.request = requestInstance;
  }

  getBannersHome(): Promise<any> {
    // type: <any> just for demo
    return this.request.instance
      .get(API_PATH.BANNERS_HOME)
      .then(pickResponse)
      .then(pickRow1);
  }
}

const requestInstance = new ApplicationRequestInstance(requestConfig);

export const api = new ApplicationAPI(requestInstance);
