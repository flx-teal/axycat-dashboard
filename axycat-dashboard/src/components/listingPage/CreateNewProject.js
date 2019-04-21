import React, {Component} from 'react';
import './CreateNewProject.scss';
import NewProjectPopUp from '../NewProjectPopUp/NewProjectPopUp';

export default class CreateNewProject extends Component {

  constructor(props) {
    super(props);
    this.state = {showPopup: false};
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  render() {
    const {props} = this;

    return (
      <div className='createNewProject'>
        <div className='createNewProjectContent'>
          {props.buttonContent &&
          <button onClick={this.togglePopup.bind(this)}><span>{props.buttonContent}</span></button>}
          {props.buttonName &&
          <p>{props.buttonName}</p>
          }
        </div>
        {this.state.showPopup ?
          <NewProjectPopUp projectsListData={this.props.projectsListData}
            closePopup={this.togglePopup.bind(this)}
          />
          : null
        }
      </div>
    );
  }
}