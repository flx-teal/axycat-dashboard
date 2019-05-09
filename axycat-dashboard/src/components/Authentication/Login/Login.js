import React from 'react';
import './Login.scss'

class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {!this.props.isLogin && <div className='login-popup'>
                    <div className='login-popup-inner'>
                        <div className='login-popup-inner-wrapper'>
                            <span onClick={this.props.handleLogin} className='login-close'></span>
                            <div className='login-info'>
                                <h2>SignUp</h2>
                                <form className="login-info-form">
                                    <input type="text" placeholder='Full Name *'/>
                                    <input type="text" placeholder='Your Email *'/>

                                    <div className='login-info-form-check'>
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

export default Login;