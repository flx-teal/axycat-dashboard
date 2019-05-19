import React from 'react';
import './AddIssueForm.scss';
import Input from '../NewProjectPopUp/Input';
import {Spinner} from '../NewProjectPopUp/Spinner';
import ButtonComponent from '../details-components/ButtonComponent';
import {updateIssuesInCloud} from '../../config/fbConfig';

export default class AddIssuePopUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      impact: 'Minor',
      error: '',
      isLoading: false
    };

    this.handleImpactChange = this.handleImpactChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
  }

  handleNameChange(event) {
    this.setState({name: event.target.value});
    this.setState({error: ''});
  }

  handleDescriptionChange(event) {
    this.setState({description: event.target.value});
    this.setState({error: ''});
  }

  handleImpactChange(event) {
    this.setState({impact: event.target.value});
    this.setState({error: ''});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState(() => ({
      isLoading: true
    }));
    // this.props.projectId;
    if (!this.state.name ||
      !this.state.description) {
      return this.setState({error: 'Please, fill all fields correctly!'});
    }

    const data = {
      creationDate: new Date().toString(),
      description: this.state.name,
      help: this.state.description,
      status: 'New',
      nodes: [{
        all: [],
        any: [{
          data: [''],
          impact: this.state.impact,
          message: '',
          relatedNodes: [],
        }],
        failureSummary: '',
        html: '',
        impact: this.state.impact,
        none: [],
        target: [{}]
      }],
      tags: ['cat.aria', 'wcag2a', 'wcag412']
    };

    this.props.issuesList.violations.push(data);

    updateIssuesInCloud(this.props.projectId, this.props.issuesList)
      .then(() => {
        this.setState(() => ({isLoading: false}));
      })
      .then(() => this.props.closePopup())
      .catch((error) => {
        this.setState(() => ({isLoading: false}));
        console.log(error)
      });
  };

  render() {
    const {isLoading} = this.state;
    const {closePopup} = this.props;

    return (
      <form className="form">
        {(this.state.error !== '')
          ? <span className="error">{this.state.error}</span>
          : ''
        }
        <Input type="text"
               label="Name"
               name="name"
               onChange={this.handleNameChange}
               placeholder={'Enter Issue Name'}/>
        <Input type="text"
               label="Description"
               name="description"
               onChange={this.handleDescriptionChange}
               placeholder={"Add Description here..."}/>
        <p className="impact">Impact</p>
        <select onChange={this.handleImpactChange} className="select-impact">
          <option name="minor">Minor</option>
          <option name="moderate">Moderate</option>
          <option name="critical">Critical</option>
          <option name="serious">Serious</option>
        </select>
        <div className="buttons">
          <ButtonComponent class="btn-blue" name="Save" handler={this.handleSubmit}/>
          <ButtonComponent class="btn-white" name="Cancel" handler={closePopup}/>
        </div>
        {isLoading && <Spinner/>}
      </form>
    );
  }
}
