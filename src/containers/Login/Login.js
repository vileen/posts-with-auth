import React, { Component, Fragment } from 'react';
import { Button, FormControl, InputLabel, Input, Paper, Avatar, withStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { LockOutlined } from '@material-ui/icons';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

import Snackbar from '../../components/UI/Snackbar';
import { logIn } from '../../store/actions';

const styles = theme => ({
    layout: {
        width: 'auto',
        display: 'block',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto'
        }
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main
    },
    form: {
        width: '100%',
        marginTop: theme.spacing.unit
    },
    submit: {
        marginTop: theme.spacing.unit * 3
    },
    error: {
        backgroundColor: theme.palette.error.dark
    }
});

class Login extends Component {
    renderField = field => {
        return (
            <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor={field.name}>{field.label}</InputLabel>
                <Input
                    error={!!field.meta.error}
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
        const { classes, valid, handleSubmit, isLoggedIn, areWrongCredentials } = this.props;

        let content = (
            <Fragment>
                <main className={classes.layout}>
                    <Paper className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockOutlined />
                        </Avatar>
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
                                Zaloguj się
                            </Button>
                            <Snackbar type="error" message="Błędne dane logowania" open={areWrongCredentials} />
                        </form>
                    </Paper>
                </main>
            </Fragment>
        );
        if (isLoggedIn) {
            content = <Redirect to="/" />;
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

const mapDispatchToProps = dispatch => ({
    onLogIn: values => dispatch(logIn(values))
});

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
