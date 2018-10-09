import * as actionTypes from './actionTypes';

const authSuccess = () => {
    return {
        type: actionTypes.LOG_IN_SUCCESS
    };
};

const authFail = () => {
    return {
        type: actionTypes.LOG_IN_SUCCESS
    };
};

export const logIn = ({ email, password }) => {
    return dispatch => {
        if (email === 'test@test.com' && password === 'test') {
            const expirationDate = new Date(new Date().getTime() + 24 * 3600 * 1000);
            localStorage.setItem('email', email);
            localStorage.setItem('expirationDate', expirationDate.toString());
            dispatch(authSuccess());
        } else {
            dispatch(authFail());
        }
    };
};

export const logOut = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('expirationDate');

    return {
        type: actionTypes.LOG_OUT
    };
};

export const authCheckState = () => {
    return dispatch => {
        const email = localStorage.getItem('email');
        if (email) {
            const expirationDate = localStorage.getItem('expirationDate');
            if (expirationDate > new Date()) {
                dispatch(logOut());
            } else {
                dispatch(authSuccess());
            }
        } else {
            dispatch(logOut());
        }
    };
};
