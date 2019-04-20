import React from 'react';
import './TitleComponent.scss';

function TitleComponent(props) {
  return (
    <div className='title-container'>
      {props.title && <h2 className='title'>{props.title}</h2>}
      {props.subtitle && <h3 className='sub-title'>{props.subtitle}</h3>}
    </div>
  );
}

export default TitleComponent;
