import React, { Component } from 'react';
import CheckAccessibility from "./homePage/checkAccessibility";
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class Home extends Component {
    render() {
        const {errors} = this.props;
        return (
            <div>
                <CheckAccessibility/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        errors: state.firestore.ordered.errors
    }
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'errors'}
        ])
)(Home);