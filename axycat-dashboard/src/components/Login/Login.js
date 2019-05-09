import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        console.log(this.props);
        return (
            <div>
                {!this.props.isClicked && <div className='issues-popup'>
                    <div className='issues-popup-inner'>
                        <div className='issues-popup-inner-wrapper'>
                            <h1 onClick={this.props.handleClick}>Login</h1>
                        </div>
                    </div>
                </div>}
            </div>
        )
    }
}

export default Login;