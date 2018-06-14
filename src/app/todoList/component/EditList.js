import React from 'react'
import { Button } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import styled from 'styled-components'




export const EditItemList = (props) => (
<WarpperEdit>
    <Button type="button" onClick={() => props.handleClickShowModal(props.indexs)}>Edit</Button>
</WarpperEdit>)

EditItemList.propTypes = {
    handleClickShowModal: PropTypes.func,
    indexs: PropTypes.number
}
const WarpperEdit = styled.div`
  float: right; 
`