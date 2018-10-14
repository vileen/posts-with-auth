import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import PostsReducer from './posts';
import AuthReducer from './auth';
import UsersReducer from './users';

const root = combineReducers({
    form: formReducer,
    auth: AuthReducer,
    posts: PostsReducer,
    users: UsersReducer
});

export default root;
