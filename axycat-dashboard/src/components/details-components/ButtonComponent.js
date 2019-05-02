import React from 'react';
import './ButtonComponent.scss';

function ButtonComponent(props) {
  return <button className={props.class} onClick={props.handler}>{props.name}</button>;
}

export default ButtonComponent;
