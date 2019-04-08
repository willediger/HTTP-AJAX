import React from "react";
import { NavLink } from "react-router-dom";

import styled from "styled-components";

const FriendsNav = styled.nav`
  display: flex;
  width: 250px;
  flex-direction: row;
  justify-content: space-between;
`;

function Nav() {
  return (
    <nav>
      <h1>Friends</h1>
      <FriendsNav>
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink to="/friend-list">Friend List</NavLink>
        <NavLink to="/friend-form">Add Friend</NavLink>
      </FriendsNav>
    </nav>
  );
}

export default Nav;
