import md5Base64 from 'md5-base64';

export const IsEmptyObject = (o) => {
  const keys = Object.keys(o);
  return keys.length === 0;
};

export const GetObjFromArr = (arr, key, val) => {
  return arr.find((item) => item[key] === val);
};

export const GetObjFromObj = (obj, key, value) => {
  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    if (obj[keys[i]][key] === value) return obj[keys[i]];
  }
  return false;
};

export const RemoveDuplicates = (myArr, prop) => {
  return myArr.filter((obj, pos, arr) => {
    return arr.map((mapObj) => mapObj[prop]).indexOf(obj[prop]) === pos;
  });
};

export const CreateMarkup = (x) => {
  return { __html: x };
};

export const OnInputChange = ({ name, value }, state, update) => {
  const temp = {
    ...state,
  };
  temp[name] = value;
  update({ ...temp });
};

export const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@\\"]+(\.[^<>()[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

export const PasswordFormation = (p) => {
  return md5Base64(p).slice(0, -2);
};

export const encodeDecode = (type, value) => {
  let changedValue = '';
  if (value !== 'undefined') {
    if (type === 'enc') {
      changedValue = window.btoa(value);
    } else if (type === 'dec') {
      changedValue = window.atob(value);
    }
  }
  return changedValue;
};
export const SortAlphaNum = (arr, key) => {
  return arr.sort((a, b) => {
    const reA = /[^a-zA-Z]/g;
    const reN = /[^0-9]/g;
    const aA = a[key].replace(reA, '');
    const bA = b[key].replace(reA, '');
    if (aA === bA) {
      const aN = parseInt(a[key].replace(reN, ''), 10);
      const bN = parseInt(b[key].replace(reN, ''), 10);
      return aN === bN ? 0 : aN > bN ? 1 : -1;
    }
    return aA > bA ? 1 : -1;
  });
};

export const RemoveValueFromArray = (arr, val) => {
  const index = arr.indexOf(val);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
};

export const GetRandomInt = (min, max) => {
  const nMin = Math.ceil(min);
  const nMax = Math.floor(max);

  return Math.floor(Math.random() * (nMax - nMin + 1)) + nMin;
};

export const UsernameResolver = (name, username) => {
  let nName = '';
  if (name) {
    nName = name;
  } else if (username) {
    const [first] = username.split('@');
    nName = first;
  }
  return nName;
};

export const ImageResolver = (p) => {
  return p.toLowerCase().split(' ').join('-').replace('-json', '');
};

export const SortOnDate = (arr, prop) => {
  return arr.sort((a, b) => {
    return new Date(b[prop]) - new Date(a[prop]);
  });
};

export const FilterOnArrayObjProp = (arr, prop, value) => {
  return arr.filter((e) => {
    return e[prop] === value;
  });
};

export const IsSafari = () => {
  if (navigator.userAgent.search('Safari') >= 0 && navigator.userAgent.search('Chrome') < 0) {
    return true;
  }
  return false;
};

export const parseURL = (str) => {
  const query_string = {};
  const query = str.toLocaleLowerCase();
  const vars = query.split('&');
  for (let i = 0; i < vars.length; i++) {
    const pair = vars[i].split('=');
    // If first entry with this name
    if (typeof query_string[pair[0]] === 'undefined') {
      query_string[pair[0]] = decodeURIComponent(pair[1]);
      // If second entry with this name
    } else if (typeof query_string[pair[0]] === 'string') {
      const arr = [query_string[pair[0]], decodeURIComponent(pair[1])];
      query_string[pair[0]] = arr;
      // If third or later entry with this name
    } else {
      query_string[pair[0]].push(decodeURIComponent(pair[1]));
    }
  }
  return query_string;
};

export const parseSearchURL = (str) => {
  const query_string = {};
  const query = str || window.location.href;
  const vars = query.split('&');
  for (let i = 0; i < vars.length; i++) {
    const pair = vars[i].split('=');
    // If first entry with this name
    if (typeof query_string[`url${i}`] === 'undefined') {
      query_string[`url${i}`] = decodeURIComponent(pair[1]);
      // If second entry with this name
    } else if (typeof query_string[`url${i}`] === 'string') {
      const arr = [query_string[`url${i}`], decodeURIComponent(pair[1])];
      query_string[`url${i}`] = arr;
      // If third or later entry with this name
    } else {
      query_string[`url${i}`].push(decodeURIComponent(pair[1]));
    }
  }
  return query_string;
};

export const ShareSocialMedia = (e, ShareLinkUrl, type) => {
  e.preventDefault();
  let SocialWindow = '';
  if (type === 'linkedin') {
    SocialWindow = window.open(
      `http://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(ShareLinkUrl)}`,
      'Linkdin invite friends',
      'left=0,top=0,width=650,height=420,personalbar=0,toolbar=0,scrollbars=0,resizable=0'
    );
  } else if (type === 'twitter') {
    SocialWindow = window.open(
      `https://twitter.com/share?url=${encodeURIComponent(ShareLinkUrl)}`,
      'twitter invite friends',
      'height=350,width=600'
    );
  } else if (type === 'facebook') {
    SocialWindow = window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`${ShareLinkUrl}`)}`,
      'Facebook invite friends',
      'height=350,width=600'
    );
  }

  if (SocialWindow.focus) {
    SocialWindow.focus();
  }
  return false;
};
