import * as actionTypes from '../actions/actionTypes';

const initialState = {
    posts: [],
    error: null,
    loading: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_POSTS_START:
            return {
                ...state,
                loading: true
            };
        case actionTypes.FETCH_POSTS_SUCCESS:
            return {
                ...state,
                posts: action.payload,
                loading: false
            };
        case actionTypes.FETCH_POSTS_FAIL:
            return {
                ...state,
                error: action.payload,
                loading: false
            };
        default:
            return {
                ...state
            };
    }
};

export default reducer;
