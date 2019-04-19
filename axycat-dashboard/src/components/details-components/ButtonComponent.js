import React from 'react';
import './ButtonComponent.scss';

function ButtonComponent(props) {
  if (props.name === 'Login')
    return <button className='btn-login'>{props.name}</button>;
  if (props.name === 'Sign up')
    return <button className='btn-signup'>{props.name}</button>;
}

export default ButtonComponent;
