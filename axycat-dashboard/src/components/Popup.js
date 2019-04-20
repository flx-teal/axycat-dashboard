import React, {Component} from 'react';
import './Popup.scss';
import Form from './Form'
import TitleComponent from './TitleComponent'

export default class Popup extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {closePopup} = this.props;
    const createNewProjectTitle = 'Create New Project';

    return (
      <div className='popup'>
        <div className='popup\_inner'>
          <button onClick={closePopup}>x</button>
          <TitleComponent title={createNewProjectTitle} />
          <Form />
        </div>
      </div>
    );
  }
}
