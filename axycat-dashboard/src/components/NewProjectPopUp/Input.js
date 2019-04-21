import React, {Component} from 'react';
import TitleComponent from '../details-components/TitleComponent';
import './Input.scss'

export default class Input extends Component {
  constructor(props) {
    super(props);
  }

  render() {
   const {props} = this;
   const {label} = this.props;

    return (
      <label className="label">
        {label}
        <input type={props.type}
               name={props.name}
               onChange={props.onChange}
               placeholder={props.placeholder}
               className="input" />
      </label>
    );
  }
};