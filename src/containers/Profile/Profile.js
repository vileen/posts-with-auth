import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Divider, TextField, withStyles } from '@material-ui/core';

import * as actions from '../../store/actions';
import Dialog from '../../components/UI/Dialog';

const styles = () => ({
    divider: {
        backgroundColor: 'transparent'
    }
});

class Profile extends Component {
    componentDidMount() {
        this.props.getLoggedInUser();
    }

    static renderField({ label, value }) {
        return (
            <TextField
                label={label}
                defaultValue={value}
                margin="normal"
                fullWidth
                InputProps={{
                    readOnly: true
                }}
            />
        );
    }

    render() {
        const { user, handleClose, classes } = this.props;

        return (
            <Dialog title="Twoje dane" open={true} handleClose={handleClose}>
                {Profile.renderField({ label: 'Imię i nazwisko', value: user.name })}
                <Divider className={classes.divider} component="hr" />
                {Profile.renderField({ label: 'Adres email', value: user.email })}
                <Divider className={classes.divider} component="hr" />
                {Profile.renderField({ label: 'Hasło', value: user.password })}
            </Dialog>
        );
    }
}

Profile.propTypes = {
    user: PropTypes.object.isRequired,
    getLoggedInUser: PropTypes.func.isRequired,
    handleClose: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired
};

const mapStateToProps = ({ users }) => {
    return {
        user: users.current
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getLoggedInUser: userId => dispatch(actions.getLoggedInUser(userId))
    };
};

export default withStyles(styles)(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Profile)
);
