import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import PropTypes from 'prop-types'

export const AddListForm = ({
  handleClickAddTodo,
  onChangeName,
  nameValue,
}) => (
  <Form>
    <Form.Field>
      <label>Name</label>
      <input 
        onChange={ (event) => onChangeName(event.target.value) }  
        placeholder='Name' 
        value={ nameValue }
      />
    </Form.Field>
    <Button onClick={ handleClickAddTodo } type='button'>Add</Button>
  </Form>
)

AddListForm.propTypes = {
  handleClickAddTodo: PropTypes.func,
  onChangeName: PropTypes.func,
  nameValue: PropTypes.string,
}