import React from 'react';
import './Login.scss'
import {auth} from "../../../config/fbConfig";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userEmail: '',
            userPassword: '',
            loginStatus: false
        };

        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleEmail = (e) => {
        e.preventDefault();
        this.setState({userEmail: e.target.value});
    };

    handlePassword = (e) => {
        e.preventDefault();
        this.setState({userPassword: e.target.value});
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const {userEmail, userPassword} = this.state;
        auth.signInWithEmailAndPassword(userEmail, userPassword)
            .then(() => {
                this.setState({loginStatus: true});
                localStorage.removeItem('userUID')
            })
            .then(() => {
                this.props.handleLogin();
            })
            .catch((e) => {
                return e;
            });
    };

    render() {
        return (
            <div>
                {!this.props.isLogin && <div className='login-popup'>
                    <div className='login-popup-inner'>
                        <div className='login-popup-inner-wrapper'>
                            <span onClick={this.props.handleLogin} className='login-close'></span>
                            <div className='login-info'>
                                <h2>Sign In</h2>
                                <form className="login-info-form">
                                    <input onChange={this.handleEmail} type="email" placeholder='Your Email *'/>
                                    <input onChange={this.handlePassword} type="password" placeholder='Password *'/>
                                </form>
                                <button onClick={this.handleSubmit} className='btn btn-blue'>Login</button>
                            </div>
                        </div>
                    </div>
                </div>}
            </div>
        )
    }
}

export default Login;