import React from 'react';
import PropTypes from 'prop-types';

import styles from './Post.module.scss';

const post = props => (
    <li key={props.id}>
        {props.title} :: {props.body}
    </li>
);

post.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
};

export default post;
