import * as actionTypes from '../actions/actionTypes';

const initialState = {
    isLoggedIn: false,
    error: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOG_IN_SUCCESS:
            return {
                isLoggedIn: true,
                error: false
            };
        case actionTypes.LOG_IN_FAIL:
            return {
                isLoggedIn: false,
                error: true
            };
        case actionTypes.LOG_OUT:
            return {
                ...state,
                isLoggedIn: false
            };
        default:
            return {
                ...state
            };
    }
};

export default reducer;
