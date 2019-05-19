import React, {Component} from 'react';
import './AddIssuePopUp.scss';
import AddIssueForm from './AddIssueForm';
import TitleComponent from '../details-components/TitleComponent';

export default class Popup extends Component {

  render() {
    const {closePopup, projectId, issuesList} = this.props;
    const createNewProjectTitle = 'Add issue';

    return (
      <div className='popup'>
        <div className='popup-inner small-popup'>
          <div onClick={closePopup} className='close'></div>
          <TitleComponent title={createNewProjectTitle}/>
          <AddIssueForm
            closePopup={closePopup}
            projectId={projectId}
            issuesList={issuesList}/>
        </div>
      </div>
    );
  }
}
