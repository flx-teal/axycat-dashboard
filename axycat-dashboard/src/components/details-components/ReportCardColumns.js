import React from 'react';
import TitleComponent from './TitleComponent';
import './ReportCard.scss';
import ChartVerticalMeter from './ChartVerticalMeter';

function ReportCard() {
  return (
    <div className='card-container'>
      <div className='card-title'>
        <TitleComponent subtitle={`WCAG 2.0 issues`} />
      </div>
      <div className='card-data'>
        <div className='card-data_vertical'>
          <ChartVerticalMeter />
        </div>
      </div>
    </div>
  );
}

export default ReportCard;
