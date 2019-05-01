import React from 'react';
import './checkAccessibility.scss'
import {NavLink} from "react-router-dom";
import {addErrorToCloud} from "../../config/fbConfig";

class CheckAccessibility extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            items: [],
            showError: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        this.setState({showError: false})
    }

    handleSubmit(event) {
        event.preventDefault();
        if (!/^https?:\/\/[\w?.&-=]+$/i.test(this.state.value)) {
            this.setState({showError: true})
        }
        else {
            this.sendUrl(this.state.value)
        }
    }

    sendUrl = (url) => {
        fetch('http://localhost:2000/check', {
            body: JSON.stringify({
                'url': url
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        })
            .then(result => result.json())
            .then(json => {
                //This is only for test, we can delete it later
                this.setState({
                    items: json.violations
                });
                //Check result
                if (json.violations) {
                    //If check is correct with violations erorrs, then we send JSON to FIREBASE via creatError function
                    addErrorToCloud(json);
                }
            });
        //Set empty string into input field
        this.setState({value: ''})
    };

    render() {
        return (
            <div className='check-section'>
                <h1>Is your website accessible to users with disabilities</h1>
                <form className='check-form'>
                    <input className='check-input' placeholder='Web site address' type="text" value={this.state.value}
                           onChange={this.handleChange}/>
                    <NavLink to={{pathname: "/"}} onClick={this.handleSubmit} className='check-button' type="submit">Check</NavLink>
                </form>
                {this.state.showError ? <div className="error-list" role="alert">
                    Please enter valid web site address <a href="#" className="error-alert">http://example.com</a>
                </div> : null}
                <p>1 billion people aroud the world live with a disability - 15% of global population</p>
            </div>
        );
    }
}

export default CheckAccessibility