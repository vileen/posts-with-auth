import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import axios from '../../axios';

import { fetchPosts } from '../../store/actions';
import withErrorHandler from '../../hoc/withErrorHandler';
import Post from '../../components/Post';
import styles from './Dashboard.module.scss';

class Dashboard extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        return _.each(this.props.posts, post => {
            return <Post {...post} />;
        });
    }

    // to minimize reflows
    renderPlaceholders() {}

    render() {
        const { posts } = this.props;

        let content = this.renderPlaceholders();
        if (posts && posts.length) {
            this.renderPosts();
        }

        // render placeholders
        return <div>{content}</div>;
    }
}

const mapStateToProps = ({ posts }) => {
    return {
        posts: posts.data
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchPosts: () => dispatch(fetchPosts())
    };
};

Dashboard.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withErrorHandler(Dashboard, axios));
