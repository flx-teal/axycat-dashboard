import React, { Component } from 'react';
import TitleComponent from './TitleComponent';
import './ReportCard.scss';
import ChartVerticalMeter from './ChartVerticalMeter';

class ReportCard extends Component {
  render() {
    return (
      <div className='card-container'>
        <div className='card-title'>
          <TitleComponent subtitle={`WCAG 2.0 issues`} />
        </div>
        <div className='card-data'>
          <div className='card-data_vertical'>
            <ChartVerticalMeter data={this.props.data} />
          </div>
        </div>
      </div>
    );
  }
}

export default ReportCard;
