import React from 'react';
import Authentication from "./Authentication";
import {auth} from "../../config/fbConfig";
import UserProfile from "./UserProfile";
import {Redirect} from "react-router-dom";

export default class MainUserStatus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuth: false,
            userEmail: '',
            userUID: ''
        };

        this.handleIsAuth = this.handleIsAuth.bind(this);
    }

    handleIsAuth() {
        auth.onAuthStateChanged((user) => {
            if (user) {
                this.setState({isAuth: true, userEmail: user.email, userUID: user.uid});
            } else {
                this.setState({isAuth: false, userEmail: null});
            }
        })
    }

    render() {
        return (
            <div>
                {this.state.isAuth ?
                    <UserProfile isAuth={this.handleIsAuth} user={this.state}/> :
                    <Authentication isAuth={this.handleIsAuth}/>
                }
            </div>
        )
    }
}