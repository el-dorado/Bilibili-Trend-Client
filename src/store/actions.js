// action
import axios from 'axios'
import * as _ from 'lodash'
// 获取 推挤新歌单
// const getPersonalizedAction = async function ({commit}) {
//   const {result} = await this.$axios.$get(personalizedUrl)
//   // 获取歌单信息，随机取 6 个
//   const data = await getRandomArray(result, 6)
//
//   commit('changeRecommendPlayListState', data)
// }

import {searchUserRec, handleUpSubmit} from '../utiliy/handleUpInfo'
import {MAIN_SITE_RANK_URL} from '../helper/config'

const getUpDetailAction = async function ({commit}, id) {
  commit('changeLoadingState', true)

  let up = await handleUpSubmit(id)

  commit('changeUpState', up)
  commit('changeLoadingState', false)
}

const getSearchUserRecAction = async function (ctx, name) {
  ctx.commit('changeLoadingState', true)
  const data = await searchUserRec(name)
  let names = []
  let mid = []
  data.result.map(item => {
    names.push(item.uname)
    mid.push(item.mid)
  })
  names = _.uniq(names)
  ctx.commit('changeRecUpState', names)
  ctx.commit('changeRecUpMIDState', mid)
}

const getMainSiteRankAction = async function (ctx) {
  ctx.commit('changeLoadingState', true)
  const {data} = await axios.get(MAIN_SITE_RANK_URL)
  let name = []
  let mid = []
  data.rank.list.map(item => {
    name.push(item.author)
    mid.push(item.mid)
  })
  name = _.uniq(name)
  ctx.commit('changeRecUpState', name)
  ctx.commit('changeRecUpMIDState', mid)
}

export default {
  getUpDetailAction,
  getSearchUserRecAction,
  getMainSiteRankAction
}
