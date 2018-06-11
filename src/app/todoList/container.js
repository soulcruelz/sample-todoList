import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { List, Segment } from 'semantic-ui-react'

import { addTodoList } from './action'

import { 
  AddListForm,
  NameListTable,
} from './component/'

class TodoList extends Component {

  static propTypes = {
    todoList: PropTypes.array,
    onAddTodoList: PropTypes.func,
  }

  state = {
    nameValue: ''
  }

  onChangeName = (text) => {
    this.setState({ nameValue: text })
  }

  handleClickAddTodo = () => {
    const { nameValue } = this.state
    const { onAddTodoList } = this.props
    onAddTodoList(nameValue)
    this.setState({ nameValue: '' })
  }

  render() {
    const {
      todoList
    } = this.props

    const {
      nameValue
    } = this.state
    
    return (
      <WrapperTodeList>
        <AddListForm 
          onChangeName={ this.onChangeName }
          handleClickAddTodo={ this.handleClickAddTodo }
          nameValue={ nameValue }
        />
        <NameListTable 
          nameList={ todoList }
        />
      </WrapperTodeList>
    )
  }
}

const WrapperTodeList = styled.div`
  padding: 50px;
`

const mapStateToProps = (state) => {
  console.log(state.store.todoList.datas)
  return {
    todoList: state.store.todoList.datas
  }
}

const mapDispatchToProps = (dispatch) => ({
  onAddTodoList: (value) => dispatch(addTodoList(value))
})

export const TodoListPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)