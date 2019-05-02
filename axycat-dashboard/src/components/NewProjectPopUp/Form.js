import React, {Component} from 'react';
import Input from './Input';
import ButtonComponent from '../details-components/ButtonComponent';
import './Form.scss';
import { Redirect } from 'react-router-dom';
import { addErrorToCloud } from '../../config/fbConfig';
import { Spinner } from "./Spinner";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectName: '',
      siteUrl: '',
      clientName: '',
      redirect: false,
      error: '',
      createdProjectId: null,
      isLoading: false
    };

    this.handleProjectNameChange = this.handleProjectNameChange.bind(this);
    this.handleSiteUrlChange = this.handleSiteUrlChange.bind(this);
    this.handleClientNameChange = this.handleClientNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  sendData = (url, data) => {
    this.setState(() => ({
      isLoading: true
    }));

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
          //If check is correct with violations errors, then we send JSON to FIREBASE via creatError function
          return addErrorToCloud(json, data);
        }
       })
       .then((createdProjectId) => {
        this.setState(() => ({
          isLoading: false,
          createdProjectId: createdProjectId,
          redirect: true
        }));
       })
       .catch(error => console.log(error));
     //Set empty string into input field
     this.setState({value: ''})
  };

  handleSubmit(event) {
    event.preventDefault();

    if (!this.state.projectName ||
        !this.state.siteUrl ||
        !this.state.clientName) {
      return this.setState({ error: 'Please, fill all fields correctly!' });
    }

    if(!this.state.siteUrl.match(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/)) {
      return this.setState({ error: 'Please, enter valid URL!' });
    }

    const data = {
      projectName: this.state.projectName,
      website: this.state.siteUrl,
      clientName: this.state.clientName,
      date: new Date(),
      issues: '',
      status: 'new'
    };

    this.sendData(data.website, data);
  }

  handleProjectNameChange(event) {
    this.setState({projectName: event.target.value});
    this.setState({ error: ''});
  }

  handleSiteUrlChange(event) {
    this.setState({siteUrl: event.target.value});
    this.setState({ error: ''});
  }

  handleClientNameChange(event) {
    this.setState({clientName: event.target.value});
    this.setState({ error: ''});
  }

  renderRedirect() {
    const { redirect, projectName, createdProjectId } = this.state;
    if (redirect) {
      return <Redirect to={{
        pathname: `/project-details/accessibility-overview/${createdProjectId}`,
        state: {
          projectName,
          createdProjectId
        }
      }}/>
    }
  }

  render() {
    const { isLoading } = this.state;
    const {closePopup} = this.props;

    return (
      <form className="form">
        {(this.state.error !== '')
          ? <span className="error">{this.state.error}</span>
          : ''
        }
        <Input type="text"
               label="Project Name"
               name="projectName"
               onChange={this.handleProjectNameChange}
               placeholder={'Enter Project Name'}/>
        <Input type="text"
               label="Site URL"
               name="siteUrl"
               onChange={this.handleSiteUrlChange}
               placeholder={'www.example.com'}/>
        <Input type="text"
               label="Client Name"
               name="clientName"
               onChange={this.handleClientNameChange}
               placeholder={'Enter Client Name'}/>
        <div className="buttons">
          <ButtonComponent class='btn-white' name='Cancel' onClick={ closePopup }/>
          {this.renderRedirect()}
          <ButtonComponent class='btn-blue' name='Save' handler={ this.handleSubmit }/>
        </div>
        { isLoading && <Spinner /> }
      </form>
    );
  }
}
