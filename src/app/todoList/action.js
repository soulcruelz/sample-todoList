// bound action type
export const ADD_TODO_LIST = 'todoList/ADD_TODO_LIST'

export const addTodoList = (name) => {
  console.log('onClick Action', name)
  return {
    type: ADD_TODO_LIST,
    payload: {
      name
    }
  }
}