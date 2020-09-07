import AxiosClient from './axios-client';
import { IHttpClient, ApiUrl, ApiDirectory } from './types';

class HttpClient extends AxiosClient {
  apiRequest: IHttpClient = { apiSet: { isAuthenticationReq: false, from: 0, api: '' }, dto: {} };

  public constructor(ApiRequest: IHttpClient) {
    super(ApiUrl[ApiRequest.apiSet.from] + ApiDirectory);
    this.apiRequest = { ...ApiRequest };
  }

  public Execute = async <T>(): Promise<T> => {
    let instance = null;
    if (this.apiRequest.apiSet.isGet || false) {
      instance = this.instance.get<T>(this.apiRequest.apiSet.api, this.apiRequest.dto);
    } else {
      instance = this.instance.post<T>(this.apiRequest.apiSet.api, this.apiRequest.dto);
    }

    try {
      const response = await instance;
      if ('data' in response) return response.data;
      return response;
    } catch (error) {
      return error;
    }
  };

  public Retry = () => {
    // this should also be dispatch able
    this.Execute();
  };

  public Cancel = () => {
    console.log('let me cancel');
  };
}

export default HttpClient;
