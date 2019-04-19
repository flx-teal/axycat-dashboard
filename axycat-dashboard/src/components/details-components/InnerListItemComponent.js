import React from 'react';
import './InnerListItemComponent.scss';

function InnerListItemComponent() {
  return (
    <div className='inner-list-item'>
      <div className='inner-container'>
        <div className='inner-item'>
          <h4 className='inner-item__title'>Rule description</h4>
          <p className='inner-item__text'>
            Buttons must have discreble text that clearly describe the
            destination,purpose, function, or action for screeen reader users.
          </p>
        </div>
        <div className='inner-item'>
          <h4 className='inner-item__title'>Element location</h4>
          <input type='text' />
        </div>
        <div className='inner-item'>
          <h4 className='inner-item__title'>Element source</h4>
          <textarea rows='5' cols='50' />
        </div>
      </div>
      <div className='inner-container'>
        <div className='inner-item'>
          <h4 className='inner-item__title'>Issue Type:</h4>
          <p className='inner-item__text'>WCAG 2.0 (A: Failure</p>
          <p className='inner-item__text'>Section 508:Failure</p>
        </div>
        <div className='inner-item'>
          <h4 className='inner-item__title'>WCAG Succes Criteria:</h4>
          <p className='inner-item__text'>4.1.2 Name, Role, Value</p>
        </div>
        <div className='inner-item'>
          <h4 className='inner-item__title'>Section 508 Guidelines:</h4>
          <p className='inner-item__text'>
            1194.22.a Text equivalent for non-text elements
          </p>
        </div>
      </div>
      <div className='inner-container'>
        <div className='inner-item'>
          <h4 className='inner-item__title'>User impact</h4>
          <p className='inner-item__text'>Critical</p>
        </div>
        <div className='inner-item'>
          <h4 className='inner-item__title'>Disabilities Affected</h4>
          <p className='inner-item__text'>Blindness</p>
          <p className='inner-item__text'>Deafblindness</p>
        </div>
      </div>
    </div>
  );
}

export default InnerListItemComponent;
