import { ThunkAction } from 'redux-thunk';
import { ActionCreator, Dispatch } from 'redux';

import { HttpClient } from 'services';
import { LoginApi, ILogin, ILoginDto, ILoginResult, LogoutApi, ILogout, ILogoutDto } from './types';

// The type of the last action to be dispatched - will always be promise<T> for async actions
// The type for the data within the last action
// The type of the parameter for the nested function
// The type of the last action to be dispatched
export const Login: ActionCreator<ThunkAction<Promise<ILogin>, ILoginResult, ILoginDto, ILogin>> = (
  username: string,
  password: string
) => {
  const body: ILoginDto = {
    username,
    password,
    push_notification_type: '',
    push_notification_id: '',
  };

  return async (dispatch: Dispatch) => {
    const httpClient = new HttpClient({ apiSet: LoginApi, dto: body });
    const user = await httpClient.Execute<ILoginResult>();

    const LoginAction: ILogin = {
      type: 'LOGIN',
      user,
    };
    return dispatch(LoginAction);
  };
};

export const Logout: ActionCreator<ThunkAction<Promise<ILogout>, null, ILogoutDto, ILogout>> = () => {
  const body: ILogoutDto = {};

  return async (dispatch: Dispatch) => {
    const httpClient = new HttpClient({ apiSet: LogoutApi, dto: body });
    await httpClient.Execute<null>();

    const LogoutAction: ILogout = {
      type: 'LOGOUT',
      user: null,
    };

    return dispatch(LogoutAction);
  };
};
