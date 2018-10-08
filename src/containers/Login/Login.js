import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { logIn } from '../../store/actions';
import { Field, reduxForm } from 'redux-form';
import { Redirect } from 'react-router-dom';

const styles = theme => ({
    form: {
        width: '100%',
        marginTop: theme.spacing.unit
    },
    submit: {
        marginTop: theme.spacing.unit * 3
    }
});

class Login extends Component {
    renderField = field => {
        const { areWrongCredentials } = this.props;

        return (
            <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor={field.name}>{field.label}</InputLabel>
                <Input
                    error={!!field.meta.error || areWrongCredentials}
                    placeholder={field.placeholder ? field.placeholder : null}
                    type={field.type}
                    id={field.name}
                    autoComplete={field.autoComplete}
                    name={field.name}
                    autoFocus={!!field.autoFocus}
                    {...field.input}
                />
            </FormControl>
        );
    };

    handleSubmit = values => {
        this.props.onLogIn(values);
    };

    render() {
        const { classes, valid, handleSubmit, isLoggedIn } = this.props;

        let content = (
            <form className={classes.form} onSubmit={handleSubmit(this.handleSubmit)}>
                <Field
                    label="Email"
                    placeholder="Podaj adres email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    autoFocus={true}
                    component={this.renderField}
                />
                <Field
                    label="Hasło"
                    placeholder="Podaj hasło"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    component={this.renderField}
                />
                <Button
                    disabled={!valid}
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Sign in
                </Button>
            </form>
        );
        if (isLoggedIn) {
            content = <Redirect push to="/posts" />;
        }

        return <Fragment>{content}</Fragment>;
    }
}

const validate = values => {
    const errors = {};

    if (!values.email) {
        errors.email = true;
    }

    if (!values.password) {
        errors.password = true;
    }

    return errors;
};

Login.propTypes = {
    classes: PropTypes.object.isRequired,
    valid: PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    areWrongCredentials: PropTypes.bool.isRequired
};

const mapStateToProps = ({ auth }) => {
    return {
        areWrongCredentials: auth.error,
        isLoggedIn: auth.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLogIn: values => dispatch(logIn(values))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(
    withStyles(styles)(
        reduxForm({
            validate,
            form: 'LogInForm'
        })(Login)
    )
);
