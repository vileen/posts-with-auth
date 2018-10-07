import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions';

class Menu extends Component {
    render() {
        return <div>Menu: Profile // LogOut // Dashboard</div>;
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogOut: dispatch(actions.logOut)
    };
};

export default connect(
    null,
    mapDispatchToProps
)(Menu);
