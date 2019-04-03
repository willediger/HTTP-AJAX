import React, { Component } from 'react';
import FriendList from './components/FriendList'

import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => this.setState({friends: response.data}))
      .catch(err => console.log(err));
  }
  render() {
    console.log(this.state)
    return (
      <div className="App">
        {this.state.friends ?
          <FriendList friends={this.state.friends} /> :
          "Loading Carousel"
        }
      </div>
    );
  }
}

export default App;
