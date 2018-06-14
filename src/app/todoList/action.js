// bound action type
export const ADD_TODO_LIST = 'todoList/ADD_TODO_LIST'
export const DELETE_TODO_LIST = 'todoList/DELETE_TODO_LIST'
export const UPDATE_TODO_LIST = 'todoList/UPDATE_TODO_LIST'


export const addTodoList = (value) => {
  console.log('onClick Action', value)
  return {
    type: ADD_TODO_LIST,
    payload: {
      value
    }
  }
}

export const deleteTodoList = (index) => {
  console.log('onClick Action', index)
  return {
    type: DELETE_TODO_LIST,
    payload: {
      indexDelete: index
    }
  }
}

export const editTodoList = (editItem, index)=> {
  console.log('onClick Action', editItem, index)
  return {
    type: UPDATE_TODO_LIST,
    payload: {
      editItem,
      index
    }
  }
}