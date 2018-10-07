import * as actionTypes from './actionTypes';

export const logIn = ({ email, password }) => {
    if (email === 'test@test.com' && password === 'test') {
        return {
            type: actionTypes.LOG_IN_SUCCESS
        };
    }

    return {
        type: actionTypes.LOG_IN_FAIL
    };
};

export const logOut = () => {
    return {
        type: actionTypes.LOG_OUT
    };
};
