import React from 'react';

import styled from 'styled-components'

const FriendDiv = styled.div`
  border: 1px solid black;
  width: 40%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;
  padding: 8px;
  padding-bottom: 5px;
  padding-top: 7px;
`

const P = styled.p`
  margin: 0;
  padding: 0;
  padding-bottom: 3px;
`

const Friend = props => {
  return (
    <FriendDiv>
      <P class="name">Name: {props.friend.name}</P>
      <P class="age">Age: {props.friend.age}</P>
      <P class="email">Email: <a href={props.friend.email}>{props.friend.email}</a></P>
    </FriendDiv>
  )
}

export default Friend

// example friend
// {
//   id: 1,
//   name: 'Ben',
//   age: 30,
//   email: 'ben@lambdaschool.com',
// }