// eslint-disable-next-line import/no-extraneous-dependencies
import { createBrowserHistory } from 'history';
import { TRouts, Routs, IRouts } from './types';

export const history = createBrowserHistory();

export const goToURL = (url: TRouts): void => {
  history.push(url);
};

export const goToRout = (rout: TRouts): void => {
  history.push(Routs[rout].link);
};

export const findRoutByURL = (url: string): IRouts => {
  const oKey = (Object.keys(Routs) as Array<TRouts>).find((key) => Routs[key].link === url) as TRouts;
  return Routs[oKey];
};
