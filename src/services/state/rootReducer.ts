import { combineReducers } from 'redux';
import themeReducer from 'themes/reducer';
import userReducer from 'containers/singIn/reducer';

const rootReducer = combineReducers({
  theme: themeReducer,
  user: userReducer,
});

export default rootReducer;
