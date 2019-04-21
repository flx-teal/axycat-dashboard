import React from 'react';
import './ButtonComponent.scss';

function ButtonComponent(props) {
  return <button className={props.class}>{props.name}</button>;
}

export default ButtonComponent;
