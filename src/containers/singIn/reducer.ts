import { UserActions, IUserState } from './types';

const initialState: IUserState = {
  user: null,
};

const userReducer = (state = initialState, action: UserActions): IUserState => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.user };
    case 'LOGOUT':
      return { ...initialState };
    default:
      return { ...state };
  }
};

export default userReducer;
