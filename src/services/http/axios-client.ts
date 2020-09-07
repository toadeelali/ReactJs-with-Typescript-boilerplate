import axios, { AxiosInstance, AxiosResponse, AxiosError, AxiosRequestConfig } from 'axios';
import { EApiError } from './types';

export default abstract class AxiosClient {
  protected readonly instance: AxiosInstance;

  public constructor(baseURL: string) {
    this.instance = axios.create({
      baseURL,
    });

    this.initializeRequestInterceptor();
    this.initializeResponseInterceptor();
  }

  private initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(this.handleResponse, this.handleError);
  };

  private initializeRequestInterceptor = () => {
    this.instance.interceptors.request.use(this.handleRequest, this.handleError);
  };

  private handleResponse = ({ data }: AxiosResponse): AxiosResponse<any> => {
    if (typeof data === 'string') {
      return JSON.parse(data);
    }
    return data;
  };

  protected handleError = (error: AxiosError): Promise<EApiError> => {
    console.log(error);
    let friendlyCause = EApiError.UNKNOWN;
    if (error.response) {
      if (error.response.status >= 500) {
        friendlyCause = EApiError.SYSTEM_ERROR;
      }
      if (error.response.status >= 401) {
        friendlyCause = EApiError.UNAUTHORIZED;
      }
    } else if (error.request) {
      if (error.request.timeout) {
        friendlyCause = EApiError.TIME_OUT;
      }
    } else if (error.message) {
      if (error.message.indexOf('timeout') > -1) {
        friendlyCause = EApiError.TIME_OUT;
      } else if (error.message === EApiError.CANCELLED.toString()) {
        friendlyCause = EApiError.CANCELLED;
      } else if (error.message === EApiError.NO_INTERNET.toString()) {
        friendlyCause = EApiError.NO_INTERNET;
      } else if (error.message === 'Network Error') {
        friendlyCause = EApiError.NETWORK_ERROR;
      }
    }
    return Promise.reject(new Error(friendlyCause.toString()));
  };

  private handleRequest = (con: AxiosRequestConfig) => {
    return { ...con, 'Cache-Control': 'no-cache' };
  };
}
