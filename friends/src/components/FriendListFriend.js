import React from "react";

import styled from "styled-components";

const FriendDiv = styled.div`
  border: 1px solid black;
  width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;
  padding: 8px;
  padding-bottom: 5px;
  padding-top: 7px;
`;

const P = styled.p`
  margin: 0;
  padding: 0;
  padding-bottom: 3px;
`;

const FriendListFriend = props => {
  let friend = props.friend;
  if (!friend) {
    return <h2>Loading friend data...</h2>;
  }
  return (
    <FriendDiv>
      <P>Name: {friend.name}</P>
      <P>Age: {friend.age}</P>
      <P>
        Email: <a href={friend.email}>{friend.email}</a>
      </P>
    </FriendDiv>
  );
};

export default FriendListFriend;
