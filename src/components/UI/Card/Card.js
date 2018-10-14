import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Typography, withStyles, Divider } from '@material-ui/core';
import ContentLoader from 'react-content-loader';

const styles = theme => ({
    root: {
        height: 380,
        width: 310,
        marginBottom: '1rem',
        marginTop: 0,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    title: {
        fontSize: 14
    },
    caption: {
        color: theme.palette.text.secondary
    },
    body: {
        marginTop: '1rem'
    }
});

const card = ({ classes, title, body, caption }) => {
    let content = (
        <ContentLoader height={380} width={310} speed={2} primaryColor="#f3f3f3" secondaryColor="#ecebeb">
            <rect x="8" y="7" rx="4" ry="4" width="235.87" height="24.52" />
            <rect x="8" y="78.2" rx="3" ry="3" width="112.2" height="10.06" />
            <rect x="6.14" y="134.57" rx="3" ry="3" width="288.42" height="14.17" />
            <rect x="6.14" y="157.57" rx="3" ry="3" width="203.15" height="14.17" />
            <rect x="6.14" y="111.57" rx="3" ry="3" width="250.8" height="14.17" />
            <rect x="6.14" y="179.57" rx="3" ry="3" width="250.8" height="14.17" />
            <rect x="6.14" y="200.57" rx="3" ry="3" width="203.15" height="14.17" />
            <rect x="7" y="40" rx="4" ry="4" width="183.46" height="24.52" />
        </ContentLoader>
    );

    if (title && body && caption) {
        content = (
            <Fragment>
                <Typography variant="headline" component="h2">
                    {title.toUpperCase()}
                </Typography>
                <Typography type="caption" className={classes.caption}>
                    {caption}
                </Typography>
                <Divider component="hr" />
                <Typography className={classes.body} component="p">
                    {body}
                </Typography>
            </Fragment>
        );
    }

    return (
        <Card className={classes.root}>
            <CardContent>{content}</CardContent>
        </Card>
    );
};

card.propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string,
    caption: PropTypes.string,
    body: PropTypes.string
};

export default withStyles(styles)(card);
