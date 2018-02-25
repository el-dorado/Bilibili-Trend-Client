import {fromNicknameQueryUid} from './GetData'

/**
 * 处理用户搜索结果
 * @param list
 * @return {number}
 */
export async function handleUserSearch (nickname) {
  let {data} = await fromNicknameQueryUid(nickname)

  return data.result[0].mid
}
