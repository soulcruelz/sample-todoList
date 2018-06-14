import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const AddListForm = ({
  handleClickAddTodo,
  onChangeName,
  nameValue,
}) => (
    <Form>
      <Form.Field>
        <label>Name</label>
        <WrapperHead>
          <WrapperInput>
            <input
              onChange={(event) => onChangeName(event.target.value)}
              placeholder='Name'
              value={nameValue}
            />
          </WrapperInput>
          <WrapperAdd>
            <Button onClick={handleClickAddTodo} type='button'>Add</Button>
          </WrapperAdd>
        </WrapperHead>
      </Form.Field>
    </Form>
  )

AddListForm.propTypes = {
  handleClickAddTodo: PropTypes.func,
  onChangeName: PropTypes.func,
  nameValue: PropTypes.string,
}

const WrapperHead = styled.div`
  margin-bottom: 50px;
`
const WrapperInput = styled.div`
  float: left;
  width: 620px;
`
const WrapperAdd = styled.div`
  float: right;
`