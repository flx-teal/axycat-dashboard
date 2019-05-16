import React from 'react';
import './SignUp.scss'
import {auth, db, facebookProvider, googleProvider} from "../../../config/fbConfig";

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ifLoginError: false,
            errorMessage: '',
            userFullName: '',
            userEmail: '',
            userPhone: '',
            userPassword: '',
            userPasswordRepeat: '',
        };

        this.handleInputData = this.handleInputData.bind(this);
    }

    handleInputData = (e) => {
        e.preventDefault();
        this.setState({[e.target.id]: e.target.value});
    };

    handleSwitch = () => {
        this.props.handleSignUp();
        this.props.handleLogin();
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const {errorMessage, userEmail, userPassword, userFullName, userPhone, userPasswordRepeat} = this.state;
        if (userFullName === '') {
            return this.setState({ifLoginError: true, errorMessage: `Please enter Full Name`})
        }
        if (userPassword !== userPasswordRepeat) {
            return this.setState({ifLoginError: true, errorMessage: `Passwords don't match.`})
        }
        auth.createUserWithEmailAndPassword(userEmail, userPassword)
            .then(cred => {
                this.setState({ifLoginError: false});
                localStorage.removeItem('userUID');
                this.props.handleSignUp();
                return db.collection('users').doc(cred.user.uid).set({
                    userFullName: userFullName,
                    userPhone: userPhone
                });
            })
            .catch((e) => {
                this.setState({ifLoginError: true, errorMessage: e.message});
            });
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

    handleGoogle = () => {
        auth.signInWithPopup(googleProvider)
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
                {!this.props.isSignUp && <div className='signup-popup'>
                    <div className='signup-popup-inner'>
                        <div className='signup-popup-inner-wrapper'>
                            <span onClick={this.props.handleSignUp} className='signup-close'></span>
                            <div className='signup-info'>
                                <h2>Sign Up</h2>
                                <form className="signup-info-form">
                                    <input onChange={this.handleInputData} id='userFullName' type="text"
                                           placeholder='Full Name *'/>
                                    <input onChange={this.handleInputData} id='userEmail' type="email"
                                           placeholder='Your Email *'/>
                                    <input onChange={this.handleInputData} id='userPhone' data-politespace
                                           data-grouplength='3,3,4' type="text" placeholder='Phone'/>
                                    <input onChange={this.handleInputData} id='userPassword' type="password"
                                           placeholder='Password *'/>
                                    <input onChange={this.handleInputData} id='userPasswordRepeat' type="password"
                                           placeholder='Repeat Password *'/>
                                    {this.state.ifLoginError ?
                                        <p className='error-message'>{this.state.errorMessage}</p> : null}
                                </form>
                                <button onClick={this.handleSubmit} className='btn btn-blue'>Sign Up</button>
                                <div className='signin-choice'>
                                    <span className='signin-choice-line'> </span><p className='signin-choice-or'>or</p>
                                    <span className='signin-choice-line'> </span>
                                </div>
                                <div className='other-signin'>
                                    <p className='other-signin-label'>Sign Up with: </p>
                                    <span className='other-signin-google' onClick={this.handleGoogle}>G</span>
                                    <span className='other-signin-facebook' onClick={this.handleFacebook}>f</span>
                                </div>
                                <div className='signin-signup'>
                                    <span className='signin-signup-info'>Already have an account?</span><span
                                    className='signin-signup-accept' onClick={this.handleSwitch}>Sign In</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}
            </div>
        )
    }
}


export default SignUp;