import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { ExitToApp, AccountBox } from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import { logOut } from '../../store/actions';

const classes = {
    root: {
        flexGrow: 1
    },
    grow: {
        flexGrow: 1
    }
};

class MenuAppBar extends Component {
    handleLogOut = () => {
        this.props.onLogOut();
        this.props.history.push('/login');
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="display1" color="inherit" className={classes.grow}>
                            <Button component={Link} to="/" color="inherit">
                                Posty
                            </Button>
                        </Typography>
                        <IconButton component={Link} to="/profile" color="inherit" aria-label="Account">
                            <AccountBox />
                        </IconButton>
                        <IconButton onClick={this.handleLogOut} color="inherit" aria-label="LogOut">
                            <ExitToApp />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

MenuAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
    onLogOut: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
};

const mapDispatchToProps = dispatch => {
    return {
        onLogOut: () => dispatch(logOut())
    };
};

export default connect(
    null,
    mapDispatchToProps
)(withRouter(withStyles(classes)(MenuAppBar)));
