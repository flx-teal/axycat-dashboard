import React, { Component } from 'react';
import GoogleChart from './GoogleChart';
import TitleComponent from './TitleComponent';
import './ReportCard.scss';

class ReportCard extends Component {
  render() {
    const { data } = this.props;
    const { passes, violations } = data;

    return (
      <div className='card-container'>
        <div className='card-title'>
          <TitleComponent subtitle={`Overall WCAG 2.0 Compliance`} />
        </div>
        <div className='card-data'>
          <div className='card-data_satisfy'>
            <p className='card-data_satisfy__title-gray'>Satisfied :</p>
            <p className='card-data_satisfy__value-gray'>{passes.length} </p>
            <p className='card-data_satisfy__title-blue'>Failed :</p>
            <p className='card-data_satisfy__value-blue'>{violations.length}</p>
          </div>
          <div className='card-data_chart'>
            <GoogleChart data={data} />
            <p className='card-data_total'>
              {passes.length + violations.length}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

ReportCard.defaultProps = {
  data: {
    passes: [],
    violations: []
  }
};
export default ReportCard;
