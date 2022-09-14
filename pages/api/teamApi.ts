import { teamType } from './../types/team';
import { changeUrlParams, REQUEST_URL } from "./apiRequestUrl"
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

export const getTeamDetail = (uniqueCode: string) => {
  let url = REQUEST_URL.GET_TEAM_DETAIL
  return new Promise<teamType>((resolve, reject) => {
    axios.get(url)
    .then((res)=>{
      resolve(res.data)
    })
    .catch((err)=>{
      reject(err)
    })
  })
}

export const enterTeam = (uniqueCode: string, name: string, position: string, password: string) => {
  let url = changeUrlParams('ENTER_TEAM', [{key: 'uniqueCode', value: uniqueCode}])
  return new Promise<teamType>((resolve, reject) => {
    axios.patch(url, {
      name: name,
      position: position,
      password: password
    })
    .then((res)=>{
      resolve(res.data)
    })
    .catch((err)=>{
      reject(err)
    })
  })
}

export const withdrawTeam = (uniqueCode: string, name: string, position: string, password: string) => {
  let url = changeUrlParams('WITHDRAW_TEAM', [{key: 'uniqueCode', value: uniqueCode}])
  return new Promise<teamType>((resolve, reject) => {
    axios.patch(url, {
      name: name,
      position: position,
      password: password
    })
    .then((res)=>{
      resolve(res.data)
    })
    .catch((err)=>{
      reject(err)
    })
  })
}

export const createTeam = (name: string, code: string, type: string) => {
  let url = REQUEST_URL.CREATE_TEAM
  return new Promise<teamType>((resolve, reject) => {
    axios.post(url, {
      name: name,
      code: code,
      type: type
    })
    .then((res)=>{
      resolve(res.data)
    })
    .catch((err)=>{
      reject(err)
    })
  })
}

export const deleteTeam = (code: string) => {
  let url = changeUrlParams('DELETE_TEAM', [{key: 'code', value: code}])
  return new Promise<teamType>((resolve, reject) => {
    axios.delete(url)
    .then((res)=>{
      resolve(res.data)
    })
    .catch((err)=>{
      reject(err)
    })
  })
}