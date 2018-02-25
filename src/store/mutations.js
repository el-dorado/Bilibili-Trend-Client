// mutation
// 用于存放同步的 action

export const changeUpState = (state, payload) => {
  state.Up = payload
}

export const changeLoadingState = (state, payload) => {
  state.Loading = payload
}

export default {
  changeUpState,
  changeLoadingState

}
