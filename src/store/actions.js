// action

// 获取 推挤新歌单
// const getPersonalizedAction = async function ({commit}) {
//   const {result} = await this.$axios.$get(personalizedUrl)
//   // 获取歌单信息，随机取 6 个
//   const data = await getRandomArray(result, 6)
//
//   commit('changeRecommendPlayListState', data)
// }

import {handleUpSubmit} from '../utiliy/handleUpInfo'

const getUpDetailAction = async function ({commit}, id) {
  commit('changeLoadingState', true)

  let up = await handleUpSubmit(id)

  commit('changeUpState', up)
  commit('changeLoadingState', false)
}

export default {
  getUpDetailAction
}
