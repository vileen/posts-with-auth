import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './containers/Login';
import Dashboard from './containers/Dashboard';
import Menu from './containers/Menu';

class App extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <Menu /> {/* show it conditionally if authenticated */}
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/" exact component={Dashboard} />
                    </Switch>
                </Fragment>
            </Router>
        );
    }
}
export default App;
