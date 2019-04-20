import React from 'react';
import TitleComponent from './TitleComponent';
import './IsueCard.scss';

function IsueCard(props) {
  return (
    <div className='card-container'>
      <div className='card-title'>
        <TitleComponent title={props.title} />
      </div>
      <div className='card-data_report'>
        <p className='card-data_report-barriers'>founded barriers</p>
        <div className='card-data_value'>
          <p className='card-data_report-value_blue'>{props.value} </p>
          <p className='card-data_report-value_gray'>{props.percentage}%</p>
        </div>
      </div>
    </div>
  );
}

export default IsueCard;
