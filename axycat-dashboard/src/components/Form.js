import React, {Component} from 'react';
import Input from './Input'

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newProject: {
        projectName: '',
        siteUrl: '',
        clientName: ''
      }
    };
  }

  handleSubmit(event) {

  }

  handleChangeFor = (propertyName) => (event) => {
    const { project } = this.state;
    const newContact = {
      ...project,
      [propertyName]: event.target.value
    };
    this.setState({ project: newProject });
  };

  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input type="text" onChange={this.handleChangeFor('firstName')} value={this.state.contact.firstName}/>
          <input type="text" onChange={this.handleChangeFor('lastName')} value={this.state.contact.lastName}/>
          <input type="text" onChange={this.handleChangeFor('phone')} value={this.state.contact.lastName}/>
        </div>


        <Input label='Project Name'
               type={'text'}
               name={'projectName:'}
               value={this.state.projectName}
               placeholder={'Enter Project Name'}
               onChange={this.onInputChange.bind(this)}/>
        <Input label='Site URL'
               type={'text'}
               name={'siteUrl'}
               value={this.state.siteUrl}
               placeholder={'www.example.com'}
               onChange={this.onInputChange.bind(this)}/>
        <Input label='Client Name'
               type={'text'}
               name={'clientName'}
               value={this.state.clientName}
               placeholder={'Enter Client Name'}
               onChange={this.onInputChange.bind(this)}/>

      </form>
    );
  }
}