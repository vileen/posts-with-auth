import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const privateRoute = ({ component: Component, authenticated, ...rest }) => (
    <Route {...rest} render={props => (authenticated === true ? <Component {...props} /> : <Redirect to="/login" />)} />
);

export default privateRoute;
