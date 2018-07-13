import axios from 'axios';

export const FETCHING_FRIEND = 'FETCHING_FRIEND'
export const FETCHED_FRIENDS = 'FETCHED_FRIENDS'
export const ADDING_FRIEND = 'ADDED_FRIEND'
export const ERROR = 'ERROR'

export const fetchFriends = () => {
    const promise = axios.get('http://localhost:5000/api/friends');

    return (dispatch) => {
        dispatch({ type: FETCHING_FRIEND})
        promise
        .then( response => {
            dispatch({type: FETCHED_FRIENDS, payload: response.data})
        }).catch (error => {
            dispatch({ type: ERROR, payload: 'ERROR FETCHING FRIENDS'});
        })
    }
}