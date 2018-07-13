import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFriends } from '../actions'

class FriendForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            email: ''
        }
    }


    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmitFriend = () => {
        this.setState({

        })
    }

    render() {
        return (
            <div>
                <input onChange={this.handleChange} type="text" name='name' placeholder='Name' />
                <input onChange={this.handleChange} type="number" name='age' placeholder='Age' />
                <input onChange={this.handleChange} type="text" name='email' placeholder='Email' />
                <button onClick=''>Add Friend</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        friends: state.friends,
        error: state.error
    };
}

export default connect(mapStateToProps, {
    fetchFriends
})(FriendForm);
