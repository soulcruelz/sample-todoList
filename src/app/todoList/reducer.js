import { ADD_TODO_LIST, DELETE_TODO_LIST, UPDATE_TODO_LIST } from './action'

const defaultState = {
  datas: []
}

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_TODO_LIST: {
      const { value } = action.payload
      const { datas } = state
      console.log(datas)
      return {
        ...state,
        datas: datas.concat([value])
      }
    }
    case DELETE_TODO_LIST: {
      const { indexDelete } = action.payload
      const newState = state.datas.filter((value, index) => index !== indexDelete);
      return {
        ...state,
        datas: newState
      }
    }
    case UPDATE_TODO_LIST: {
      const { editItem, index } = action.payload
      const newState = state
      newState.datas[index] = editItem
      return newState
    }
    default:
      return state
  }
  return state
}