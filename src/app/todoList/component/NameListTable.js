import React from 'react'
import { List, Segment } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const NameListTable = ({
  nameList
}) => (
  <Segment inverted>
    <List divided inverted relaxed>
        {
          !!nameList.length ? 
            nameList.map((name, index) => (
              <List.Item>
                <List.Content key={ index }>
                  <List.Header>No { index + 1}. { name }</List.Header>
                </List.Content>
              </List.Item>
            ))
            :
            <NotFoundData>Data not found.</NotFoundData>
        }
    </List>
  </Segment>
)

NameListTable.propTypes = {
  nameList: PropTypes.array,
}

const NotFoundData = styled.div`
  text-align: center;
`
