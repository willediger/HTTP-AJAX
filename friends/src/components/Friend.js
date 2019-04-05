import React from "react";

import styled from "styled-components";
import axios from "axios";

const FriendContainerDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const FriendDiv = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 100%;
  margin: 0;
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

const CloseSpan = styled.span`
  margin-top: 20px;
  margin-right: 20px;
`;

const Friend = props => {
  const deleteFriend = event => {
    console.log("Friend is being deleted");
    axios
      .delete(`http://localhost:5000/friends/${friend.id}`)
      .then(response => {
        props.updateFriends(response.data);
        props.history.push("/friend-list");
      })
      .catch(err => console.log(err));
  };

  let friend = null;
  if (props.friends) {
    friend = props.friends.find(
      friend => `${friend.id}` === props.match.params.id
    );
  } else {
    friend = props.friend;
  }

  if (!friend) {
    return <h2>Loading friend data...</h2>;
  }
  return (
    <FriendContainerDiv>
      <span onClick={deleteFriend}>x</span>
      <FriendDiv>
        <P>Name: {friend.name}</P>
        <P>Age: {friend.age}</P>
        <P>
          Email: <a href={friend.email}>{friend.email}</a>
        </P>
      </FriendDiv>
    </FriendContainerDiv>
  );
};

export default Friend;

// example friend
// {
//   id: 1,
//   name: 'Ben',
//   age: 30,
//   email: 'ben@lambdaschool.com',
// }
