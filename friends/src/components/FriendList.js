import React from "react";

import FriendListFriend from "./FriendListFriend";
import styled from "styled-components";
import { Link } from "react-router-dom";

import "./Friend.css";

const FriendListDiv = styled.div`
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const FriendList = props =>
  props.friends ? (
    <FriendListDiv>
      {props.friends.map(e => (
        <Link to={`/friend-list/${e.id}`} className="friend-link">
          <FriendListFriend friend={e} key={e.id} className="friend" />
        </Link>
      ))}
    </FriendListDiv>
  ) : (
    "Loading Friends"
  );

export default FriendList;
