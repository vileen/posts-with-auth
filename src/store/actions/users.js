import * as actionTypes from './actionTypes';

export const getLoggedInUser = () => {
    const loggedInUserId = localStorage.getItem('userId');
    return {
        type: actionTypes.GET_LOGGED_IN_USER,
        payload: loggedInUserId
    };
};
