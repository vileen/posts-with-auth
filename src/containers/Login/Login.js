import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';

import * as actions from '../../store/actions';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200
    },
    dense: {
        marginTop: 19
    }
});

class Login extends Component {
    renderField(field) {
        const { classes } = this.props;

        return (
            <div>
                <TextField
                    required
                    label={field.label}
                    placeholder={field.placeholder ? field.placeholder : null}
                    className={classes.textField}
                    margin="normal"
                    {...field.input}
                />
            </div>
        );
    }

    render() {
        const { classes } = this.props;

        return (
            <form className={classes.container} noValidate autoComplete="off">
                <Field
                    label="Email"
                    placeholder="Podaj adres email"
                    name="email"
                    autoFocus
                    component={this.renderField}
                />
                <Field label="Hasło" placeholder="Podaj hasło" name="password" component={this.renderField} />
            </form>
        );
    }
}

const validate = values => {
    const errors = {};

    if (!values.email) {
        errors.email = 'Musisz podać adres email';
    }

    if (!values.password) {
        errors.password = 'Musisz podać hasło';
    }

    return errors;
};

const mapDispatchToProps = dispatch => {
    return {
        onLogIn: values => dispatch(actions.logIn(values))
    };
};

export default connect(
    null,
    mapDispatchToProps
)(
    withStyles(styles)(
        reduxForm({
            validate,
            form: 'LogInForm'
        })(Login)
    )
);
