import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'

import {
  addTodoList,
  deleteTodoList,
  editTodoList
} from './action'

import {
  AddListForm,
  NameListTable,
  ModalEditList
} from './component/'

class TodoList extends Component {

  static propTypes = {
    todoList: PropTypes.array,
    onAddTodoList: PropTypes.func,
    onDeleteTodoList: PropTypes.func,
    onEditTodoList: PropTypes.func
  }

  state = {
    nameValue: '',
    visible: false,
    editItem: ''
  }

  onChangeName = (text) => {
    this.setState({
      nameValue: text
    })
  }
  onChangeEditName = (text) => {
    this.setState({
      editItem: text
    })
  }

  handleClickAddTodo = () => {
    const { nameValue } = this.state
    const { onAddTodoList } = this.props
    if (nameValue) {
      onAddTodoList(nameValue)
      this.setState({ nameValue: '' })
    }
  }
  handleClickDeleteTodo = (index) => {
    const { onDeleteTodoList } = this.props
    onDeleteTodoList(index)
  }

  handleClickShowModal = (index) => {
    const { todoList } = this.props
    this.setState({
      visible: true,
      editItem: todoList[index],
      index
    })
  }

  handleClickEditTodo = () => {
    const { onEditTodoList } = this.props
    onEditTodoList(this.state.editItem, this.state.index)
    this.setState({
      visible: false,
    })
  }
  
  render() {
    const {
      todoList
    } = this.props

    const {
      nameValue, visible, editItem
    } = this.state


    return (
      <WrapperTodeList>
        <AddListForm
          onChangeName={this.onChangeName}
          handleClickAddTodo={this.handleClickAddTodo}
          nameValue={nameValue}
        />
        <NameListTable
          nameList={todoList}
          handleClickDeleteTodo={this.handleClickDeleteTodo}
          handleClickShowModal={this.handleClickShowModal}
        />
        {
          <ModalEditList
            handleClickEditTodo={this.handleClickEditTodo}
            defaultOpen={visible}
            editItem={editItem}
            onChangeEditName={this.onChangeEditName}
          />
        }
      </WrapperTodeList>
    )
  }
}

const WrapperTodeList = styled.div`
  padding: 50px;
  width: 800px;
  margin: 0 auto;
`

// change state redux to props react send to dump component (currency state )
const mapStateToProps = (state) => {
  console.log(state)
  console.log(state.store.todoList.datas)
  return {
    todoList: state.store.todoList.datas
  }
}

// change dispatch (send action to reducers) to props react send to dump component (wait use)
const mapDispatchToProps = (dispatch) => ({
  onAddTodoList: (value) => dispatch(addTodoList(value)),
  onDeleteTodoList: (index) => dispatch(deleteTodoList(index)),
  onEditTodoList: (editItem, index) => dispatch(editTodoList(editItem, index))
})

export const TodoListPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)