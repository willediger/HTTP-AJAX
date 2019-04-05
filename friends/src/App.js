import React, { Component } from "react";
import FriendList from "./components/FriendList";
import Friend from "./components/Friend";
import FriendForm from "./components/FriendForm";
import Nav from "./components/Nav";
import Home from "./components/Home";
import { Route } from "react-router-dom";
import styled from "styled-components";

import axios from "axios";

const FriendDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Main = styled.main`
  width: 40%;
  margin: 0 auto;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  updateFriends = newFriends => {
    this.setState({ friends: newFriends });
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => this.setState({ friends: response.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <Route path="/" component={Nav} />
        <Route exact path="/" component={Home} />
        <Main>
          <Route
            exact
            path="/friend-list"
            render={props => (
              <FriendList {...props} friends={this.state.friends} />
            )}
          />
          <Route
            path="/friend-list/:id"
            render={props => (
              <FriendDiv>
                <Friend
                  {...props}
                  friends={this.state.friends}
                  updateFriends={this.updateFriends}
                />
              </FriendDiv>
            )}
          />
          <Route
            path="/friend-form"
            render={props => (
              <FriendForm {...props} updateFriends={this.updateFriends} />
            )}
          />
        </Main>
      </div>
    );
  }
}

export default App;
