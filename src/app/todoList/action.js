// bound action type
export const ADD_TODO_LIST = 'todoList/ADD_TODO_LIST'
export const DELETE_TODO_LIST = 'todoList/DELETE_TODO_LIST'
export const UPDATE_TODO_LIST = 'todoList/UPDATE_TODO_LIST'


export const addTodoList = (name) => {
  console.log('onClick Action', name)
  return {
    type: ADD_TODO_LIST,
    payload: {
      name
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