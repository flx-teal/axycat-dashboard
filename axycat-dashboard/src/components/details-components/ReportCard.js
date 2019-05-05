import React, { Component } from 'react';
import GoogleChart from './GoogleChart';
import TitleComponent from './TitleComponent';
import './ReportCard.scss';

class ReportCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let prData, passes, failed;
    if (this.props.data) {
      prData = this.props.data;
      console.log(prData);
      passes = prData.passes.length;
      failed = prData.incomplete.length;
    }

    return (
      <div className='card-container'>
        <div className='card-title'>
          <TitleComponent subtitle={`Overall WCAG 2.0 Compliance`} />
        </div>
        <div className='card-data'>
          <div className='card-data_satisfy'>
            <p className='card-data_satisfy__title-gray'>Satisfied :</p>
            <p className='card-data_satisfy__value-gray'>{passes} </p>
            <p className='card-data_satisfy__title-blue'>Failed :</p>
            <p className='card-data_satisfy__value-blue'>{failed}</p>
          </div>
          <div className='card-data_chart'>
            <GoogleChart data={prData} />
            <p className='card-data_total'>{passes + failed}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ReportCard;
