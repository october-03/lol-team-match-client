export const BASE_URL = {
  TEAM_MATCH_API: 'http://192.168.100.55:3001'
}

export const REQUEST_URL: requestUrlType = {
  GET_TEAM_LIST: `${BASE_URL.TEAM_MATCH_API}/`
};

export const changeUrlParams = (url: string, paramList: paramListType[]) => {
  url = REQUEST_URL[url];
  paramList.forEach((param) => {
    url = url.replace(`{${param.key}}`, String(param.value));
  });

  return url;
};

type paramListType = {
  key: string | number;
  value: string | number;
};

type requestUrlType = {
  [key: string]: string;
};
