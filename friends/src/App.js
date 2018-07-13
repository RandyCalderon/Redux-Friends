import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFriends } from './actions/index';
import FriendForm from './components/FriendForm';
import Friends from './components/Friends';


class App extends Component {
  componentDidMount() {
    this.props.fetchFriends()
  }

  render() {
    return (
      <div>
        {this.props.fetching ? (
          <p>List will load in a second please wait...</p>
        ) : (
        <Friends friends={this.props.friends} />)}
        <FriendForm /> 
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    fetching: state.fetchingFriends,
    fetched: state.friendsFetches,
    friends: state.friends
  }
}

export default connect (mapStateToProps, {
  fetchFriends
})(App);