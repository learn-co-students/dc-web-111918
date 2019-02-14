import {INCREMENT, DECREMENT} from './actionTypes'

const initialState = {
  count: 0
}

const reducer = (currentState=initialState, action) => {
  // console.log("oldState:", currentState, "action:", action)
  switch(action.type){
    case INCREMENT:
      return {count: currentState.count + action.num}
    case DECREMENT:
      return {count: currentState.count - action.num}
    default:
      return currentState
  }
}

export default reducer
