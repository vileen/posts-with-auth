import React from 'react';
import PropTypes from 'prop-types';
import { Grid, withStyles } from '@material-ui/core';

const styles = () => ({
    root: {
        flexGrow: 1,
        marginTop: 30
    },
    item: {
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex'
    }
});

const layout = ({ children, classes }) => {
    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Grid className={classes.item} item xs={12} sm={8} md={8} lg={8} xl={8}>
                    {children}
                </Grid>
            </Grid>
        </div>
    );
};

layout.propTypes = {
    children: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(layout);
