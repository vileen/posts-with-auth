import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';

import axios from '../../axios';
import { fetchPosts } from '../../store/actions';
import WithErrorHandler from '../../hoc/WithErrorHandler';
import Card from './Card';
import classes from './Dashboard.module.scss';

class Dashboard extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    static getArrayWithEmptyData(arr, len) {
        while (arr.length < len) {
            arr.push({
                title: '',
                body: '',
                userId: ''
            });
        }
    }

    static renderPosts(posts, users) {
        return _.map(posts, ({ title, body, userId }, index) => {
            let userName = '';
            if (userId) {
                userName = users[userId].name;
            }
            return <Card key={index} title={title} body={body} caption={userName} />;
        });
    }

    render() {
        const { posts, users } = this.props;

        const arr = [];
        Dashboard.getArrayWithEmptyData(arr, 20);
        let content = Dashboard.renderPosts(arr);
        if (posts && posts.length) {
            content = Dashboard.renderPosts(posts, users);
        }

        // render placeholders
        return <div className={classes.posts}>{content}</div>;
    }
}

const mapStateToProps = ({ posts, users }) => {
    return {
        posts: posts.data,
        users: users.list
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchPosts: () => dispatch(fetchPosts())
    };
};

Dashboard.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array,
    users: PropTypes.object
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WithErrorHandler(Dashboard, axios));
