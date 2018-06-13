import { todoListReducer } from './app/todoList'
import { combineReducers } from 'redux'

export default combineReducers({
  todoList: todoListReducer
})