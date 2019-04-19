import React from 'react';
import DetailsCardComponent from './details-components/DetailsCardComponent';
import ListComponent from './details-components/ListComponent';
import SignupCompponent from './details-components/SignupComponent';
import FooterComponent from './details-components/FooterComponent';
import './Details.scss';

const Detail = () => {
  return (
    <div className='details-wrapper'>
      <DetailsCardComponent/>
      <ListComponent/>
      <SignupCompponent/>
      <FooterComponent/>
    </div>
  );
};

export default Detail;
