import React from 'react';
import TitleComponent from './TitleComponent';
import './ReportCard.scss';
import ChartHorizMeter from './ChartHorizMeter';

function ReportCard() {
  return (
    <div className='card-container'>
      <div className='card-title'>
        <TitleComponent subtitle={`User impact and priority of issues`} />
      </div>
      <div className='card-data'>
        <div className='card-data_meter'>
          <ChartHorizMeter />
        </div>
      </div>
    </div>
  );
}

export default ReportCard;
