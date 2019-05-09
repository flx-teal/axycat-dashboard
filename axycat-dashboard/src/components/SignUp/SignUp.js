import React from 'react';
import './SignUp.scss'

class SignUp extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {!this.props.isSignUp && <div className='signup-popup'>
                    <div className='signup-popup-inner'>
                        <div className='signup-popup-inner-wrapper'>
                            <span onClick={this.props.handleSignUp} className='signup-close'></span>
                            <div className='signup-info'>
                                <h2>SignUp</h2>
                                <form className="signup-info-form">
                                    <input type="text" placeholder='Full Name *'/>
                                    <input type="text" placeholder='Your Email *'/>
                                    <input type="text" placeholder='Phone'/>
                                    <input type="text" placeholder='Password *'/>
                                    <input type="text" placeholder='Repeat Password *'/>
                                    <div className='signup-info-form-check'>
                                        <input type="checkbox"/>
                                        <span>Remember password?</span>
                                    </div>
                                </form>
                                <button className='btn btn-blue'>Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>}
            </div>
        )
    }
}

export default SignUp;