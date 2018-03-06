
import axios from 'axios'
import {MEMBER_URL, SEARCH_URL} from '../helper/config'

export const getUpSubmitInfo = async function (mid) {
  const result = await axios.get(MEMBER_URL, {params: {mid: mid, pagesize: 100}})
  return result
}

export const fromNicknameQueryUid = async function (nickname) {
  const result = await axios.get(SEARCH_URL, {params: {search_type: 'bili_user', keyword: nickname}})
  return result
}
