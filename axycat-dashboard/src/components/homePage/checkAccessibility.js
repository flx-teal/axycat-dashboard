import React from 'react';
import './checkAccessibility.scss'
import {Redirect} from 'react-router-dom';
import {Spinner} from '../NewProjectPopUp/Spinner';

class CheckAccessibility extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      reports: [],
      showError: false,
      id: '',
      redirect: false,
      isLoading: false
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
    let inputValue = this.state.value;
    if (!inputValue.match(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/)) {
      return this.setState({showError: true})
    }
    if (inputValue !== '' && !/^https?/i.test(inputValue)) {
      inputValue = 'http://' + inputValue;
    }
    if (/^https?:\/\/[\w?.&-=]+$/i.test(inputValue)) {
      return this.sendUrl(inputValue)
    }
    if (!/^https?:\/\/[\w?.&-=]+$/i.test(inputValue)) {
      return this.setState({showError: true})
    }
  }

  renderRedirect() {
    const {redirect, reports} = this.state;
    if (redirect) {
      return <Redirect to={{
        pathname: `/detail`,
        state: {
          reports
        }
      }}/>
    }
  }

  sendUrl = (url) => {
    this.setState(() => ({
      isLoading: true
    }));
    localStorage.clear();
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
          reports: json
        });
        localStorage.setItem("reports", JSON.stringify(this.state.reports));
        this.setState({
          redirect: true,
          isLoading: false
        })
      })
      .catch(error => {
        console.log(error);
        this.setState({
          isLoading: false
        })
      });
    //Set empty string into input field
    this.setState({value: ''});
  };

  render() {
    const {isLoading} = this.state;

    return (
      <div className='check-section'>
        <h1>Is your website accessible to users with disabilities</h1>
        <form className='check-form'>
          <input className='check-input' placeholder='Web site address' type="text" value={this.state.value}
                 onChange={this.handleChange}/>
          {this.renderRedirect()}
          <button onClick={this.handleSubmit} className='check-button' type="submit">Check</button>
        </form>
        {this.state.showError ? <div className="error-list" role="alert">
          Please enter valid web site address <a href="#" className="error-alert">www.example.com</a>
        </div> : null}
        <p>1 billion people around the world live with a disability - 15% of global population</p>
        {isLoading && <Spinner/>}
      </div>
    );
  }
}

export default CheckAccessibility