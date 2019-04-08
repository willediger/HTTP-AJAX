import React from "react";

import styled from "styled-components";
import axios from "axios";

import pencil from "./pencil.png";

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

const DeleteSpan = styled.span`
  cursor: pointer;
  border: 1px solid black;
  padding: 5px 10px;
`;

const FriendButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-right: 20px;
`;

const EditButton = styled.img`
  width: 20px;
  margin-top: 20px;
  cursor: pointer;
  border: 1px solid black;
  padding: 5px 10px;
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

  const updateFriend = event => {
    console.log("Friend is being deleted");
    props.history.push(`/friend-list/${friend.id}/update`);
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
      <FriendButtons>
        <DeleteSpan onClick={deleteFriend}>X</DeleteSpan>
        <EditButton onClick={updateFriend} src={pencil} alt="edit" />
      </FriendButtons>

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
