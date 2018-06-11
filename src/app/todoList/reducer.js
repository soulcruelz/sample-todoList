import { ADD_TODO_LIST } from './action'

const defaultState = {
  datas: []
}

export default function reducer(state = defaultState, action) {
  switch(action.type) {
    case ADD_TODO_LIST:
      const { name } = action.payload
      const { datas } = state
      return {
        ...state,
        datas: datas.concat([name])
      }
    default:
      return state
  } 
  return state
}