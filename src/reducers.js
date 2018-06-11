import { todoListReducer } from './component/todoList'
import { combineReducers } from 'redux'

export default combineReducers({
  todoList: todoListReducer
})