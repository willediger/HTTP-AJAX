import React from 'react';

import Friend from './Friend'
import styled from 'styled-components'

const FriendListDiv = styled.div`
  padding-bottom: 20px;
`

const FriendList = props => (
  <FriendListDiv>
    {props.friends.map(e => (
      <Friend friend={e} key={e.id} />
    ))}
  </FriendListDiv>
)

export default FriendList