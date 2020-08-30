import { combineReducers } from 'redux';
import { themeReducer } from 'themes';

const rootReducer = combineReducers({
  theme: themeReducer,
});

export default rootReducer;
