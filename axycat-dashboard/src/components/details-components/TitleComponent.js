import React from 'react';
import './TitleComponent.scss';

function TitleComponent(props) {
  if (props.title && props.subtitle) {
    return (
      <div className='title-container'>
        <h2 className='title'>{props.title}</h2>
        <h3 className='sub-title'>{props.subtitle}</h3>
      </div>
    );
  } else if (props.title && props.subtitle === undefined) {
    return (
      <div className='title-container'>
        <h2 className='title'>{props.title}</h2>
      </div>
    );
  } else if (props.title === undefined && props.subtitle) {
    return (
      <div className='title-container'>
        <h3 className='sub-title'>{props.subtitle}</h3>
      </div>
    );
  }
}

export default TitleComponent;
