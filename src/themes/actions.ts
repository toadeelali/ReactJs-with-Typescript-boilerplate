// import { ActionCreator } from 'redux';
import { SupportedThemes, actionCreator } from './types';

const dark = { key: 'dark' };
const light = { key: 'light' };

const set = actionCreator('SET_THEME');
const reset = actionCreator('RESET_THEME');

// old function yet to remove
const get = (t: SupportedThemes = 'light'): unknown => (t === 'light' ? light : dark);

const themeActions = {
  set,
  reset,
  get,
};

export default themeActions;
