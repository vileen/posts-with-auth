import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Login from './containers/Login';
import Profile from './components/Profile';
import NotFound from './components/NotFound';
import Dashboard from './containers/Dashboard';
import Menu from './containers/Menu';
import { authCheckState } from './store/actions';
import PrivateRoute from './hoc/PrivateRoute';

class App extends Component {
    componentDidMount() {
        this.props.onTryToAutoSignUp();
    }

    render() {
        const { isLoggedIn } = this.props;

        return (
            <Router>
                <Fragment>
                    {isLoggedIn ? <Menu /> : null}
                    <Switch>
                        <PrivateRoute path="/" exact component={Dashboard} authenticated={isLoggedIn} />
                        <PrivateRoute path="/profile" component={Profile} authenticated={isLoggedIn} />
                        <Route path="/login" component={Login} />
                        <Route component={NotFound} />
                    </Switch>
                </Fragment>
            </Router>
        );
    }
}

const mapStateToProps = ({ auth }) => {
    return {
        isLoggedIn: auth.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onTryToAutoSignUp: () => dispatch(authCheckState())
    };
};

App.propTypes = {
    isLoggedIn: PropTypes.bool,
    onTryToAutoSignUp: PropTypes.func.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
