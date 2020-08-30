import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

export const pageSwitch = (url) => {
  history.push(`/${url}`);
};
