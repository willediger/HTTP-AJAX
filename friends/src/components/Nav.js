import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <h1>Friends</h1>
      <div>
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink to="/friend-list">Friend List</NavLink>
        <NavLink to="/friend-form">Add Friend</NavLink>
      </div>
    </nav>
  );
}

export default Nav;
