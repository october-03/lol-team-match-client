import { teamType } from './../types/team';
import { REQUEST_URL } from "./apiRequestUrl"
import axios from 'axios';

export const getTeamList = () => {
  let url = REQUEST_URL.GET_TEAM_LIST
  return new Promise<teamType[]>((resolve, reject) => {
    axios.get(url)
    .then((res)=>{
      resolve(res.data)
    })
    .catch((err)=>{
      reject(err)
    })
  })
}