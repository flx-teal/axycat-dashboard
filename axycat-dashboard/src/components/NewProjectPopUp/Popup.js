import React, {Component} from 'react';
import './Popup.scss';
import Form from './Form'
import TitleComponent from '../details-components/TitleComponent'
import ButtonComponent from "../details-components/ButtonComponent";

export default class Popup extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {closePopup, projectsListData} = this.props;
    const createNewProjectTitle = 'Create New Project';

    return (
      <div className='popup'>
        <div className='popup-inner'>
          <div onClick={closePopup} className="close"></div>
          <TitleComponent title={createNewProjectTitle}/>
          <Form projectsListData={projectsListData}
            onClick={closePopup}/>
        </div>
      </div>
    );
  }
}
