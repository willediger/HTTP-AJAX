import React, { Component } from "react";
import FriendList from "./components/FriendList";
import Friend from "./components/Friend";
import FriendForm from "./components/FriendForm";
import Nav from "./components/Nav";
import Home from "./components/Home";
import { Route } from "react-router-dom";

import axios from "axios";

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
    console.log(this.state);
    return (
      <div className="App">
        <Route path="/" component={Nav} />
        <Route exact path="/" component={Home} />
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
            <Friend
              {...props}
              friends={this.state.friends}
              updateFriends={this.updateFriends}
            />
          )}
        />
        <Route
          path="/friend-form"
          render={props => (
            <FriendForm {...props} updateFriends={this.updateFriends} />
          )}
        />
      </div>
    );
  }
}

export default App;
