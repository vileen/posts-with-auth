import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Snackbar } from '@material-ui/core';

import SnackbarContent from './SnackbarContent';

class StyledSnackbar extends Component {
    state = {
        open: false
    };

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.open !== prevState.open) {
            return {
                open: nextProps.open
            };
        }

        return null;
    }

    render() {
        const { message, type, handleClose } = this.props;

        return (
            <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center'
                }}
                onClose={handleClose ? handleClose : null}
                open={this.state.open}
            >
                <SnackbarContent variant={type} message={message} />
            </Snackbar>
        );
    }
}

StyledSnackbar.propTypes = {
    message: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired,
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func
};

export default StyledSnackbar;
