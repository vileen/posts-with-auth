import * as actionTypes from './actionTypes';
import axios from '../../axios';

const fetchPostsStart = () => {
    return {
        type: actionTypes.FETCH_POSTS_START
    };
};

const fetchPostsSuccess = ({ data }) => {
    return {
        type: actionTypes.FETCH_POSTS_SUCCESS,
        payload: data
    };
};

const fetchPostsFail = err => {
    return {
        type: actionTypes.FETCH_POSTS_FAIL,
        payload: err
    };
};

export const fetchPosts = () => {
    return dispatch => {
        dispatch(fetchPostsStart());
        axios
            .get(`/posts`)
            .then(result => {
                dispatch(fetchPostsSuccess(result));
            })
            .catch(err => {
                dispatch(fetchPostsFail(err));
            });
    };
};
