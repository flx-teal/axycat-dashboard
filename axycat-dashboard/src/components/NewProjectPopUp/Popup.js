import React, {Component} from 'react';
import './Popup.scss';
import Form from './Form';
import TitleComponent from '../details-components/TitleComponent';

export default class Popup extends Component {
  render() {
    const { closePopup, projectsListData } = this.props;
    const createNewProjectTitle = 'Create New Project';
    
    return (
      <div className='popup'>
        <div className='popup-inner'>
          <div onClick={closePopup} className='close' />
          <TitleComponent title={createNewProjectTitle} />
          <Form projectsListData={projectsListData} />
        </div>
      </div>
    );
  }
}
