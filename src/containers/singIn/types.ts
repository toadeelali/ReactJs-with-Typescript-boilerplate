import { Action } from 'redux';
import { ECallPriority } from 'services';

/* Login */

export enum ELoginType {
  NORMAL = 'NORMAL',
  FACEBOOK = 'FACEBOOK',
  GOOGLE = 'GOOGLE',
}

export interface ILoginDto {
  username: string;
  password: string;
  push_notification_type: string;
  push_notification_id: string;
}

export interface ILoginResult {
  current_role: string;
  name: string;
  points: number;
  profile_picture: string;
  session_id: string;
  user_id: number;
  username: string;
}

export interface ILogin extends Action<'LOGIN'> {
  user: ILoginResult;
}

export const LoginApi = {
  api: 'login',
  isAuthenticationReq: false,
  setSpinner: true,
  setCancelBtn: true,
  from: 0,
  priority: ECallPriority,
  action: 'LOGIN',
};

/* Logout */

export interface ILogoutDto {}

export interface ILogout extends Action<'LOGOUT'> {
  user: null;
}

export const LogoutApi = {
  api: 'logout',
  isAuthenticationReq: true,
  setSpinner: true,
  setCancelBtn: true,
  from: 0,
  priority: ECallPriority.NORMAL,
};

/* Forgot password */

export const ForgotPassword = {
  api: 'Account/ForgotPasswordUIOne',
  isAuthenticationReq: false,
  setSpinner: true,
  setCancelBtn: true,
  from: 1,
  priority: 1,
};

// export const SignUp = {
//   api: 'signup',
//   isAuthenticationReq: false,
//   setSpinner: true,
//   setCancelBtn: true,
//   from: 0,
//   priority: 1,
// };

// just a work around need to find proper way
export type UserActions = ILogin | ILogout;

// Final state to of Theme reducer will look like this
export interface IUserState {
  user: ILoginResult | null;
}
