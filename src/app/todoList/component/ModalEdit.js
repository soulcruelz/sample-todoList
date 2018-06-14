import React from 'react'
import PropTypes from 'prop-types'
import { Modal } from 'semantic-ui-react'
import styled from 'styled-components'


export const ModalEditList = (props) => (
    <div>
        <Modal
            open={props.defaultOpen}
            header='EditList'
            content={<WarpperEdit  value={props.editItem} onChange={(event) => props.onChangeEditName(event.target.value)}></WarpperEdit>}
            actions={[{ key: 'cancle', content: 'cancle', positive: false }, { key: 'save', content: 'save', positive: true }]}
            onActionClick={props.handleClickEditTodo}
        />
    </div>
)

const WarpperEdit = styled.input`
    margin: 20px 30px 20px 30px;
    width: 500px;
    height: 30px;
    font-size: 18px;
`