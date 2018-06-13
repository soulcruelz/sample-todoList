import React from 'react'
import { Button } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const DeleteItemList = (props) => (<WarpperDelete>
    {console.log(props)}
    <Button onClick={() => props.handleClickDeleteTodo(props.indexs)} type='button'>Delete</Button>
</WarpperDelete>)

DeleteItemList.propTypes = {
    handleClickDeleteTodo: PropTypes.func
}
const WarpperDelete = styled.div`
  float: right; 
  }
`