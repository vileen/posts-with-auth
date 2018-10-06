import React, { Component, Fragment } from 'react';
import Snackbar from '@material-ui/core/Snackbar';

const withErrorHandler = (WrappedComponent, axios) => {
    /*eslint react/display-name:0*/
    return class extends Component {
        state = {
            error: null,
            open: false
        };

        constructor(props) {
            super(props);

            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({
                    error: null
                });

                return req;
            });

            this.resInterceptor = axios.interceptors.response.use(
                res => res,
                error => {
                    this.setState({
                        open: true,
                        error: error
                    });
                }
            );
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }

        handleClose = () => {
            this.setState({ open: false, error: null });
        };

        render() {
            const { open, error } = this.state;

            return (
                <Fragment>
                    <Snackbar
                        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                        open={open}
                        onClose={this.handleClose}
                        ContentProps={{
                            'aria-describedby': 'message-id'
                        }}
                        message={<span id="message-id">{error}</span>}
                    />
                    <WrappedComponent {...this.props} />
                </Fragment>
            );
        }
    };
};

export default withErrorHandler;