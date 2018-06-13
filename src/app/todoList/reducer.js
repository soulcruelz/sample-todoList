import { ADD_TODO_LIST, DELETE_TODO_LIST, UPDATE_TODO_LIST } from './action'

const defaultState = {
  datas: []
}

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_TODO_LIST: {
      const { name } = action.payload
      const { datas } = state
      console.log(datas)
      return {
        ...state,
        datas: datas.concat([name])
      }
    }
    case DELETE_TODO_LIST: {
      console.log("delete")
      console.log(state)
      const { indexDelete } = action.payload
      const NewState = state.datas.filter((value, index) => index !== indexDelete);
      return {
        ...state,
        datas: NewState
      }
    }
    case UPDATE_TODO_LIST: {
      const { editItem, index } = action.payload
      console.log('edittest')
      console.log(editItem)
      console.log(index)
      const newState = state
      newState.datas[index] = editItem
      console.log(newState)
      return newState
    }
  


    default:
      return state
  }
  return state
}