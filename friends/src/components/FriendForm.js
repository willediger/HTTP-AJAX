import React from "react";
import axios from "axios";

const emptyFriend = {
  name: "",
  age: "",
  email: ""
};

export default class FriendForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // assigns friend to emptyFriend, but subsequent changes to this.state.friend will not affect emptyFriend
      // see https://stackoverflow.com/questions/7574054/javascript-how-to-pass-object-by-value/35760654#35760654
      // or https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
      friend: {}
    };
  }

  componentDidMount = () => {
    this.resetState();
  };

  resetState = () => {
    // assigns friend to emptyFriend, but subsequent changes to this.state.friend will not affect emptyFriend
    // see https://stackoverflow.com/questions/7574054/javascript-how-to-pass-object-by-value/35760654#35760654
    // or https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
    this.setState({ friend: Object.assign({}, emptyFriend) });
  };

  changeHandler = ev => {
    ev.persist();
    let value = ev.target.value;
    this.setState(prevState => ({
      friend: { ...prevState.friend, [ev.target.name]: value }
    }));
  };

  handleSubmit = event => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/friends", this.state.friend)
      .then(response => {
        this.props.updateFriends(response.data);
        this.props.history.push("/friend-list");
        this.resetState();
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <h2>Add New Friend</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            onChange={this.changeHandler}
            placeholder="Name"
            value={this.state.friend.name}
          />
          <div className="baseline" />

          <input
            type="number"
            name="age"
            onChange={this.changeHandler}
            placeholder="Age"
            value={this.state.friend.age}
          />
          <div className="baseline" />

          <input
            type="email"
            name="email"
            onChange={this.changeHandler}
            placeholder="Email"
            value={this.state.friend.email}
          />
          <div className="baseline" />
          <button type="submit">Add New Friend</button>
        </form>
      </div>
    );
  }
}
