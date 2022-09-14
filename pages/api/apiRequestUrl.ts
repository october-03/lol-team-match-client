export const BASE_URL = {
  TEAM_MATCH_API: 'http://192.168.100.55:3001'
}

export const REQUEST_URL: requestUrlType = {
  GET_TEAM_LIST: `${BASE_URL.TEAM_MATCH_API}/`,
  GET_TEAM_DETAIL: `${BASE_URL.TEAM_MATCH_API}/team/{uniqueCode}`,
  ENTER_TEAM: `${BASE_URL.TEAM_MATCH_API}/add-member/{uniqueCode}`,
  WITHDRAW_TEAM: `${BASE_URL.TEAM_MATCH_API}/del-member/{uniqueCode}`,
  CREATE_TEAM: `${BASE_URL.TEAM_MATCH_API}/create-team`,
  DELETE_TEAM: `${BASE_URL.TEAM_MATCH_API}/del-team/{code}`,
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
