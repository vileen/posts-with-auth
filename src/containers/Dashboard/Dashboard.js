import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';

import * as actions from '../../store/actions';
import withErrorHandler from '../../hoc/withErrorHandler';
import Post from '../../components/Post';

class Dashboard extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        return _.each(this.props.posts, post => {
            return <Post {...post} />;
        });
    }

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
        posts
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchPosts: () => dispatch(actions.fetchPosts())
    };
};

Dashboard.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withErrorHandler(Dashboard));
