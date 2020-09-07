export const ApiUrl = ['https://test1.com/', 'https://test2.com/'];
export const ApiDirectory = 'api/';
export const ApiTimeout = 61000 * 0.00000002;

export enum EApiError {
  UNKNOWN,
  NO_INTERNET,
  SYSTEM_ERROR,
  TIME_OUT,
  CANCELLED,
  UNAUTHORIZED,
  NETWORK_ERROR,
}

export enum ECallPriority {
  NORMAL,
  LOW,
}

export interface IHttpClient {
  apiSet: {
    isGet?: boolean;
    isAuthenticationReq: boolean;
    api: string;
    from: number;
    setSpinner?: boolean;
    setCancelBtn?: boolean;
  };
  dto: any;
  publicHeaders?: { session_id: string; user_id: number };
}
