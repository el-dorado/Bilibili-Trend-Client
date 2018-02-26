/* eslint-disable no-unused-expressions */
import axios from 'axios'

import {Video} from '@/model/Video'
import {Up} from '@/model/Up'
import {MEMBER_URL, SEARCH_URSE_URL} from '../helper/config'
import {getUpSubmitInfo} from './GetData'

/**
 * 从 Vlist 转换到 Submit(Video<array>)
 */
export async function fromVlistToSubmit (vlist) {
  let allVlist = []
  for (let v of vlist) {
    let vl = new Video()
    vl.init(v)
    allVlist.push(vl)
  }
  return allVlist
}

/**
 * 获取所有 vlist
 */
export async function getAllSubmit (id, page) {
  const result = await axios.get(MEMBER_URL, {params: {mid: id, page: page, pagesize: 100}})
  return result
}

/**
 * 获取总播放次数
 * @param list
 * @return {number}
 */
export function getAllPlayCount (list) {
  let count = 0

  for (let l of list) {
    count += l.play
  }

  return count
}

/**
 * 处理 Up 投稿信息
 * @param id
 * @return { Up }
 */
export async function handleUpSubmit (id) {
  const up = new Up()
  let mark = false
  let pages = 0
  await getUpSubmitInfo(id)
    .then(({data}) => {
      pages = data.data.pages
      pages === 0 ? mark = true : ''
    })
  if (mark) {
    return '该 Up 暂未投稿'
  }
  let allVlist = []
  for (let i = 1; i <= pages; i++) {
    await getAllSubmit(id, i)
      .then(({data}) => {
        for (let v of data.data.vlist) {
          allVlist.push(v)
        }
      })
  }
  up.rawAllList = await fromVlistToSubmit(allVlist)
  // up.playCount = getAllPlayCount(allVlist)
  up.name = allVlist[0].author

  return up
}

export async function searchUserRec (name) {
  const {data} = await axios.get(SEARCH_URSE_URL, {params: {keyword: name}})
  return data
}
