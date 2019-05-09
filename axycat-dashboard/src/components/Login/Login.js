import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {!this.props.isLogin && <div className='issues-popup'>
                    <div className='issues-popup-inner'>
                        <div className='issues-popup-inner-wrapper'>
                            <h1 onClick={this.props.handleLogin}>Login</h1>
                        </div>
                    </div>
                </div>}
            </div>
        )
    }
}

export default Login;