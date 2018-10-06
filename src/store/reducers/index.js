import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import PostsReducer from './posts';
import UsersReducer from './users';

const root = combineReducers({
    form: formReducer,
    posts: PostsReducer,
    users: UsersReducer
});

export default root;
