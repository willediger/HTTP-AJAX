import React from "react";

import Friend from "./Friend";
import styled from "styled-components";
import { Link } from "react-router-dom";

const FriendListDiv = styled.div`
  padding-bottom: 20px;
`;

const FriendList = props =>
  props.friends ? (
    <FriendListDiv>
      {props.friends.map(e => (
        <Link to={`/friend-list/${e.id}`}>
          <Friend friend={e} key={e.id} />
        </Link>
      ))}
    </FriendListDiv>
  ) : (
    "Loading Friends"
  );

export default FriendList;
