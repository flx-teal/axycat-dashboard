import React from 'react';
import {auth} from '../../config/fbConfig';
import {NavLink, Redirect} from 'react-router-dom';
import './UserProfile.scss'

class UserProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        };

        this.handleSignOut = this.handleSignOut.bind(this);
    }

    handleSignOut() {
        this.setState({redirect: true});
        auth.signOut();
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