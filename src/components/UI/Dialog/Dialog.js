import React from 'react';
import PropTypes from 'prop-types';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    withStyles,
    withMobileDialog
} from '@material-ui/core';

const styles = () => ({
    content: {
        minWidth: 250
    }
});

const responsiveDialog = ({ fullScreen, classes, title, children, open, handleClose }) => (
    <Dialog fullScreen={fullScreen} open={open} onClose={handleClose} aria-labelledby="responsive-dialog-title">
        <DialogTitle id="responsive-dialog-title">{title}</DialogTitle>
        <DialogContent className={classes.content}>{children}</DialogContent>
        <DialogActions>
            <Button onClick={handleClose} color="primary" autoFocus>
                Zamknij
            </Button>
        </DialogActions>
    </Dialog>
);

responsiveDialog.propTypes = {
    fullScreen: PropTypes.bool.isRequired,
    classes: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.array.isRequired,
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired
};

export default withStyles(styles)(withMobileDialog()(responsiveDialog));
