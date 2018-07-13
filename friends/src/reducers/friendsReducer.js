import {
    FETCHING_FRIEND,
    FETCHED_FRIENDS,
    ADDING_FRIEND,
    ERROR
} from '../actions'

const initialState = {
    fetchingFriends: false,
    friendsFetched: false,
    friendUpdated: false,
    friends: [],
    error: null
}

export const friendsReduced = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_FRIEND:
        return Object.assign({}, state, {
            fetchingFriends: true,
        });
        case FETCHED_FRIENDS:
        return Object.assign({}, state, {
            fetchingFriends: false,
            friendsFetched: true,
            friends: action.payload
        })
       case ADDING_FRIEND: 
       return Object.assign({}, state, {
           friendUpdated: true
       })
       case ERROR: 
       return Object.assign({}, state, {
           fetching: false,
           error: action.payload
       })
       default:
       return state;
    }  
}