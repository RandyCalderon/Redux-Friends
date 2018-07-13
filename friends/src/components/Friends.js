import React from 'react';

const Friends = (props) => {
    return (
        <ul>
            {props.friends.map(friend => {
                return (
                    <li key={friend.id}>
                    <p>Name: {friend.name}</p>
                    <p>Email: {friend.email}</p>
                    <p>Age: {friend.age}</p>
                    </li>
                )
            })}
        </ul>
    )
};

export default Friends;