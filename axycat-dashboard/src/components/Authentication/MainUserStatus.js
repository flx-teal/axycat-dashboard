import React from 'react';
import Authentication from './Authentication';
import {auth} from '../../config/fbConfig';
import UserProfile from './UserProfile';

export default class MainUserStatus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuth: false,
            userEmail: '',
            userUID: ''
        };
    }

    componentDidMount() {
        auth.onAuthStateChanged(user => {
            if (user) {
                this.setState({isAuth: true, userEmail: user.email, userUID: user.uid})
            } else {
                this.setState({isAuth: false})
            }
        })
    }

    render() {
        return (
            <div>
                {this.state.isAuth ?
                    <UserProfile  user={this.state}/> :
                    <Authentication />
                }
            </div>
        )
    }
}