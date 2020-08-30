import { Action } from 'redux';

// supported themes
// type makes sure no other theme type can be passed
export type SupportedThemes = 'light' | 'dark';

// An object to provide map of payloads according to action type
type IThemeActionMap = {
  SET_THEME: SupportedThemes;
  RESET_THEME: undefined;
};

// Type of actions supported by theme reducer and Action Generic
export type IThemeActions = keyof IThemeActionMap;

// provides payload type to and assigns to generic actions
// makes type generic for action's payload
type IThemePayload<K extends IThemeActions> = IThemeActionMap[K];

// Generic interface that extends redux Action
// provides generic interface for IThemeActions type of actions
// otherwise we had to extend each action separately
export interface IGenThemeActions<K extends IThemeActions> extends Action {
  type: K;
  payload: IThemePayload<K>;
}

// action creator Higher order function
// Takes IThemeActions actions as input
// returns IGenThemeActions type of actions/payload
export function actionCreator<T extends IThemeActions>(type: T) {
  return (payload: IThemePayload<T>): IGenThemeActions<T> => ({ type, payload });
}

// just a work around need to find proper way
export type IThemeReducer = IGenThemeActions<'RESET_THEME'> | IGenThemeActions<'SET_THEME'>;

// Final state to of Theme reducer will look like this
export interface IThemeState {
  current: SupportedThemes;
}
