import React from 'react';
import SignUp from "./SignUp/SignUp";
import Login from "./Login/Login";

class Authentication extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSignUp: false,
            isLogin: false
        };
    }

    handleSignUp = () => {
        this.setState(prevState => ({
            isSignUp: !prevState.isSignUp
        }));
    };

    handleLogin = () => {
        this.setState(prevState => ({
            isLogin: !prevState.isLogin
        }));
    };

    render() {
        return (
            <div className='buttons-container'>
                <button onClick={this.handleSignUp} className='btn btn-blue' name='Sign up'>Sign Up</button>
                <div> {this.state.isSignUp && <SignUp handleLogin={this.handleLogin} handleSignUp={this.handleSignUp}/>}</div>
                <button onClick={this.handleLogin} className='btn btn-white' name='Sign up'>Login</button>
                <div>{this.state.isLogin && <Login handleLogin={this.handleLogin} handleSignUp={this.handleSignUp}/>}</div>
            </div>
        )
    }
}

export default Authentication