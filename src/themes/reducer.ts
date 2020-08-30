import { ThemeActions, IThemeState } from './types';

const initialState: IThemeState = {
  current: 'light',
};

const themeReducer = (state = initialState, action: ThemeActions): IThemeState => {
  switch (action.type) {
    case 'SET_THEME':
      return { ...state, current: action.payload };
    case 'RESET_THEME':
      return { ...initialState };
    default:
      return { ...state };
  }
};

export default themeReducer;
