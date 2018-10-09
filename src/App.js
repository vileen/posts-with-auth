import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Login from './containers/Login';
import Profile from './components/Profile';
import NotFoundRoute from './components/NotFoundRoute';
import Dashboard from './containers/Dashboard';
import Menu from './containers/Menu';
import PrivateRoute from './hoc/PrivateRoute';
import { authCheckState } from './store/actions';

class App extends Component {
    componentDidMount() {
        this.props.onTryToAutoSignUp();
    }

    render() {
        return (
            <Router>
                <Fragment>
                    {this.props.isLoggedIn ? <Menu /> : null} {/* guard??? */}
                    <Switch>
                        <PrivateRoute path="/" exact component={Dashboard} />
                        <PrivateRoute path="/profile" component={Profile} />
                        <Route path="/login" component={Login} />
                        <Route path="*" component={NotFoundRoute} />
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
