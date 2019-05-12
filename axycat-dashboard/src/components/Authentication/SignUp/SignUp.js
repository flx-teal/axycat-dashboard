import React from 'react';
import './SignUp.scss'
import {auth, db} from "../../../config/fbConfig";

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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

    handleSubmit = (e) => {
        e.preventDefault();
        const {userEmail, userPassword} = this.state;
        auth.createUserWithEmailAndPassword(userEmail, userPassword).then(cred => {
            localStorage.removeItem('userUID');
            this.props.handleSignUp();
            return db.collection('users').doc(cred.user.uid).set({
                userFullName: this.state.userFullName,
                userPhone: this.state.userPhone
            });
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
                                    <input onChange={this.handleInputData} id='userFullName' type="text" placeholder='Full Name *'/>
                                    <input onChange={this.handleInputData} id='userEmail' type="email" placeholder='Your Email *'/>
                                    <input onChange={this.handleInputData} id='userPhone' data-politespace data-grouplength='3,3,4' type="text" placeholder='Phone'/>
                                    <input onChange={this.handleInputData} id='userPassword' type="password" placeholder='Password *'/>
                                    <input onChange={this.handleInputData} id='userPasswordRepeat' type="password" placeholder='Repeat Password *'/>
                                </form>
                                <button onClick={this.handleSubmit} className='btn btn-blue'>Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>}
            </div>
        )
    }
}


export default SignUp;