// mutation
// 用于存放同步的 action

export const changeBtnState = (state, payload) => {
  state.BtnState = payload
}

export const changeUpMidState = (state, payload) => {
  state.UpMid = payload
}

export const changeUpState = (state, payload) => {
  state.Up = payload
}

export const changeLoadingState = (state, payload) => {
  state.Loading = payload
}

export const changeSearchUserRecState = (state, payload) => {
  state.SearchUserRec = payload
}
export const changeRecUpState = (state, payload) => {
  state.RecUp = payload
}
export const changeRecUpMIDState = (state, payload) => {
  state.RecUpMID = payload
}
export const changeRankListState = (state, payload) => {
  state.RankList = payload
}

export default {
  changeBtnState,
  changeUpMidState,
  changeUpState,
  changeRecUpState,
  changeRecUpMIDState,
  changeLoadingState,
  changeRankListState,
  changeSearchUserRecState

}
