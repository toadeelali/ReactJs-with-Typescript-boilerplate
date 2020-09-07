const SITE_KEY = 'CMS_';

export enum EStorage {
  USER = 'USER',
}

const Set = (key: EStorage, value: string): void => {
  localStorage.setItem(SITE_KEY + key, value);
};

const Get = (key: EStorage, defaultVal: any): any => {
  const tempVal = localStorage.getItem(SITE_KEY + key);
  if (typeof tempVal === 'undefined' && typeof defaultVal !== 'undefined') return defaultVal;
  return tempVal;
};

const Delete = (key: EStorage, withoutPrefix = false) => {
  localStorage.removeItem(SITE_KEY + key);
};

const LocalStorage = {
  Set,
  Get,
  Delete,
};

export default LocalStorage;
