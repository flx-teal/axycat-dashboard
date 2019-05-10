import React, { Component } from 'react';
import TitleComponent from './TitleComponent';
import './ReportCard.scss';
import ChartHorizMeter from './ChartHorizMeter';

class ReportCard extends Component {
  render() {
    return (
      <div className='card-container'>
        <div className='card-title'>
          <TitleComponent subtitle={`User impact and priority of issues`} />
        </div>
        <div className='card-data'>
          <div className='card-data_meter'>
            <ChartHorizMeter data={this.props.data} />
          </div>
        </div>
      </div>
    );
  }
}

export default ReportCard;
