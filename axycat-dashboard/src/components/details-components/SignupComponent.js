import React from 'react';
import TitleComponent from './TitleComponent';
import ButtonComponent from './ButtonComponent';
import './SignupComponent.scss';

function SignupComponent() {
  return (
    <div className='signup-section'>
      <TitleComponent
        title='Sign Up to Save Results'
        subtitle='You can also download Report in PDF file or send it to any e-mail'
      />
      <ButtonComponent class='btn-blue' name='Sign up' />
    </div>
  );
}

export default SignupComponent;
