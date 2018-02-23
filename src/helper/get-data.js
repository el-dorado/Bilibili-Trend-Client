
import axios from 'axios'
import {MEMBER_URL, SEARCH_URL} from './config'

export const getUpSubmitInfo = async function (id) {
  const result = await axios.get(MEMBER_URL, {params: {mid: id, pagesize: 100}})
  return result
}

export const fromNicknameQueryUid = async function (nickname) {
  const result = await axios.get(SEARCH_URL, {params: {search_type: 'bili_user', keyword: nickname}})
  return result
}