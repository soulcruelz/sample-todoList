import React from 'react'
import { List, Segment, Button } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { DeleteItemList } from './DeleteList'
import { EditItemList } from './EditList'



export const NameListTable = ({
  nameList,
  handleClickEditTodo,
  handleClickDeleteTodo,
  handleClickShowModal,
  visible
}) => (
    <SegmentWrapper inverted>
      <List divided inverted relaxed>
        {console.log("namelist")}
        {console.log(nameList)}
        {
          !!nameList.length ?
            nameList.map((name, index) => (
              <List.Item key={index}>
                <WarpperContent>
                  <List.Content>
                    <List.Header>{index + 1}. {name}</List.Header>
                  </List.Content>
                </WarpperContent>
                <WarpperDeleteAndEdit>
                  <DeleteItemList indexs = {index}   handleClickDeleteTodo={handleClickDeleteTodo}/>
                  <EditItemList indexs = {index} visible={visible} handleClickShowModal={handleClickShowModal}/>
                </WarpperDeleteAndEdit>
              </List.Item>
            ))
            :
            <NotFoundData>Data not found.</NotFoundData>
        }
      </List>
    </SegmentWrapper>
  )

NameListTable.propTypes = {
  nameList: PropTypes.array,
  handleClickEditTodo: PropTypes.func,
  handleClickDeleteTodo: PropTypes.func
}

const SegmentWrapper = styled(Segment)`
`

const NotFoundData = styled.div`
  text-align: center;
`
const WarpperDeleteAndEdit = styled.div`
  float: right; 
`
const WarpperContent = styled.div`
  float: left;
  padding-top:10px;
`

