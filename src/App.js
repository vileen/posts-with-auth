import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Login from './containers/Login';
import Dashboard from './containers/Dashboard';
import Menu from './containers/Menu';

class App extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    {this.props.isLoggedIn ? <Menu /> : null} {/* guard??? */}
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/" exact component={Dashboard} />
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

App.propTypes = {
    isLoggedIn: PropTypes.bool
};

export default connect(mapStateToProps)(App);
