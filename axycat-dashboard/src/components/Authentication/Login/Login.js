import React from 'react';
import './Login.scss'
import {auth, facebookProvider} from "../../../config/fbConfig";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ifLoginError: false,
            errorMessage: '',
            userEmail: '',
            userPassword: '',
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
                this.setState({ifLoginError: true, errorMessage: e.message});
            });
    };

    handleSwitch = () => {
        this.props.handleLogin();
        this.props.handleSignUp();
    };

    handleFacebook = () => {
      auth.signInWithPopup(facebookProvider)
          .then((result, error) => {
              if (error) {
                  console.log(error);
              } else {
                  console.log(result);
              }
          })
    };

    render() {
        return (
            <div>
                {!this.props.isLogin && <div className='login-popup'>
                    <div className='login-popup-inner'>
                        <div className='login-popup-inner-wrapper'>
                            <span onClick={this.props.handleLogin} className='login-close'> </span>
                            <div className='login-info'>
                                <h2>Sign In</h2>
                                <form className="login-info-form">
                                    <input onChange={this.handleEmail} type="email" placeholder='Your Email *'/>
                                    <input onChange={this.handlePassword} type="password" placeholder='Password *'/>
                                    {this.state.ifLoginError ?
                                        <p className='error-message'>{this.state.errorMessage}</p> : null}
                                </form>
                                <button onClick={this.handleSubmit} className='btn btn-blue'>Sign In</button>
                                <div className='login-choice'>
                                    <span className='login-choice-line'> </span><p className='login-choice-or'>or</p>
                                    <span className='login-choice-line'> </span>
                                </div>
                                <div className='other-login'>
                                    <p className='other-login-label'>Sign In with: </p>
                                    <span className='other-login-google'>G</span>
                                    <span className='other-login-facebook' onClick={this.handleFacebook}>f</span>
                                </div>
                                <p className='policy-info'>Click "Sign In" above to accept AxyCAT's Terms of Service &
                                    Privacy Policy</p>
                                <div className='login-signup'>
                                    <span className='login-signup-info'>No account?</span><span
                                    className='login-signup-accept' onClick={this.handleSwitch}>Sign Up</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}
            </div>
        )
    }
}

export default Login;