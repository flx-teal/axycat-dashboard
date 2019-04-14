import React from 'react';
import GoogleChart from './GoogleChart';
import TitleComponent from './TitleComponent';
import './ReportCard.scss';

function ReportCard() {
  return (
    <div className='card-container'>
      <div className='card-title'>
        <TitleComponent subtitle={`Overall WCAG 2.0 Compliance`} />
      </div>
      <div className='card-data'>
        <div className='card-data_satisfy'>
          <p className='card-data_satisfy__title-gray'>Satisfied :</p>
          <p className='card-data_satisfy__value-gray'>56 (44.4%)</p>
          <p className='card-data_satisfy__title-blue'>Failed :</p>
          <p className='card-data_satisfy__value-blue'>70 (55.6%)</p>
        </div>
        <div className='card-data_chart'>
          <GoogleChart />
          <p className='card-data_total'>126</p>
        </div>
      </div>
    </div>
  );
}

export default ReportCard;
