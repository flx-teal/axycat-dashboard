import React from 'react';
import {signOut} from "../../config/fbConfig";
import {NavLink} from "react-router-dom";
import './UserProfile.scss'

class UserProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSignOut: false
        };
        this.handleSignOut = this.handleSignOut.bind(this);
    }

    handleSignOut() {
        localStorage.removeItem('userUID');
        this.setState({isSignOut: true});
        signOut();
    }

    render() {
        let nameLogo = this.props.user.userEmail.substring(0, 1).toUpperCase();
        return (
            <div className='buttons-container'>
                <NavLink className='logo-name' to={{
                    pathname: '/listing',
                    state: {
                        userUID: this.props.user.userUID
                    }
                }}>{nameLogo}</NavLink>
                <button onClick={this.handleSignOut} className='btn btn-white' name='Sign up'>Sign out</button>
            </div>
        )
    }
}

export default UserProfile